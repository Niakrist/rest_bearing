import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class SeriesController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.Series.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const series = await models.Series.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(series);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const seriess = await models.Series.findAll();
      return res.json(seriess);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SeriesController();
