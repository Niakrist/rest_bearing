import { models } from "../models/models.js";

class SepController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const sep = await models.Sep.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(sep);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const seps = await models.Sep.findAll();
      return res.json(seps);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SepController();
