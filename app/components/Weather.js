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
            countryCode: '',
            cityOption: {},
            rawData: [[]],
            disableCountryCode: true
        }
    }


    handleCityNameOnChange = (event) => {
        this.state.cityName = event.target.value
        this.setState({
            cityName: this.state.cityName,
            disableCountryCode: false,
        })
    }

    handleContryCodeOnChange = (event) => {
        this.state.countryCode = event.target.value
        this.setState({
            countryCode: event.target.value
        })
    }

    //submit the city name
    handleSubmitCityName = (event) => {
        let cityName = this.state.cityName;
        cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
        let countryCode = this.state.countryCode;
        countryCode = countryCode.toUpperCase();
        event.preventDefault();
        if (this.state.countryCode !== '') {
            this.props.fetchWeatherAction(cityName + ',' + countryCode)
        } else {
            this.props.fetchWeatherAction(cityName)
        }

    }

    componentWillReceiveProps(nextProps) {
        try {
            if (!_.isEqual(nextProps.weather, this.props.weather)) {
                if (nextProps.weather.response.data.cod == 404) {
                    alert('City Not Found!')
                    this.setState({
                        cityName: '',
                        countryCode: '',
                        cityOption: {},
                        rawData: [[]],
                        disableCountryCode: true
                    })
                    return
                } else {
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
                    let rawData = [nextProps.weather.name]
                    this.setState({
                        cityOption: cityOption,
                        rawData: rawData,
                        name: nextProps.weather.name,
                    })
                }

            }
        } catch (e) {
            return
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <SearchBar
                        city={this.state.cityName}
                        province={this.state.countryCode}
                        handleCityChange={this.handleCityNameOnChange}
                        handleCountryCodeChange={this.handleContryCodeOnChange}
                        handleSubmit={this.handleSubmitCityName}
                        disableCountryCode={this.state.disableCountryCode}
                    />
                </div>
                <div className='row'>
                    <WorldMap
                        geoCoordMap={this.state.cityOption}
                        rawData={this.state.rawData}
                        name={this.state.name === '' ? 'No Location' : this.state.name} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    weather: state.data.weather
})

export default connect(mapStateToProps, { fetchWeatherAction })(Weather);
