import { Sequelize } from "sequelize";
import { models } from "../models/models.js";

class BearingController {
  async create(req, res) {
    try {
      const {
        id1c,
        id1cRvz,
        price,
        priceRvz,
        quantity,
        quantityRvz,
        name,
        url,
        title,
        h1,
        description,
        group,
        for_img,
        brand,
        analog,
        analogUrl,
        images,
        content,
        innerDiameter,
        outerDiameter,
        widthBearing,
        weight,
        new_product,
        stock,
        popular,
        bearing_for_corpus,
        corpus,
        series,
        bushing,
        bearingDesignId,
        bearingSealId,
        bearingTypeId,
        cornerId,
        feature2Id,
        featureId,
        holeId,
        innerRingId,
        loadTypeId,
        materialId,
        outerRingId,
        rollerTypeId,
        rowCountId,
        sealId,
        sepId,
        standartId,
        bushingTypeId,
        lubricationHoleId,
        connectionId,
      } = req.body;

      const existingCategory = await models.BearingDesign.findOne({
        where: {
          [Sequelize.Op.or]: [{ name }, { title }, { url }],
        },
      });

      if (existingCategory) {
        return res.status(400).json({
          message: `Подшипник ${name} уже существует`,
        });
      }

      const bearing = await models.Bearing.create({
        id1c,
        id1cRvz,
        price,
        priceRvz,
        quantity,
        quantityRvz,
        name,
        url,
        title,
        h1,
        description,
        group,
        for_img,
        brand,
        analog,
        analogUrl,
        images,
        content,
        innerDiameter,
        outerDiameter,
        widthBearing,
        weight,
        new_product,
        stock,
        popular,
        bearing_for_corpus,
        corpus,
        series,
        bushing,
        bearingDesignId,
        bearingSealId,
        bearingTypeId,
        cornerId,
        feature2Id,
        featureId,
        holeId,
        innerRingId,
        loadTypeId,
        materialId,
        outerRingId,
        rollerTypeId,
        rowCountId,
        sealId,
        sepId,
        standartId,
        bushingTypeId,
        lubricationHoleId,
        connectionId,
      });
      return res.json(bearing);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const bearing = await models.Bearing.findAll();
      return res.json(bearing);
    } catch (error) {
      console.log(error);
    }
  }
  async getById(req, res) {}
}

export default new BearingController();
