import { Router } from "express";
const router = new Router();
import bearingTypeController from "../controller/bearingTypeController.js";

router.post("/", bearingTypeController.create);
router.get("/", bearingTypeController.getAll);

export default router;
