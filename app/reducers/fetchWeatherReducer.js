import { FETCH_WEATHER, FETCH_WEATHER_OK, FETCH_WEATHER_ERR } from '../actions/types';

const initialState = {
    weather: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return {
                ...state,
                weather: null
            };
        case FETCH_WEATHER_OK:
            return {
                ...state,
                weather: action.result
            };
        case FETCH_WEATHER_ERR:
            return {
                ...state,
                weather: action.error
            };
        default:
            return state;
    }
}