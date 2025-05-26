import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class FeatureController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.Feature.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const feature = await models.Feature.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(feature);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const features = await models.Feature.findAll();
      return res.json(features);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FeatureController();
