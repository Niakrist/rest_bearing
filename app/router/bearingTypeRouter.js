import { Router } from "express";
const router = new Router();
import bearingTypeController from "../controller/bearingTypeController.js";

// router.post("/", bearingTypeController.create);
router.get("/", bearingTypeController.getAll);

export default router;

// bearing-type

{
  const id1 = {
    name: "качения",
    title: "Подшипники качения: Купить, характеристики, аналоги",
    h1: "подшипники качения РВЗ",
    description:
      "Купить подшипники качения РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников качения, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "kacheniya",
  };
  const id2 = {
    name: "скольжения",
    title: "Подшипники скольжения: Купить, характеристики, аналоги",
    h1: "подшипники скольжения РВЗ",
    description:
      "Купить подшипники скольжения РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников скольжения, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "skolzheniya",
  };
}
