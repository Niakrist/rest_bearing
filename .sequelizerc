const path = require("path");
const { fileURLToPath } = require("url");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = require("./config/config.cjs");

module.exports = {
  config: path.resolve(__dirname, "config", "config.cjs"),
  "migrations-path": path.resolve(__dirname, "migrations"),
  "seeders-path": path.resolve(__dirname, "seeders"),
  "models-path": path.resolve(__dirname, "models"),
};
