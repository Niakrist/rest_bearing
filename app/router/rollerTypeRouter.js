import { Router } from "express";
const router = new Router();
import rollerTypeController from "../controller/rollerTypeController.js";

router.post("/", rollerTypeController.create);
router.get("/", rollerTypeController.getAll);

export default router;

{
  const swag = {
    name: "шариковый",
    title: "Шариковые подшипники РВЗ : Цена, характеристики, аналоги",
    h1: "Шариковые подшипники РВЗ",
    description:
      "Купить шариковые подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент шариковых подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "sharikovyy",
  };
}

// шариковый - sharikovyy
// роликовый - rolikovyy
// игольчатый - igolchatyy
// ролико-игольчатый - roliko-igolchatyy
// шарико-игольчатый - shariko-igolchatyy
// сталь по стали - stal-po-stali
