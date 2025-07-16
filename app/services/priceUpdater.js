import { promises as fs } from "fs";
import { createReadStream } from "fs";
import zlib from "zlib";
import path from "path";
import { fileURLToPath } from "url";
import { Op } from "sequelize";
import { models } from "../models/models.js";
import { parse } from "@fast-csv/parse";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PriceUpdater {
  constructor() {
    this.priceDir = path.join(__dirname, "../../../../home/ftprvz/price");
  }

  async updatePrices() {
    try {
      const latestFile = await this.findLatestPriceFile();
      if (!latestFile) {
        console.log("No price files found");
        return;
      }

      console.log("Processing file:", latestFile);
      const priceMap = await this.parsePriceFile(latestFile);

      // Сбрасываем все цены перед обновлением
      await this.resetAllPrices();

      await this.updateDatabasePrices(priceMap);
      console.log("Price update completed successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async resetAllPrices() {
    console.log("Resetting all prices to null...");
    await models.Bearing.update({ price: null, priceRvz: null }, { where: {} });
    console.log("All prices reset completed");
  }

  async findLatestPriceFile() {
    const files = await fs.readdir(this.priceDir);
    const priceFiles = files.filter((f) => f.match(/^\d{8}_\d+\.csv\.gz$/));
    return priceFiles.sort().reverse()[0]
      ? path.join(this.priceDir, priceFiles[0])
      : null;
  }

  async parsePriceFile(filePath) {
    return new Promise((resolve, reject) => {
      const priceMap = new Map();

      createReadStream(filePath)
        .pipe(zlib.createGunzip())
        .pipe(
          parse({
            headers: false,
            skipRows: 1,
            ignoreEmpty: true,
          })
        )
        .on("data", (row) => {
          if (row[0] && row[1]) {
            const price = parseFloat(row[1].replace(",", "."));
            if (!isNaN(price)) {
              priceMap.set(row[0].trim(), price);
            }
          }
        })
        .on("end", () => {
          console.log(`Parsed ${priceMap.size} valid prices`);
          resolve(priceMap);
        })
        .on("error", reject);
    });
  }

  async updateDatabasePrices(priceMap) {
    const id1cList = Array.from(priceMap.keys());
    const bearings = await models.Bearing.findAll({
      where: {
        [Op.or]: [
          { id1c: { [Op.in]: id1cList } },
          { id1cRvz: { [Op.in]: id1cList } },
        ],
      },
      attributes: ["id", "id1c", "id1cRvz", "price", "priceRvz"],
    });

    let updated = 0;
    for (const bearing of bearings) {
      const updates = {};
      const priceForId1c = priceMap.get(bearing.id1c?.trim());
      const priceForId1cRvz = priceMap.get(bearing.id1cRvz?.trim());

      if (priceForId1c && priceForId1c !== bearing.price) {
        updates.price = priceForId1c;
      }
      if (priceForId1cRvz && priceForId1cRvz !== bearing.priceRvz) {
        updates.priceRvz = priceForId1cRvz;
      }

      if (Object.keys(updates).length > 0) {
        await bearing.update(updates);
        updated++;
      }
    }

    console.log(`Updated ${updated} of ${bearings.length} bearings`);
  }
}

const priceUpdater = new PriceUpdater();
export default priceUpdater;
