import { Router } from "express";
const router = new Router();
import feature2Controller from "../controller/feature2Controller.js";

router.post("/", feature2Controller.create);
router.get("/", feature2Controller.getAll);

export default router;
