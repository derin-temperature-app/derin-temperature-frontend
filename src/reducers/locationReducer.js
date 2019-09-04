import { FETCH_LOCATIONS } from '../actions/locationActions';

const initialState = {
  locations: []
};

export default function reducers(state = initialState, action) {
  switch(action.type) {
    case FETCH_LOCATIONS:
      return { locations: [state.locations, ...action.payload] };
    default:
      return state;
  }
}
