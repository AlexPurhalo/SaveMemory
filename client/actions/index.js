import { FETCH_NOTES } from './types';
export function fetchNotes() {
    return {
        type: FETCH_NOTES,
        payload: [
            {id: 1, title: 'first title', text: 'first note text'},
            {id: 2, title: 'second title', text: 'second note text'}
        ]
    }
}