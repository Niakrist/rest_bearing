import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class MontageController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.Montage.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const montage = await models.Montage.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(montage);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      const montages = await models.Montage.findAll();
      return res.json(montages);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MontageController();
