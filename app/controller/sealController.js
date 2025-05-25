import { models } from "../models/models.js";

class SealController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
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
