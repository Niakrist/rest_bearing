import { models } from "../models/models.js";

class GrooveController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const groove = await models.Groove.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(groove);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const grooves = await models.Groove.findAll();
      return res.json(grooves);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new GrooveController();
