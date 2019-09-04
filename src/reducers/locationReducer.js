import { FETCH_LOCATIONS } from '../acitons/locationActions';

const initialState = {
  locations: []
};

export default function reducers(state = initialState, action) {
  switch(action.type) {
    case FETCH_LOCATIONS:
      return { locaitons: [state.locations, ...action.payload] };
    default:
      return state;
  }
}
