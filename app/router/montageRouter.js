import { Router } from "express";
import montageController from "../controller/montageController.js";
const router = new Router();

router.post("/", montageController.create);
router.get("/", montageController.getAll);

export default router;
