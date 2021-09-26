import React, { useState } from 'react';
import "./flights.css";
import {useDispatch, useSelector} from "react-redux";
import FlightFilter from "./flights-filter/flightsFilter";
import {updateFlights} from "../flihgts/flights.action";


function FlightsContainer() {
  const inputContent = [
    'Flight date',
    'Airline code',
    'From',
    'To',
    'Exact flight number',
    'Aircraft type',
  ];
  const [flightsFilters, setFlightsFilters] = useState({
    flightDateUTC: '',
    carrier: '',
    from: '',
    to: '',
    flightNumber: '',
    aircraftType: '',
  });
  const flights = useSelector(state => state.flights);
  const dispatch = useDispatch();

  const filterByParams = (param, value, filteredObj) => {
    return filteredObj?.filter(flight => flight[param] === value);
  };

  const filterByAircraftTypes = (value, filteredObj) => {
    return filteredObj?.filter(flight => value?.split(' ').some(it => it === flight.aircraftType));
  };

  const filterFlights = () => {
    return Object.entries(flightsFilters).reduce((acc, value) => {
      if (!value[1]) {
        return acc;
      }
      if (value[0] === 'aircraftType') {
        return filterByAircraftTypes(value[1], acc);
      }
      return filterByParams(value[0], value[1], acc);
    }, flights)
  };

  const setFilter = (e, param, date) => {
    setFlightsFilters({
      ...flightsFilters,
      [param]: e?.target?.value || date,
    })
  }

  return (
    <div className="container-lg flights-wrapper">
      <div className="flight-filters">
        <FlightFilter
          inputContent={inputContent}
          setFilter={setFilter}
          params={flightsFilters}
        />
      </div>
      <button onClick={() => dispatch(updateFlights(filterFlights()))} className="btn btn-primary">SHOW</button>
    </div>
  );
}

export default FlightsContainer;

