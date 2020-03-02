import express from "express";
import cors from  "cors";
import helmet from "helmet";

import routes from "./routes";
import errorHandler from "./app/modules/error-handler";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(errorHandler);
routes(app);

export default app;