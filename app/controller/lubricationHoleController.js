import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class LubricationHoleController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const existingCategory = await models.LubricationHole.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });
      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const lubricationHole = await models.LubricationHole.create({
        name,
        title,
        h1,
        description,
        url,
      });

      return res.json(lubricationHole);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const lubricationHoles = await models.LubricationHole.findAll();
      return res.json(lubricationHoles);
    } catch (error) {
      console.log(error);
    }
  }

  async editById(req, res) {
    try {
      const { id, name, title, h1, description, url } = req.body;
      if (!id) {
        return res.status(400).json({
          message: `id: ${id} не существует 1`,
        });
      }
      const lubricationHole = await models.LubricationHole.findOne({
        where: { id },
      });

      lubricationHole.name = name ? name : lubricationHole.name;
      lubricationHole.title = title ? title : lubricationHole.title;
      lubricationHole.description = description
        ? description
        : lubricationHole.description;
      lubricationHole.h1 = h1 ? h1 : lubricationHole.h1;
      lubricationHole.url = url ? url : lubricationHole.url;

      await lubricationHole.save();
      return res.json(lubricationHole);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          message: `id: ${id} не существует 2`,
        });
      }

      const lubricationHole = await models.LubricationHole.destroy({
        where: { id },
      });
      return res.json(lubricationHole);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new LubricationHoleController();
