import { Router } from "express";
const router = new Router();
import grooveController from "../controller/grooveController.js";

router.post("/", grooveController.create);
router.get("/", grooveController.getAll);

export default router;

// 0 с канавкой на наружном кольце - s-kanavkoy-na-naruzhnom-kolce

{
  const swag = {
    name: "с канавкой на наружном кольце",
    title:
      "Подшипники с канавкой на наружном кольце РВЗ : Цена, характеристики, аналоги",
    h1: "Подшипники с канавкой на наружном кольце РВЗ",
    description:
      "Купить подшипники с канавкой на наружном кольце РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников с канавкой на наружном кольце, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "s-kanavkoy-na-naruzhnom-kolce",
  };
}
