import to from "await-to-js";
import { clientError } from "../exception/client-error";
import noteRepository from "../repository/note-repository";
import { validateStatus } from "../validations/note-validator";

export const NoteStatus = {
  NEW: "NEW",
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
};

const findAll = async () => await noteRepository.findAll();

const findById = async (id) => {
  const [error, note] = await to(noteRepository.findById(id));
  if (error) {
    throw clientError("Note not found", 404);
  }
  return note;
};

const saveNote = async (note) => {
  const newNote = {
    ...note,
    status: NoteStatus.NEW,
    created: Date.now(),
    updated: Date.now(),
  };
  return noteRepository.save(newNote);
};

const updateNote = async (id, note) => {
  validateStatus(note.status);
  const savedNote = await findById(id);
  const updateNote = {
    ...savedNote,
    title: note.title,
    description: note.description,
    status: note.status,
    updated: Date.now(),
  };
  return await noteRepository.update(updateNote);
};

const deleteNote = async (id) => {
  const [_error] = await to(noteRepository.deleteById(id));
};

export default { findAll, findById, saveNote, updateNote, deleteNote };
