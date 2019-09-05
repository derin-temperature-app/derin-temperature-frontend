import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Temperatures from '../components/Temperatures';
import { connect } from 'react-redux';
import { fetchTemperature, createTemperature } from '../actions/temperatureAction';
import { getTemperaturesList } from '../selectors/weatherSelector';

class WeatherOverview extends Component { 
  static propTypes = { 
    temperatures: PropTypes.array,
    fetch: PropTypes.func,
    createTemperature: PropTypes.func
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { temperatures } = this.props;
    return (
    <>
      <Temperatures temperatures={temperatures} />
    </>
    );
  }
}

const mapStateToProps = state => ({
  temperatures: getTemperaturesList(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTemperature());
  },
  createLocation(temperature) {
    dispatchEvent(createTemperature(temperature));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherOverview);
