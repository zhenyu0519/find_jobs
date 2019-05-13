import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherAction } from '../actions/fetchWeatherActions'

class Weather extends Component {

    componentDidMount(){
        this.props.fetchWeatherAction();
    }

    componentWillReceiveProps(nextProps){
        console.log('props is ', nextProps)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(null, { fetchWeatherAction })(Weather);
