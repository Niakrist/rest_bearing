import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class MaterialController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.Material.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const material = await models.Material.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(material);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const materials = await models.Material.findAll();
      return res.json(materials);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MaterialController();
