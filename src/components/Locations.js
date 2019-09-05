import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';

export default function Locations({ locations, removeLocation }) {
  const locationsArray = locations.map((note, i) => {
    return <Location key={i} removeNote={removeLocation} note={note} />;
  });

  return (
    <ul>
      {locationsArray}
    </ul>
  );
}

Locations.propTypes = {
  locations: PropTypes.array.isRequired,
  removeLocation: PropTypes.func.isRequired
};
