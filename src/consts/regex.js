export const AIRLINE_CODE = new RegExp('^[A-Z]{2}$', 'g');
export const AIRPORT = new RegExp('^[A-Z]{3}$', 'g');
export const EXACT_FLIGHT_NUMBER = new RegExp('^\\d{1,4}$', 'g');
export const AIRCRAFT_TYPE = new RegExp('^((\\w|\\d)+\\s?)*$', 'g');
