import express from "express";
import dotenv from "dotenv";

import { sequelize } from "./app/db.js";

dotenv.config();

const PORT = process.env.PORT || 4001;

const app = express();

app.get("/", (req, res) => res.json({ message: "1" }));

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
