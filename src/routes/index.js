import express from "express";
import homeRouter from "./home-router";
import authenticationRouter from "./authentication-router";
import notesRouter from "./notes-router";
import usersRouter from "./users-router";

const router = express.Router();

router.use("/", homeRouter);
router.use("/login", authenticationRouter);
router.use("/notes", notesRouter);
router.use("/users", usersRouter);

export default router;
