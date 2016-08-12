import { FETCH_NOTES } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_NOTES:
            console.log(action.payload);
            return [...state, ...action.payload.data]
    }

    return state;
}