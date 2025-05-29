import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class InnerRingController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.InnerRing.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const innerRing = await models.InnerRing.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(innerRing);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const innerRings = await models.InnerRing.findAll();
      return res.json(innerRings);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new InnerRingController();
