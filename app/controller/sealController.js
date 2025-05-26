import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class SealController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.Seal.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const seal = await models.Seal.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(seal);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const seals = await models.Seal.findAll();
      return res.json(seals);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SealController();
