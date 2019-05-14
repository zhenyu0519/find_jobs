import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherAction } from '../actions/fetchWeatherActions';

//import component
import SearchBar from './SearchBar'
import WorldMap from './WorldMap'

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

            //init the search bar state
            cityName: '',
            cityOption: {},
            rawData: [[]]
        }
    }





    handleCityNameOnChange = (event) => {
        this.state.cityName = event.target.value
        this.setState({
            cityName: event.target.value
        })
    }

    //submit the city name
    handleSubmitCityName = (event) => {
        event.preventDefault();
        this.props.fetchWeatherAction(this.state.cityName)
    }

    componentWillReceiveProps(nextProps) {
        try {
            if (!_.isEqual(nextProps.weather, this.props.weather)) {
                let cityOptionKey = nextProps.weather.name;
                let cityOption = {
                    [cityOptionKey]: Object.values(nextProps.weather.coord),
                    coord: nextProps.weather.coord,
                    dt: nextProps.weather.dt,
                    name: nextProps.weather.name,
                    desc: nextProps.weather.weather[0].description,
                    visibility: nextProps.weather.visibility,
                    clouds: nextProps.weather.clouds,
                    main: nextProps.weather.main,
                    sunrise: nextProps.weather.sys.sunrise,
                    sunset: nextProps.weather.sys.sunset,
                    icon: nextProps.weather.weather[0].icon,
                };
                let rawData = [nextProps.weather.name, "wind"]
                this.setState({
                    cityOption: cityOption,
                    rawData: rawData,
                    name: nextProps.weather.name,
                })
            }
        } catch (e) {
            return
        }
    }

    render() {
        return (
            <div>
                <SearchBar
                    value={this.state.cityName}
                    handleChange={this.handleCityNameOnChange}
                    handleSubmit={this.handleSubmitCityName}
                />
                <WorldMap
                    geoCoordMap={this.state.cityOption}
                    rawData={this.state.rawData}
                    name={this.state.name === '' ? 'No Location' : this.state.name} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    weather: state.data.weather
})

export default connect(mapStateToProps, { fetchWeatherAction })(Weather);
