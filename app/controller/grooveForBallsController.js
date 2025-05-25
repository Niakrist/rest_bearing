import { models } from "../models/models.js";

class GrooveForBallsController {
  async create(req, res) {
    try {
      const { name, title, h1, description, url } = req.body;
      const grooveForBalls = await models.GrooveForBalls.create({
        name,
        title,
        h1,
        description,
        url,
      });
      return res.json(grooveForBalls);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const grooveForBalls = await models.GrooveForBalls.findAll();
      return res.json(grooveForBalls);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new GrooveForBallsController();
