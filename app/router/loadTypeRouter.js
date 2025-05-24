import { Router } from "express";
const router = new Router();
import loadTypeController from "../controller/loadTypeController.js";

router.post("/", loadTypeController.create);
router.get("/", loadTypeController.getAll);

export default router;
