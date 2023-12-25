import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created: Date,
  updated: Date,
});

const Note = mongoose.model("Notes", NoteSchema);

export default Note;
