import { Router } from "express";
const router = new Router();
import materialController from "../controller/materialController.js";

router.post("/", materialController.create);
router.get("/", materialController.getAll);

export default router;
