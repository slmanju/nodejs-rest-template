import { Joi } from "celebrate";
import { NoteStatus } from "../service/note-service";

export const noteSchema = Joi.object().keys({
  title: Joi.string().min(2).max(30).required(),
  description: Joi.string().min(2).max(60),
});

export const validateStatus = (status) => {
  if (!Object.values(NoteStatus).includes(status)) {
    throw clientError("Invalid status", 400);
  }
};
