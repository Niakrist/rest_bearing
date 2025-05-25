import { models } from "../models/models.js";

class StandartController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const standart = await models.Standart.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(standart);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const standarts = await models.Standart.findAll();
      return res.json(standarts);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new StandartController();
