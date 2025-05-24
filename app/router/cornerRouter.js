import { Router } from "express";
const router = new Router();
import cornerController from "../controller/cornerController.js";

router.post("/", cornerController.create);
router.get("/", cornerController.getAll);

export default router;
