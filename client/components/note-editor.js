import React, { Component } from 'react';

export default class NoteEditor extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter title" />
                <textarea
                    placeholder="Enter note text"
                    rows={5} />
                <div>
                    <button>Add</button>
                </div>

            </div>
        );
    }
}