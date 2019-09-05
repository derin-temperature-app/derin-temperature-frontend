import { getTemperatures, postTemperature, removeTemperature } from '../services/temperatureApi';

export const FETCH_TEMPERATURES = 'FETCH_TEMPERATURES';
export const fetchTemperatures = () => ({
  type: FETCH_TEMPERATURES,
  payload: getTemperatures()
});

export const CREATE_TEMPERATURE = 'CREATE_TEMPERATURE';
export const createTemperature = temperature => {
  return { type: CREATE_TEMPERATURE, 
    payload: postTemperature(temperature) };
};

export const DELETE_TEMPERATURE = 'DELETE_TEMPERATURE';
export const deleteTemperature = temperature => {
  return { type: DELETE_TEMPERATURE, 
    payload: removeTemperature(temperature) };
};
