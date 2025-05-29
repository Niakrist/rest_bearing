import { Router } from "express";
import bushingTypeController from "../controller/bushingTypeController.js";

const router = new Router();

router.post("/", bushingTypeController.create);
router.get("/", bushingTypeController.getAll);

export default router;

// с закрепительной втулкой - s-zakrepitelnoy-vtulkoy
// со стяжной втулкой - so-styazhnoy-vtulkoy

// bushing-type

{
  const id1 = {
    name: "с закрепительной втулкой",
    title:
      "Подшипники с закрепительной втулкой: Купить, характеристики, аналоги",
    h1: "подшипники с закрепительной втулкой",
    description:
      "Купить подшипники РВЗ с закрепительной втулкой напрямую от производителя! Высокое качество, широкий ассортимент подшипников с закрепительной втулкой, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "s-zakrepitelnoy-vtulkoy",
  };
  const id2 = {
    name: "со стяжной втулкой",
    title: "Подшипники со стяжной втулкой: Купить, характеристики, аналоги",
    h1: "подшипники со стяжной втулкой РВЗ",
    description:
      "Купить подшипники РВЗ со стяжной втулкой напрямую от производителя! Высокое качество, широкий ассортимент подшипников со стяжной втулкой, оптимальные цены и доставка по всей России. Закажите сейчас!",
    url: "so-styazhnoy-vtulkoy",
  };
}
