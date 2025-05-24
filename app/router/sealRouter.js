import { Router } from "express";
const router = new Router();
import sealController from "../controller/sealController.js";

router.post("/", sealController.create);
router.get("/", sealController.getAll);

export default router;
