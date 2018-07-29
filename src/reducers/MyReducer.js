import { CHANGE_TITLE } from '../constants';

const INITIAL_STATE = {
    title: "React Redux basic sample"
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.payload
            };
        default: return state;
    }
}