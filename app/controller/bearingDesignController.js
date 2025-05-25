import { models } from "../models/models.js";

class BearingDesignController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const bearingDesign = await models.BearingDesign.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(bearingDesign);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const bearingDesigns = await models.BearingDesign.findAll();
      return res.json(bearingDesigns);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BearingDesignController();
