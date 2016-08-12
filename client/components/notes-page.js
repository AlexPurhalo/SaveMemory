import React from 'react';

import NoteEditor from './note-editor';
import NotesList from './notes-list';

export default () => {
    return (
        <div>
            <NoteEditor />
            <NotesList />
        </div>
    )
}