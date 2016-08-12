import { FETCH_NOTES } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_NOTES:
            console.log(action);
            return [...state, ...action.payload]
    }

    return state;
}