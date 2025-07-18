import { Router } from "express";
const router = new Router();
import materialController from "../controller/materialController.js";

// router.post("/", materialController.create);
router.get("/", materialController.getAll);

export default router;

// 0 стальные - stalnye
// 1 нержавеющие -  nerzhaveyushchie
// 2 керамические - keramicheskie

// material

{
  const id1 = {
    name: "стальные",
    title: "Стальные подшипники РВЗ: Купить, характеристики, аналоги",
    h1: "Подшипники из стали ШХ15 РВЗ",
    description:
      "Купить стальные подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников из стали ШХ15, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "stalnye",
  };
  const id2 = {
    name: "нержавеющие",
    title: "Нержавеющие подшипники РВЗ: Купить, характеристики, аналоги",
    h1: "Подшипники из нержавеющие стали РВЗ",
    description:
      "Купить нержавеющие подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников из нержавеющие стали, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "nerzhaveyushchie",
  };
  const id3 = {
    name: "керамические",
    title: "Керамические подшипники РВЗ: Купить, характеристики, аналоги",
    h1: "Керамические подшипники РВЗ",
    description:
      "Купить нержавеющие подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников из нержавеющие стали, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "keramicheskie",
  };
}
