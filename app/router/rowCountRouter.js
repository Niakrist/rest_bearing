import { Router } from "express";
const router = new Router();
import rowCountController from "../controller/rowCountController.js";

router.post("/", rowCountController.create);
router.get("/", rowCountController.getAll);

export default router;

// однорядный
// двухрядный
// трехрядный
// четырехрядный
// многорядные
// шестирядный
// многорядный

{
  const swag = {
    name: "конический",
    title: "Конические подшипники РВЗ : Цена, характеристики, аналоги",
    h1: "Конические подшипники РВЗ",
    description:
      "Купить конические подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент конических подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "konicheskiy",
  };
}
