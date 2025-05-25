import { Router } from "express";
const router = new Router();
import sealController from "../controller/sealController.js";

router.post("/", sealController.create);
router.get("/", sealController.getAll);

export default router;

// 0 открытый - otkrytyy
// 1 закрытый - zakrytyy

{
  const swag = {
    name: "открытый",
    title: "Открытые подшипники РВЗ : Цена, характеристики, аналоги",
    h1: "Открытые подшипники РВЗ",
    description:
      "Купить открытые подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент открытых подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "otkrytyy",
  };
}
