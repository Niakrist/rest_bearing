import { Router } from "express";
const router = new Router();
import standartController from "../controller/standartController.js";

router.post("/", standartController.create);
router.get("/", standartController.getAll);

export default router;

// ГОСТ
// ISO
// standart
{
  const id1 = {
    name: "ГОСТ",
    title: "Подшипники ГОСТ: Купить, характеристики, аналоги",
    h1: "Подшипники ГОСТ РВЗ",
    description:
      "Купить подшипники ГОСТ РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников ГОСТ, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "gost",
  };
  const id2 = {
    name: "ISO",
    title: "Подшипники ISO: Купить, характеристики, аналоги",
    h1: "Подшипники ISO РВЗ",
    description:
      "Купить подшипники ISO РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников ISO, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "iso",
  };
}
