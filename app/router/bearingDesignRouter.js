import { Router } from "express";
const router = new Router();
import bearingDesignController from "../controller/bearingDesignController.js";

router.post("/", bearingDesignController.create);
router.get("/", bearingDesignController.getAll);

export default router;

// 0 сферический - sfericheskiy
// 1 конический  konicheskiy
// 2 самоустанавливающиеся - samoustanavlivayushchiesya
// 3 миниатюрный - miniatyurnyy
// 4 корпусный - korpusnyy
// 5 шарнирный - sharnirnyy

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
