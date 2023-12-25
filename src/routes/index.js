import express from "express";
import homeRouter from "./home-router";
import notesRouter from "./notes-router";

const router = express.Router();

router.use("/", homeRouter);
router.use("/notes", notesRouter);

export default router;
