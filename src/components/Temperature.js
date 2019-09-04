import React from 'react';
import PropTypes from 'prop-types';

export default function Temperature({ temperature }) {
  return (
    <li>
      <p>{temperature._id}</p>
      <p>{temperature.number}</p>
    </li>
  );
}

Temperature.propTypes = {
  temperature: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
  }).isRequired
};

