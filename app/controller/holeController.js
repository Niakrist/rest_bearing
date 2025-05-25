import { models } from "../models/models.js";

class HoleController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const hole = await models.Hole.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(hole);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const holes = await models.Hole.findAll();
      return res.json(holes);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new HoleController();
