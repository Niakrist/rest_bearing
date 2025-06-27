import cron from "node-cron";
import priceUpdater from "./services/priceUpdater.js";

// Запускаем обновление каждый день в 3:00 утра
cron.schedule("0 3 * * *", () => {
  console.log("Running daily price update...");
  priceUpdater.updatePrices();
});

console.log("Cron jobs scheduled");
