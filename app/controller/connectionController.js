import { Sequelize } from "sequelize";

import { models } from "../models/models.js";

class Connection {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.Connection.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const connection = await models.Connection.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(connection);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const connections = await models.Connection.findAll();
      return res.json(connections);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Connection();
