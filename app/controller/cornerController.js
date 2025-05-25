import { models } from "../models/models.js";

class CornerController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const corner = await models.Corner.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(corner);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const corners = await models.Corner.findAll();
      return res.json(corners);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CornerController();
