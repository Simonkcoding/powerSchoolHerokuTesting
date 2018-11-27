import { FETCH_FORMS, UPDATE_FORM } from '../actions/types';
const initialState = {
    forms: [],
    isRead: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_FORMS:
        return {
            ...state,
            forms:action.payload
        }
        case UPDATE_FORM:
        return {
            ...state,
            form:action.payload
        }
        default:
            return state;

    }
}