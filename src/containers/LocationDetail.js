import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from '../components/Location';
import { connect } from 'react-redux';
import { fetchLocation, createLocation } from '../actions/locationAction';
import { getLocationsList } from '../selectors/weatherSelector';

class LocationDetail extends Component { 
  static propTypes = { 
    locations: PropTypes.array,
    fetch: PropTypes.func,
    createLocation: PropTypes.func
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { locations } = this.props;
    return (
    <>
      <Location locations={locations} />
    </>
    );
  }
}

const mapStateToProps = state => ({
  locations: getLocationsList(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchLocation());
  },
  createLocation(location) {
    dispatchEvent(createLocation(location));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationDetail);
