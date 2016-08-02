// Module import
import mongoose from 'mongoose';

// Table structure
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: { type: String },
    text: { type: String },
    color: { type: String },
    createdAt: { type: Date }
});

// Table creating
const Note = mongoose.model('Note', NoteSchema);