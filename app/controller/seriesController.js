import { models } from "../models/models.js";

class SeriesController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const series = await models.Series.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(series);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const seriess = await models.Series.findAll();
      return res.json(seriess);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SeriesController();
