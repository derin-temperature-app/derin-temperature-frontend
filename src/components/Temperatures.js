import React from 'react';
import PropTypes from 'prop-types';
import Temperature from './Temperature';

export default function Temperatures({ temperatures, removeTemperature }) {
  const temperaturesArray = temperatures.map((note, i) => {
    return <Temperature key={i} removeNote={removeTemperature} note={note} />;
  });

  return (
    <ul>
      {temperaturesArray}
    </ul>
  );
}

Temperatures.propTypes = {
  temperatures: PropTypes.array.isRequired,
  removeTemperature: PropTypes.func.isRequired
};

