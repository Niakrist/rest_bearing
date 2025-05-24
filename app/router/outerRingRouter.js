import { Router } from "express";
const router = new Router();
import outerRingController from "../controller/outerRingController.js";

router.post("/", outerRingController.create);
router.get("/", outerRingController.getAll);

export default router;
