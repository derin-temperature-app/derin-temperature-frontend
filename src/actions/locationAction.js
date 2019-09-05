import { getLocations, postLocation, removeLocation } from '../services/temperatureApi';

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const fetchLocations = () => ({
  type: FETCH_LOCATIONS,
  payload: getLocations()
});

export const CREATE_LOCATION = 'CREATE_LOCATION';
export const createLocation = location => {
  return { type: CREATE_LOCATION, 
    payload: postLocation(location) };
};

export const DELETE_LOCATION = 'DELETE_LOCATION';
export const deleteLocation = location => {
  return { type: DELETE_LOCATION, 
    payload: removeLocation(location) };
};

