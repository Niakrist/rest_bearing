import { Router } from "express";
const router = new Router();
import cornerController from "../controller/cornerController.js";

router.post("/", cornerController.create);
router.get("/", cornerController.getAll);

export default router;

// с трехточечным контактом - s-trehtochechnym-kontaktom
// с четырехточечным контактом - s-chetyrehtochechnym-kontaktom
// угол контакта 12 - ugol-kontakta-12
// угол контакта 15 - ugol-kontakta-15
// угол контакта 20 - ugol-kontakta-20
// угол контакта 26 - ugol-kontakta-26
// угол контакта 30 - ugol-kontakta-30
// угол контакта 36 - ugol-kontakta-36
// угол контакта 40 - ugol-kontakta-40
// угол контакта 60 - ugol-kontakta-60
{
  const swag = {
    name: "угол контакта 12",
    title:
      "Подшипники с углом контакта 12 градусов РВЗ : Цена, характеристики, аналоги",
    h1: "Подшипники с углом контакта 12 градусов РВЗ",
    description:
      "Купить подшипники с углом контакта 12 градусов РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников с углом контакта 12 градусов, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "ugol-kontakta-12",
  };
}
