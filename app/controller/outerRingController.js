import { models } from "../models/models.js";

class OuterRingController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const outerRing = await models.OuterRing.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(outerRing);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const outerRings = await models.OuterRing.findAll();
      return res.json(outerRings);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new OuterRingController();
