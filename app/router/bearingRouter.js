import { Router } from "express";
const router = new Router();
import bearingController from "../controller/bearingController.js";

// router.post("/create", bearingController.create);
router.post("/search", bearingController.searchBearings);
router.post("/", bearingController.getAll);
router.get("/all", bearingController.getAllWithoutPagination);
router.get("/", bearingController.getAllByQuery);
router.get("/:url", bearingController.getById);

export default router;
