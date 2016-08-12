import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Note from './note';

export default class NotesList extends Component {
    componentWillMount() {
        this.props.fetchNotes();
    }
    
    render() {
        return (
            <div>
                {
                    this.props.notes.map(note => {
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

function mapStateToProps(state) {
    return { notes: state.notes }
}

export default connect(mapStateToProps, actions)(NotesList);