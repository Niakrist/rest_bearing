import { Router } from "express";
const router = new Router();
import bearingTypeController from "../controller/bearingTypeController.js";

router.post("/", bearingTypeController.create);
router.get("/", bearingTypeController.getAll);

export default router;

// 0 качения - kacheniya
// 1 скольжения -  skolzheniya

{
  const swag = {
    name: "качения",
    title: "Подшипники качения РВЗ : Цена, характеристики, аналоги",
    h1: "подшипники качения РВЗ",
    description:
      "Купить подшипники качения РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников качения, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "kacheniya",
  };
}
