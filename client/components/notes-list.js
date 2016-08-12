import React, { Component } from 'react';

import Note from './note'

export default class NotesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {id: 1, title: 'first title', text: 'first note text'},
                {id: 2, title: 'second title', text: 'second note text'}
            ]
        };
        console.log(this.state.notes)
    }
    render() {
        return (
            <div>
                {
                    this.state.notes.map(note => {
                        return <Note
                            key={note.id}
                            title={note.title}
                            text={note.text} />
                    })
                }
            </div>
        );
    }
}