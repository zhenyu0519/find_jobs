import { FETCH_WEATHER, FETCH_WEATHER_OK, FETCH_WEATHER_ERR } from './types';
import axios from 'axios';

export const fetchWeatherReq = () => {
    return {
        type: FETCH_WEATHER
    }
}

export const fetchWeatherOk = (result) => {
    return {
        type: FETCH_WEATHER_OK,
        result: result
    }
}

export const fetchWeatherErr = (error) => {
    return {
        type: FETCH_WEATHER_ERR,
        error: error
    }
}

export const fetchWeatherAction = () => {
    console.log('fetch.....')
    return function (dispatch) {
        dispatch(fetchWeatherReq());
        return axios.get("http://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&appid=ac7d0a07fdc70b3fd4906ceb2e8032af").then(function (results) {
            console.log('results',results.data)
            dispatch(fetchWeatherOk(results.data));
        }).catch(function (error) {
            dispatch(fetchWeatherErr(error))
        })
    }
}

// export const fetchWeather = () => dispatch => {
//     console.log('fetching...')
//     axios.get("http://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&appid=ac7d0a07fdc70b3fd4906ceb2e8032af")
//         .then(res => res)
//         .then(weather => dispatch({
//             type: FETCH_WEATHER,
//             data: weather
//         })
//         );
// };