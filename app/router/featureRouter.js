import { Router } from "express";
const router = new Router();
import featureController from "../controller/featureController.js";

router.post("/", featureController.create);
router.get("/", featureController.getAll);

export default router;
