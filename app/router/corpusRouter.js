import { Router } from "express";
const router = new Router();
import corpusController from "../controller/corpusController.js";

router.post("/", corpusController.create);
router.get("/", corpusController.getAll);

export default router;
