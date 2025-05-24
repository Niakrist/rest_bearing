import { Router } from "express";
const router = new Router();
import bearingController from "../controller/bearingController.js";

router.post("/", bearingController.create);
router.get("/", bearingController.getAll);
router.get("/:id", bearingController.getById);

export default router;
