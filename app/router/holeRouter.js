import { Router } from "express";
const router = new Router();
import holeController from "../controller/holeController.js";

router.post("/", holeController.create);
router.get("/", holeController.getAll);

export default router;
