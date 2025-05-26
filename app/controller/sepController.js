import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class SepController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.Sep.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const sep = await models.Sep.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(sep);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const seps = await models.Sep.findAll();
      return res.json(seps);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SepController();
