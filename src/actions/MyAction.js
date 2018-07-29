import { CHANGE_TITLE } from '../constants';

export function changeTitle(title) {
    return {
        type: CHANGE_TITLE,
        payload: title
    };
}