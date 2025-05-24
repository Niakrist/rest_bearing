import { Router } from "express";
const router = new Router();
import standartController from "../controller/standartController.js";

router.post("/", standartController.create);
router.get("/", standartController.getAll);

export default router;
