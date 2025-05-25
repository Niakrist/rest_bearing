import { Router } from "express";
const router = new Router();
import bearingSealController from "../controller/bearingSealController.js";

router.post("/", bearingSealController.create);
router.get("/", bearingSealController.getAll);

export default router;

// RS
// Z
// ZZ
// 2RS
// комбинированный

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
