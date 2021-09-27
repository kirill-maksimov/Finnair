import {
  GET_FLIGHTS_SUCCESS,
  UPDATE_FLIGHTS_SUCCESS,
} from '../consts/actions-types';

const defaultState = {
  flights: null,
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_FLIGHTS_SUCCESS:
      return {
        ...state,
        flights: action.response,
      };
    case UPDATE_FLIGHTS_SUCCESS:
      return {
        ...state,
        filteredFlights: action.response.payload,
      };
    default:
      return state;
  }
}

export default reducer;
