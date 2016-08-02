// Node modules import
import mongoose from 'mongoose';

// Application module import
import '../models/Note'

// Connect configuration function
export function setUpConnection() {
    mongoose.connect('mongodb://localhost/notes');
}

// Server actions
const Note = mongoose.model('Note');

export function listNotes() {
    return Note.find();
}

export function createNote() {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

export function deleteNote() {
    return Note.findById(id).remove();
}
