import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class CorpusController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;

      const existingCategory = await models.Corpus.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Категория ${name} уже существует`,
        });
      }

      const corpus = await models.Corpus.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(corpus);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const corpus = await models.Corpus.findAll();
      return res.json(corpus);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CorpusController();
