import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class RollerTypeController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.RollerType.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const rollerType = await models.RollerType.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(rollerType);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const rollerTypes = await models.RollerType.findAll();
      return res.json(rollerTypes);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new RollerTypeController();
