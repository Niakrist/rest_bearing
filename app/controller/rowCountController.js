import { models } from "../models/models.js";

class RowCountController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const rowCount = await models.RowCount.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(rowCount);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const rowCounts = await models.RowCount.findAll();
      return res.json(rowCounts);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new RowCountController();
