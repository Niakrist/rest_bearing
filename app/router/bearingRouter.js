import { Router } from "express";
const router = new Router();
import bearingController from "../controller/bearingController.js";

router.post("/create", bearingController.create);
router.post("/", bearingController.getAll);
router.get("/", bearingController.getAllByQuery);
router.get("/:id", bearingController.getById);

export default router;
