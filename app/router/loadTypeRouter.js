import { Router } from "express";
const router = new Router();
import loadTypeController from "../controller/loadTypeController.js";

router.post("/", loadTypeController.create);
router.get("/", loadTypeController.getAll);

export default router;

// 0 радиальный - radialnyy
// 1 радиально-упорный  radialno-upornyy
// 2 упорный - upornyy
// 3 упорно-радиальный - uporno-radialnyy

{
  const swag = {
    name: "радиальный",
    title: "Радиальные подшипники РВЗ : Цена, характеристики, аналоги",
    h1: "Радиальные подшипники РВЗ",
    description:
      "Купить радиальные подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент радиальных подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "radialnyy",
  };
}
