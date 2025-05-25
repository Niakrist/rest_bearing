import { models } from "../models/models.js";

class LoadTypeController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const loadType = await models.LoadType.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(loadType);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const loadTypes = await models.LoadType.findAll();
      return res.json(loadTypes);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new LoadTypeController();
