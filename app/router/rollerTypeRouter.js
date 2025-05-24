import { Router } from "express";
const router = new Router();
import rollerTypeController from "../controller/rollerTypeController.js";

router.post("/", rollerTypeController.create);
router.get("/", rollerTypeController.getAll);

export default router;
