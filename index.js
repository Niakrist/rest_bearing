import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

import { sequelize } from "./app/db.js";
import { models } from "./app/models/models.js";
import router from "./app/router/index.js";

dotenv.config();

const PORT = process.env.PORT || 4001;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());

app.set("trust proxy", true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "app", "static")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://rvzgroup.ru");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api/v1", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
