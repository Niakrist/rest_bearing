import { Router } from "express";
const router = new Router();
import seriesController from "../controller/seriesController.js";

router.post("/", seriesController.create);
router.get("/", seriesController.getAll);

export default router;
