import { celebrate } from "celebrate";
import express from "express";
import { userSchema } from "../validations/user-validator.js";
import userController from "../controller/users-controller";
import { asyncHandler } from "../middleware/error-handler";

const router = express.Router();

router.get("/", asyncHandler(userController.findAll));
router.get("/:id", asyncHandler(userController.findById));
router.post("/", celebrate({ body: userSchema }), asyncHandler(userController.saveUser));
router.put("/:id", celebrate({ body: userSchema }), asyncHandler(userController.updateUser));
router.delete("/:id", asyncHandler(userController.deleteUser));

export default router;
