import {
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_START_SUCCESS
} from '../actionTypes';

const initialState = {
    phones:[]
};

export default (state = initialState, action) => {
    switch(action.type) {
    case FETCH_PHONES_SUCCESS:
        return { ...state, phones: action.payload }
    case LOAD_MORE_PHONES_START_SUCCESS:
        return { ...state, phones: state.phones.concat(action.payload) }
    default:
        return state;
    }
}