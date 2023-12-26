import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import router from "./routes";
import notFound from "./middleware/not-found-handler";
import { errorHandler, errorLogger } from "./middleware/error-handler";
import { errors } from "celebrate";
import tokenVerifier from "./middleware/token-verifier";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(tokenVerifier());
app.use("/", router);
app.use(notFound);
app.use(errors());
app.use(errorLogger);
app.use(errorHandler);

export default app;
