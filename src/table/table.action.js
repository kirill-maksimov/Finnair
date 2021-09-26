import { GET_FLIGHTS } from "../consts/actions-types";

export function getFlights (payload) {
  return { type: GET_FLIGHTS, payload};
}
