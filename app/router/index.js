import { Router } from "express";
const router = new Router();

import bearingRouter from "./bearingRouter.js";
import bearingDesignRouter from "./bearingDesignRouter.js";
import bearingSealRouter from "./bearingSealRouter.js";
import bearingTypeRouter from "./bearingTypeRouter.js";
import cornerRouter from "./cornerRouter.js";
import feature2Router from "./feature2Router.js";
import featureRouter from "./featureRouter.js";
import holeRouter from "./holeRouter.js";
import innerRingRouter from "./innerRingRouter.js";
import loadTypeRouter from "./loadTypeRouter.js";
import materialRouter from "./materialRouter.js";
import outerRingRouter from "./outerRingRouter.js";
import rollerTypeRouter from "./rollerTypeRouter.js";
import rowCountRouter from "./rowCountRouter.js";
import sealRouter from "./sealRouter.js";
import sepRouter from "./sepRouter.js";
import standartRouter from "./standartRouter.js";
import bushingTypeRouter from "./bushingTypeRouter.js";
import lubricationHoleRouter from "./lubricationHoleRouter.js";
import connectionRouter from "./connectionRouter.js";
import sendEmailRouter from "./sendEmailRouter.js";

router.use("/bearing", bearingRouter);
router.use("/bearingDesignId", bearingDesignRouter);
router.use("/bearingSealId", bearingSealRouter);
router.use("/bearingTypeId", bearingTypeRouter);
router.use("/cornerId", cornerRouter);
router.use("/feature2Id", feature2Router);
router.use("/featureId", featureRouter);
router.use("/holeId", holeRouter);
router.use("/innerRingId", innerRingRouter);
router.use("/loadTypeId", loadTypeRouter);
router.use("/materialId", materialRouter);
router.use("/outerRingId", outerRingRouter);
router.use("/rollerTypeId", rollerTypeRouter);
router.use("/rowCountId", rowCountRouter);
router.use("/sealId", sealRouter);
router.use("/sepId", sepRouter);
router.use("/standartId", standartRouter);

router.use("/bushingTypeId", bushingTypeRouter);
router.use("/lubricationHoleId", lubricationHoleRouter);
router.use("/connectionId", connectionRouter);

router.use("/send-email", sendEmailRouter);

export default router;
