import { celebrate } from "celebrate";
import express from "express";
import { noteSchema } from "../validations/note-validator";
import noteController from "../controller/notes-controller";
import { asyncHandler } from "../middleware/error-handler";

const router = express.Router();

router.get("/", asyncHandler(noteController.findAll));
router.get("/:id", asyncHandler(noteController.findById));
router.post("/", celebrate({ body: noteSchema }), asyncHandler(noteController.saveNote));
router.put("/:id", celebrate({ body: noteSchema }), asyncHandler(noteController.updateNote));
router.delete("/:id", asyncHandler(noteController.deleteNote));

export default router;
