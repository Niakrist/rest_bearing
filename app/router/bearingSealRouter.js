import { Router } from "express";
const router = new Router();
import bearingSealController from "../controller/bearingSealController.js";

router.post("/", bearingSealController.create);
router.get("/", bearingSealController.getAll);

export default router;
