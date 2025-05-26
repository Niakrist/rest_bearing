import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class OuterRingController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.OuterRing.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const outerRing = await models.OuterRing.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(outerRing);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const outerRings = await models.OuterRing.findAll();
      return res.json(outerRings);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new OuterRingController();
