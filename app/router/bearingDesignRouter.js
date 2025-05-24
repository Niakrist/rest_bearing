import { Router } from "express";
const router = new Router();
import bearingDesignController from "../controller/bearingDesignController.js";

router.post("/", bearingDesignController.create);
router.get("/", bearingDesignController.getAll);

export default router;
