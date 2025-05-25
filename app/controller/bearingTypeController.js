import { models } from "../models/models.js";

class BearingTypeController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const bearingType = await models.BearingType.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(bearingType);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const bearingTypes = await models.BearingType.findAll();
      return res.json(bearingTypes);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BearingTypeController();
