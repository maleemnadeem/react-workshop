import {TIME_UPDATE} from '../actionTypes';

export default function timeReducer (state = {time: new Date().toLocaleTimeString()}, action) {
    switch (action.type) {
        case TIME_UPDATE:
            return {
                time: new Date().toLocaleTimeString(),
            };
        default:
            return state;
    }
};
