import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class BushingTypeController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const existingCategory = await models.BushingType.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });
      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const bushingType = await models.BushingType.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(bushingType);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const bushingTypes = await models.BushingType.findAll();
      return res.json(bushingTypes);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BushingTypeController();
