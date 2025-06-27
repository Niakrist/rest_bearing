import priceUpdater from "./services/priceUpdater.js";

async function testUpdate() {
  console.log("Starting manual price update...");
  try {
    await priceUpdater.updatePrices();
    console.log("Manual update completed");
  } catch (error) {
    console.error("Update failed:", error);
  } finally {
    process.exit(0);
  }
}

testUpdate();
