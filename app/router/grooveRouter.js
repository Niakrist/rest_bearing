import { Router } from "express";
const router = new Router();
import grooveController from "../controller/grooveController.js";

router.post("/", grooveController.create);
router.get("/", grooveController.getAll);

export default router;
