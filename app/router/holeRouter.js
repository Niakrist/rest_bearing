import { Router } from "express";
const router = new Router();
import holeController from "../controller/holeController.js";

// router.post("/", holeController.create);
router.get("/", holeController.getAll);

export default router;

// коническое отверстие - konicheskoe-otverstie
// цилиндрическое отверстие - cilindricheskoe-otverstie

// hole

{
  const id1 = {
    name: "с коническим отверстием",
    title:
      "Подшипники с коническим отверстием: Купить, характеристики, аналоги",
    h1: "Подшипники с конической посадкой РВЗ",
    description:
      "Купить подшипники РВЗ с коническим отверстием напрямую от производителя! Высокое качество, широкий ассортимент подшипников с конической посадкой, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "konicheskoe-otverstie",
  };
  const id2 = {
    name: "с цилиндрическим отверстием",
    title:
      "Подшипники с цилиндрическим отверстием: Купить, характеристики, аналоги",
    h1: "Подшипники с цилиндрической посадкой РВЗ",
    description:
      "Купить подшипники РВЗ с цилиндрическим отверстием напрямую от производителя! Высокое качество, широкий ассортимент подшипников с цилиндрической посадкой, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "cilindricheskoe-otverstie",
  };
}
