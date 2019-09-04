import React from 'react';
import PropTypes from 'prop-types';

export default function Location({ location }) {
  return (
    <li>
      <p>{location._id}</p>
      <p>{location.name}</p>
    </li>
  );
}

Location.propTypes = {
  location: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};
