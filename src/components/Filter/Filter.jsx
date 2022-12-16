import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  setFilterValue = event => {
    const value = event.currentTarget.value.toUpperCase();

    this.props.onChangeFilter(value);
  };

  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input onChange={this.setFilterValue}></input>
      </div>
    );
  }
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
