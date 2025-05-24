import { Router } from "express";
const router = new Router();
import sepController from "../controller/sepController.js";

router.post("/", sepController.create);
router.get("/", sepController.getAll);

export default router;
