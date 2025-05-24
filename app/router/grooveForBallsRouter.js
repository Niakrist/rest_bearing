import { Router } from "express";
const router = new Router();
import grooveForBallsController from "../controller/grooveForBallsController.js";

router.post("/", grooveForBallsController.create);
router.get("/", grooveForBallsController.getAll);

export default router;
