import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="form-search">
                <label >
                    City:
                <input type="text" placeholder='Enter City Name' value={this.props.city} onChange={this.props.handleCityChange} />
                </label>
                <label >
                    Country Code:
                <input disabled={this.props.disableProvince} placeholder={this.props.disableCountryCode ? 'Enter City First!' : 'Enter Country Code'} type="text" value={this.props.province} onChange={this.props.handleCountryCodeChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

SearchBar.propTypes = {
    city: PropTypes.string,
    province: PropTypes.string,
    handleCityChange: PropTypes.func,
    handleCountryCodeChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    disableCountryCode: PropTypes.bool,
};

export default (SearchBar)
