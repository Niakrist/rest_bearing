import { models } from "../models/models.js";

class CorpusController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
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
