import express from "express";
import { clientError } from "../exception/client-error";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Hello Home" });
});

router.get("/error", (req, res) => {
  throw clientError("An error");
});

export default router;
