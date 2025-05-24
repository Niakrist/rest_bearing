import { Router } from "express";
const router = new Router();
import bearingForCorpusController from "../controller/bearingForCorpusController.js";

router.post("/", bearingForCorpusController.create);
router.get("/", bearingForCorpusController.getAll);

export default router;
