import { Router } from "express";
import connectionController from "../controller/connectionController.js";

const router = new Router();

router.post("/", connectionController.create);
router.get("/", connectionController.getAll);

export default router;

// разъемные - razemnye
// неразъемные - nerazemnye

// connection

{
  const id1 = {
    name: "разъемные",
    title: "Разъемные подшипники: Купить, характеристики, аналоги",
    h1: "Разъемные подшипники РВЗ",
    description:
      "Купить разъемные подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент разъемных подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "razemnye",
  };
  const id2 = {
    name: "неразъемные",
    title: "Неразъемные подшипники: Купить, характеристики, аналоги",
    h1: "Неразъемные подшипники РВЗ",
    description:
      "Купить неразъемные подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент неразъемных подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "nerazemnye",
  };
}
