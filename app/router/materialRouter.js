import { Router } from "express";
const router = new Router();
import materialController from "../controller/materialController.js";

router.post("/", materialController.create);
router.get("/", materialController.getAll);

export default router;

// 0 стальные - stalnye
// 1 нержавеющие -  nerzhaveyushchie
// 2 керамические - keramicheskie

{
  const swag = {
    name: "стальные",
    title: "Стальные подшипники РВЗ : Цена, характеристики, аналоги",
    h1: "Стальные подшипники РВЗ",
    description:
      "Купить стальные подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент стальных подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "stalnye",
  };
}
