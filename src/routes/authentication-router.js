import express from "express";
import { asyncHandler } from "../middleware/error-handler";
import authenticationController from "../controller/authentication-controller.js";

const router = express.Router();

router.post("/", asyncHandler(authenticationController.getToken));

export default router;
