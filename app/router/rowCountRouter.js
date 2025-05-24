import { Router } from "express";
const router = new Router();
import rowCountController from "../controller/rowCountController.js";

router.post("/", rowCountController.create);
router.get("/", rowCountController.getAll);

export default router;
