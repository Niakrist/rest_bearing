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

router.use("/bearing", bearingRouter);
router.use("/bearing-design", bearingDesignRouter);
router.use("/bearing-seal", bearingSealRouter);
router.use("/bearing-type", bearingTypeRouter);
router.use("/corner", cornerRouter);
router.use("/feature2", feature2Router);
router.use("/feature", featureRouter);
router.use("/hole", holeRouter);
router.use("/inner-ring", innerRingRouter);
router.use("/load-type", loadTypeRouter);
router.use("/material", materialRouter);
router.use("/outer-ring", outerRingRouter);
router.use("/roller-type", rollerTypeRouter);
router.use("/row-count", rowCountRouter);
router.use("/seal", sealRouter);
router.use("/separator", sepRouter);
router.use("/standart", standartRouter);

router.use("/bushing-type", bushingTypeRouter);
router.use("/lubrication-hole", lubricationHoleRouter);
router.use("/connection", connectionRouter);

export default router;
