import { Router } from "express";
const router = new Router();
import sealController from "../controller/sealController.js";

router.post("/", sealController.create);
router.get("/", sealController.getAll);

export default router;

// seal

{
  const id1 = {
    name: "открытые",
    title: "Открытые подшипники: Купить, характеристики, аналоги",
    h1: "Открытые подшипники РВЗ",
    description:
      "Купить открытые подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент открытых подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "otkrytye",
  };
  const id2 = {
    name: "закрытые",
    title: "Закрытые подшипники: Купить, характеристики, аналоги",
    h1: "Закрытые подшипники РВЗ",
    description:
      "Купить закрытые подшипники РВЗ напрямую от производителя! Высокое качество, широкий ассортимент закрытых подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "zakrytye",
  };
}
