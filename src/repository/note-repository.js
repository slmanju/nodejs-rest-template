import Note from "../model/note-model";

const findAll = async () => {
  return await Note.find();
};

const findById = async (id) => {
  return await Note.findById(id);
};

const save = async (note) => {
  const newNote = new Note(note);
  return await newNote.save();
};

const update = async (id, note) => {
  await Note.updateOne({ id }, note);
  return await Note.findById(id);
};

const deleteById = async (id) => {
  await Note.deleteOne({ _id: id });
};

export default { findAll, findById, save, update, deleteById };
