import {UPDATE_FLIGHTS} from "../consts/actions-types";

export function updateFlights (payload) {
  return { type: UPDATE_FLIGHTS, payload};
}