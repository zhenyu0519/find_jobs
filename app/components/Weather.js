import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherAction } from '../actions/fetchWeatherActions'

//import lodash
const _ = require('lodash');
//main data template
const MAIN = {
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
}
class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coord: null,//coord.lon: city geo location, longitude; coord.lat: city geo location, latitude
            dt: 0,//time of data calculation, unit, utc
            name: '',//city name
            desc: '',//description
            visibility: 0,//visibility
            clouds: 0,//clouds
            main: JSON.parse(JSON.stringify(MAIN)),//main data 
            sunrise: 0,//sunrise
            sunset: 0,//sunset
            icon: '',//icon for weather
            windDeg: 0,//wind degree
            windSpeed: 0,//wind speed
        }
    }
    componentDidMount() {
        this.props.fetchWeatherAction();
    }

    componentWillReceiveProps(nextProps) {
        try {
            if (!_.isEqual(nextProps.weather, this.props.weather)) {
                console.log(nextProps.weather)
                this.setState({
                    coord: nextProps.weather.coord,
                    dt: nextProps.weather.dt,
                    name: nextProps.weather.name,
                    desc: nextProps.weather.desc,
                    visibility: nextProps.weather.visibility,
                    clouds: nextProps.weather.clouds,
                    main: nextProps.weather.main,
                    sunrise: nextProps.weather.sunrise,
                    sunset: nextProps.weather.sunset,
                    icon: nextProps.weather.icon,
                    windDeg: nextProps.weather.windDeg,
                    windDeg: nextProps.weather.windDeg,
                })
            }
        } catch (e) {
            return
        }
    }

    render() {
        return (
            <div>
                {this.state.main.temp}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    weather: state.data.weather
})

export default connect(mapStateToProps, { fetchWeatherAction })(Weather);
