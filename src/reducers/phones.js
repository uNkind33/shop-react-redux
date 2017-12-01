import { FETCH_PHONES_SUCCESS } from '../actionTypes';

const initialState = {
    phones: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
    case FETCH_PHONES_SUCCESS:
        return { ...state, phones: action.payload }
    default:
        return state;
    }
}