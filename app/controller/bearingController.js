import { Op } from "sequelize";
import { sequelize } from "../db.js";
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
          [Op.or]: [{ name }, { title }, { url }],
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
      let {
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
        limit,
        page,
        innerDiameter,
        outerDiameter,
        widthBearing,
        popular,
      } = req.body;

      page = page || 1;
      limit = limit || 12;

      let offset = page * limit - limit;

      const whereClause = {};

      if (bearingDesignId) {
        const bearingDesignIds = bearingDesignId.split("|");
        whereClause.bearingDesignId = { [Op.in]: bearingDesignIds };
      }

      if (bearingSealId) {
        const bearingSealIds = bearingSealId.split("|");
        whereClause.bearingSealId = { [Op.in]: bearingSealIds };
      }
      if (bearingTypeId) {
        const bearingTypeIds = bearingTypeId.split("|");
        whereClause.bearingTypeId = { [Op.in]: bearingTypeIds };
      }
      if (cornerId) {
        const cornerIds = cornerId.split("|");
        whereClause.cornerId = { [Op.in]: cornerIds };
      }
      if (feature2Id) {
        const feature2Ids = feature2Id.split("|");
        whereClause.feature2Id = { [Op.in]: feature2Ids };
      }
      if (featureId) {
        const feature2Ids = featureId.split("|");
        whereClause.featureId = { [Op.in]: feature2Ids };
      }
      if (holeId) {
        const holeIds = holeId.split("|");
        whereClause.holeId = { [Op.in]: holeIds };
      }
      if (innerRingId) {
        const innerRingIds = innerRingId.split("|");
        whereClause.innerRingId = { [Op.in]: innerRingIds };
      }
      if (loadTypeId) {
        const loadTypeIds = loadTypeId.split("|");
        whereClause.loadTypeId = { [Op.in]: loadTypeIds };
      }
      if (materialId) {
        const materialIds = materialId.split("|");
        whereClause.materialId = { [Op.in]: materialIds };
      }
      if (outerRingId) {
        const outerRingIds = materialId.split("|");
        whereClause.outerRingId = { [Op.in]: outerRingIds };
      }
      if (rollerTypeId) {
        const rollerTypeIds = rollerTypeId.split("|");
        whereClause.rollerTypeId = { [Op.in]: rollerTypeIds };
      }
      if (rowCountId) {
        const rowCountIds = rowCountId.split("|");
        whereClause.rowCountId = { [Op.in]: rowCountIds };
      }
      if (sealId) {
        const sealIds = sealId.split("|");
        whereClause.sealId = { [Op.in]: sealIds };
      }
      if (sepId) {
        const sepIds = sepId.split("|");
        whereClause.sepId = { [Op.in]: sepIds };
      }
      if (standartId) {
        const standartIds = bearingDesignId.split("|");
        whereClause.standartId = { [Op.in]: standartIds };
      }
      if (bushingTypeId) {
        const bushingTypeIds = bushingTypeId.split("|");
        whereClause.bushingTypeId = { [Op.in]: bushingTypeIds };
      }
      if (lubricationHoleId) {
        const lubricationHoleIds = lubricationHoleId.split("|");
        whereClause.lubricationHoleId = { [Op.in]: lubricationHoleIds };
      }
      if (connectionId) {
        const connectionIds = connectionId.split("|");
        whereClause.connectionId = { [Op.in]: connectionIds };
      }
      if (innerDiameter) {
        whereClause.innerDiameter = innerDiameter;
      }
      if (outerDiameter) {
        whereClause.outerDiameter = outerDiameter;
      }
      if (widthBearing) {
        whereClause.widthBearing = widthBearing;
      }
      if (popular === true) {
        whereClause.popular = popular;
      }

      const bearing = await models.Bearing.findAndCountAll({
        where: whereClause,
        limit,
        offset,
        order: [
          // Сортируем по минимальной цене из двух полей
          [
            sequelize.literal(
              'CASE WHEN "priceRvz" IS NOT NULL AND "priceRvz" > 0 THEN LEAST("price", "priceRvz") ELSE "price" END'
            ),
            "ASC",
          ],
          // Дополнительная сортировка для одинаковых цен (по вашему усмотрению)
          ["id", "ASC"],
        ],
      });
      return res.json(bearing);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Ошибка при поиске подшипника" });
    }
  }

  async getAllWithoutPagination(req, res) {
    try {
      let { popular } = req.query || {};
      const whereClause = {};
      if (popular) {
        whereClause.popular = popular;
      }

      const bearing = await models.Bearing.findAll({
        where: whereClause,
      });
      return res.json(bearing);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Ошибка при поиске подшипника" });
    }
  }

  async getAllByQuery(req, res) {
    try {
      let {
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
        limit,
        page,
        innerDiameter,
        outerDiameter,
        widthBearing,
        minInnerDiameter,
        maxInnerDiameter,
        minOuterDiameter,
        maxOuterDiameter,
        minWidth,
        maxWidth,
        minPrice,
        maxPrice,
        searchTerm,
      } = req.query;

      page = page || 1;
      limit = limit || 12;

      let offset = page * limit - limit;

      const whereClause = {};

      if (bearingDesignId) {
        const bearingDesignIds = bearingDesignId.split("|");
        whereClause.bearingDesignId = { [Op.in]: bearingDesignIds };
      }

      if (bearingSealId) {
        const bearingSealIds = bearingSealId.split("|");
        whereClause.bearingSealId = { [Op.in]: bearingSealIds };
      }
      if (bearingTypeId) {
        const bearingTypeIds = bearingTypeId.split("|");
        whereClause.bearingTypeId = { [Op.in]: bearingTypeIds };
      }
      if (cornerId) {
        const cornerIds = cornerId.split("|");
        whereClause.cornerId = { [Op.in]: cornerIds };
      }
      if (feature2Id) {
        const feature2Ids = feature2Id.split("|");
        whereClause.feature2Id = { [Op.in]: feature2Ids };
      }
      if (featureId) {
        const feature2Ids = featureId.split("|");
        whereClause.featureId = { [Op.in]: feature2Ids };
      }
      if (holeId) {
        const holeIds = holeId.split("|");
        whereClause.holeId = { [Op.in]: holeIds };
      }
      if (innerRingId) {
        const innerRingIds = innerRingId.split("|");
        whereClause.innerRingId = { [Op.in]: innerRingIds };
      }
      if (loadTypeId) {
        const loadTypeIds = loadTypeId.split("|");
        whereClause.loadTypeId = { [Op.in]: loadTypeIds };
      }
      if (materialId) {
        const materialIds = materialId.split("|");
        whereClause.materialId = { [Op.in]: materialIds };
      }
      if (outerRingId) {
        const outerRingIds = outerRingId.split("|");
        whereClause.outerRingId = { [Op.in]: outerRingIds };
      }
      if (rollerTypeId) {
        const rollerTypeIds = rollerTypeId.split("|");
        whereClause.rollerTypeId = { [Op.in]: rollerTypeIds };
      }
      if (rowCountId) {
        const rowCountIds = rowCountId.split("|");
        whereClause.rowCountId = { [Op.in]: rowCountIds };
      }
      if (sealId) {
        const sealIds = sealId.split("|");
        whereClause.sealId = { [Op.in]: sealIds };
      }
      if (sepId) {
        const sepIds = sepId.split("|");
        whereClause.sepId = { [Op.in]: sepIds };
      }
      if (standartId) {
        const standartIds = standartId.split("|");
        whereClause.standartId = { [Op.in]: standartIds };
      }
      if (bushingTypeId) {
        const bushingTypeIds = bushingTypeId.split("|");
        whereClause.bushingTypeId = { [Op.in]: bushingTypeIds };
      }
      if (lubricationHoleId) {
        const lubricationHoleIds = lubricationHoleId.split("|");
        whereClause.lubricationHoleId = { [Op.in]: lubricationHoleIds };
      }
      if (connectionId) {
        const connectionIds = connectionId.split("|");
        whereClause.connectionId = { [Op.in]: connectionIds };
      }
      if (innerDiameter) {
        whereClause.innerDiameter = innerDiameter;
      }
      if (outerDiameter) {
        whereClause.outerDiameter = outerDiameter;
      }
      if (widthBearing) {
        whereClause.widthBearing = widthBearing;
      }
      if (searchTerm) {
        whereClause[Op.or] = [
          { title: { [Op.iLike]: `%${searchTerm}%` } },
          { description: { [Op.iLike]: `%${searchTerm}%` } },
          { content: { [Op.iLike]: `%${searchTerm}%` } },
        ];
      }

      if (minInnerDiameter || maxInnerDiameter) {
        whereClause.innerDiameter = {};

        if (minInnerDiameter && !maxInnerDiameter) {
          whereClause.innerDiameter[Op.gte] = Number(minInnerDiameter);
        } else if (!minInnerDiameter && maxInnerDiameter) {
          whereClause.innerDiameter[Op.lte] = Number(maxInnerDiameter);
        } else if (minInnerDiameter && maxInnerDiameter) {
          whereClause.innerDiameter[Op.between] = [
            Number(minInnerDiameter),
            Number(maxInnerDiameter),
          ];
        }
      }

      if (minOuterDiameter || maxOuterDiameter) {
        whereClause.outerDiameter = {};
        if (minOuterDiameter && !maxOuterDiameter) {
          whereClause.outerDiameter[Op.gte] = Number(minOuterDiameter);
        } else if (!minOuterDiameter && maxOuterDiameter) {
          whereClause.outerDiameter[Op.lte] = Number(maxOuterDiameter);
        } else if (minOuterDiameter && maxOuterDiameter) {
          whereClause.outerDiameter[Op.between] = [
            Number(minOuterDiameter),
            Number(maxOuterDiameter),
          ];
        }
      }

      if (minWidth || maxWidth) {
        whereClause.widthBearing = {};
        if (minWidth && !maxWidth) {
          whereClause.widthBearing[Op.gte] = Number(minWidth);
        } else if (!minWidth && maxWidth) {
          whereClause.widthBearing[Op.lte] = Number(maxWidth);
        } else if (minWidth && maxWidth) {
          whereClause.widthBearing[Op.between] = [
            Number(minWidth),
            Number(maxWidth),
          ];
        }
      }

      if (minPrice || maxPrice) {
        whereClause.price = {};
        // whereClause.priceRvz = {}

        if (minPrice && !maxPrice) {
          whereClause.price[Op.gte] = Number(minPrice);
        } else if (!minPrice && maxPrice) {
          whereClause.price[Op.lte] = Number(maxPrice);
        } else if (minPrice && maxPrice) {
          whereClause.price[Op.between] = [Number(minPrice), Number(maxPrice)];
        }
      }

      const bearings = await models.Bearing.findAndCountAll({
        where: whereClause,
        limit,
        offset,
        order: [
          [
            sequelize.literal(
              'CASE WHEN "priceRvz" IS NOT NULL AND "priceRvz" > 0 THEN LEAST("price", "priceRvz") ELSE "price" END'
            ),
            "ASC",
          ],
          ["id", "ASC"],
        ],
      });

      return res.json(bearings);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Ошибка при поиске подшипника" });
    }
  }

  async getById(req, res) {
    try {
      const { url } = req.params;
      const bearing = await models.Bearing.findOne({ where: { url } });
      if (!bearing) {
        return res.status(404).json({ message: `Страница ${url} не найдена` });
      }
      return res.json(bearing);
    } catch (error) {
      console.log(bearing);
      return res.status(500).json({ message: "Ошибка при поиске подшипника" });
    }
  }
  async searchBearings(req, res) {
    try {
      const { q } = req.body;
      const searchTerm = q.toLowerCase();
      const searchWords = searchTerm
        .split(/\s+/)
        .filter((word) => word.length > 0); // Разбиваем запрос на слова

      const whereClause = {
        [Op.or]: [
          { name: { [Op.iLike]: `%${searchTerm}%` } },
          { group: { [Op.iLike]: `%${searchTerm}%` } },
          { title: { [Op.iLike]: `%${searchTerm}%` } },
          { description: { [Op.iLike]: `%${searchTerm}%` } },
          { content: { [Op.iLike]: `%${searchTerm}%` } },
        ],
      };

      const orderClause = [];

      // Ранжирование по количеству совпадений слов (более релевантно для многословных запросов)
      if (searchWords.length > 0) {
        orderClause.push([
          sequelize.literal(
            `CASE
               ${searchWords
                 .map(
                   (word, index) => `
                 WHEN LOWER(name) LIKE '%${word}%' THEN 1
                 WHEN LOWER(group) LIKE '%${word}%' THEN 2
                 WHEN LOWER(title) LIKE '%${word}%' THEN 3
                 WHEN LOWER(description) LIKE '%${word}%' THEN 4
                 WHEN LOWER(content) LIKE '%${word}%' THEN 5
               `
                 )
                 .join("")}
               ELSE 6
             END`
          ),
          "DESC", // Сортируем по убыванию релевантности
        ]);
        orderClause.push([
          sequelize.literal(
            `CASE
               ${searchWords
                 .map(
                   (word, index) => `
                 WHEN LOWER(name) LIKE '${word}%' THEN 1
                 WHEN LOWER(group) LIKE '${word}%' THEN 2
                 WHEN LOWER(title) LIKE '${word}%' THEN 3
                 WHEN LOWER(description) LIKE '${word}%' THEN 4
                 WHEN LOWER(content) LIKE '${word}%' THEN 5
               `
                 )
                 .join("")}
               ELSE 6
             END`
          ),
          "DESC", // Сортируем по убыванию релевантности
        ]);
      }
      // Дополнительные параметры сортировки (опционально)
      orderClause.push([sequelize.literal("LENGTH(name)"), "ASC"]); // Сортировка по длине имени (опционально)
      const bearings = await models.Bearing.findAll({
        where: whereClause,
        order: orderClause,
        limit: 10,
      });

      return res.json({ rows: bearings, count: bearings.length });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Ошибка при поиске" });
    }
  }
}

export default new BearingController();
