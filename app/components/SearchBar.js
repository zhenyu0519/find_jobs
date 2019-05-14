import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label>
                    City:
                <input type="text" value={this.props.value} onChange={this.props.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

SearchBar.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default (SearchBar)
