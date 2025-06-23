import { Router } from "express";

import lubricationHoleController from "../controller/lubricationHoleController.js";

const router = new Router();

// router.post("/", lubricationHoleController.create);
router.get("/", lubricationHoleController.getAll);
// router.put("/", lubricationHoleController.editById);
// router.delete("/:id", lubricationHoleController.deleteById);

export default router;

// с канавкой для смазки на наружном кольце - s-kanavkoy-dlya-smazki-na-naruzhnom-kolce
// с канавкой и отверстиями для смазки - s-kanavkoy-i-otverstiyami-dlya-smazki
// с отверстием для смазки на наружном кольце - s-otverstiem-dlya-smazki-na-naruzhnom-kolce

// lubrication-hole

{
  const id1 = {
    name: "с канавкой для смазки на наружном кольце",
    title:
      "Подшипники с канавкой для смазки на наружном кольце: Купить, характеристики, аналоги",
    h1: "Подшипники с канавкой для смазки на наружном кольце РВЗ",
    description:
      "Купить подшипники РВЗ с канавкой для смазки на наружном кольце напрямую от производителя! Высокое качество, широкий ассортимент подшипников с канавкой для смазки на наружном кольце, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "s-kanavkoy-dlya-smazki-na-naruzhnom-kolce",
  };
  const id2 = {
    name: "с канавкой и отверстиями для смазки",
    title:
      "Подшипники с канавкой и отверстиями для смазки: Купить, характеристики, аналоги",
    h1: "Подшипники с канавкой и отверстиями для смазки РВЗ",
    description:
      "Купить подшипники РВЗ с канавкой и отверстиями для смазки напрямую от производителя! Высокое качество, широкий ассортимент подшипников с канавкой и отверстиями для смазки, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "s-kanavkoy-i-otverstiyami-dlya-smazki",
  };
  const id3 = {
    name: "с отверстием для смазки на наружном кольце",
    title:
      "Подшипники с отверстием для смазки на наружном кольце: Купить, характеристики, аналоги",
    h1: "Подшипники с отверстием для смазки на наружном кольце РВЗ",
    description:
      "Купить подшипники РВЗ с отверстием для смазки на наружном кольце напрямую от производителя! Высокое качество, широкий ассортимент подшипников с отверстием для смазки на наружном кольце, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "s-otverstiem-dlya-smazki-na-naruzhnom-kolce",
  };
}
