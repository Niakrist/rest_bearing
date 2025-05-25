import { Router } from "express";
const router = new Router();
import sepController from "../controller/sepController.js";

router.post("/", sepController.create);
router.get("/", sepController.getAll);

export default router;

// со стальным сепаратором - so-stalnym-separatoromи
// латунный
// бессепараторный
// без сепаратора
// с полусепаратором
// сепаратор с роликами
// с сепаратором со сквозным отверстием
// текстолитовый

{
  const swag = {
    name: "стальной сепаратор",
    title:
      "Подшипники со стальным сепаратором РВЗ : Цена, характеристики, аналоги",
    h1: "Подшипники со стальным сепаратором РВЗ",
    description:
      "Купить подшипники со стальным сепаратором РВЗ напрямую от производителя! Высокое качество, широкий ассортимент подшипников со стальным сепаратором, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "so-stalnym-separatorom",
  };
}
