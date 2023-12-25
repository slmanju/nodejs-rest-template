import noteService from "../service/note-service";

const findAll = async (_req, res) => {
  const notes = await noteService.findAll();
  res.status(200).send(notes);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const note = await noteService.findById(id);
  res.send(note);
};

const saveNote = async (req, res) => {
  const { title, description } = req.body;
  const note = await noteService.saveNote({ title, description });
  res.status(201).send(note);
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const note = await noteService.updateNote(id, { title, description });
  res.send(note);
}; 

const deleteNote = async (req, res) => {
  const { id } = req.params;
  await noteService.deleteNote(id);
  res.status(204).send({});
};

export default { findAll, findById, saveNote, updateNote, deleteNote };
