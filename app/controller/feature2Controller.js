import { models } from "../models/models.js";

class Feature2Controller {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const feature2 = await models.Feature2.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(feature2);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const feature2s = await models.Feature2.findAll();
      return res.json(feature2s);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Feature2Controller();
