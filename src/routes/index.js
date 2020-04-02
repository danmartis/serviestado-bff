// Declara variables
import { Router } from "express";
import { BASE } from "../enviroment/env_config";

const router = Router();

import v1 from "./v1";

router.use("/v1", v1);

export default app => {
    app.use(BASE, router);
};