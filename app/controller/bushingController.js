import { models } from "../models/models.js";

class BushingController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const bushing = await models.Bushing.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(bushing);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const bushings = await models.Bushing.findAll();
      return res.json(bushings);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BushingController();
