import { Router } from "express";
const router = new Router();
import standartController from "../controller/standartController.js";

router.post("/", standartController.create);
router.get("/", standartController.getAll);

export default router;

// ГОСТ
// ISO

{
  const swag = {
    name: "ГОСТ",
    title: "Подшипники ГОСТ : Цена, характеристики, аналоги",
    h1: "Подшипники ГОСТ РВЗ",
    description:
      "Купить подшипники ГОСТ РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников ГОСТ, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "gost",
  };
}
