import { Router } from "express";
const router = new Router();
import bushingController from "../controller/bushingController.js";

router.post("/", bushingController.create);
router.get("/", bushingController.getAll);

export default router;
