import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class LoadTypeController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.LoadType.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const loadType = await models.LoadType.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(loadType);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const loadTypes = await models.LoadType.findAll();
      return res.json(loadTypes);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new LoadTypeController();
