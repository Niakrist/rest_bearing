import { Router } from "express";
const router = new Router();
import innerRingController from "../controller/innerRingController.js";

router.post("/", innerRingController.create);
router.get("/", innerRingController.getAll);

export default router;
