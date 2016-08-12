import axios from 'axios';

import { FETCH_NOTES } from './types';

export function fetchNotes() {
    return {
        type: FETCH_NOTES,
        payload: axios.get('http://localhost:8080/notes')
    }
}