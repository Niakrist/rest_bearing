import multer from "multer";
import sendEmailController from "../controller/sendEmailController.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import { Router } from "express";
const router = new Router();

router.post("/", upload.single("file"), sendEmailController.send);

export default router;
