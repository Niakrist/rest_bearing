import { Router } from "express";
const router = new Router();
import grooveForBallsController from "../controller/grooveForBallsController.js";

router.post("/", grooveForBallsController.create);
router.get("/", grooveForBallsController.getAll);

export default router;

{
  const swag = {
    name: "с канавкой для ввода шариков",
    title:
      "Подшипники с канавкой для ввода шариков РВЗ : Цена, характеристики, аналоги",
    h1: "Подшипники с канавкой для ввода шариков РВЗ",
    description:
      "Купить подшипники с канавкой для ввода шариков РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников с канавкой для ввода шариков, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "konicheskiy",
  };
}

// с канавкой для ввода шариков - s-kanavkoy-dlya-vvoda-sharikov
// с канавкой для комплектования шариками - s-kanavkoy-dlya-komplektovaniya-sharikami
// с фланцем на наружном кольце - s-flancem-na-naruzhnom-kolce
// с канавой для смазки на наружном кольце - s-kanavoy-dlya-smazki-na-naruzhnom-kolce
