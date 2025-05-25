import { Router } from "express";
const router = new Router();
import seriesController from "../controller/seriesController.js";

router.post("/", seriesController.create);
router.get("/", seriesController.getAll);

export default router;

{
  const swag = {
    name: "UCFB",
    title: "Подшипники UCFB: Цена, характеристики, аналоги",
    h1: "Подшипники UCFB РВЗ",
    description:
      "Купить подшипники UCFB РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников UCFB, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "ucfb",
  };
}

// UCFB
// UCT
// UCFC
// UCFA
// UCFL
// UCP
// UCPA
// UCPH
// UCF
// UCHA
// UCC
