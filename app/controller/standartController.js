import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class StandartController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.Standart.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const standart = await models.Standart.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(standart);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const standarts = await models.Standart.findAll();
      return res.json(standarts);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new StandartController();
