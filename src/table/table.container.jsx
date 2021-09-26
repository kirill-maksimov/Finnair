import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from './table.action';
import './table.css';

function TableContainer() {
  const dispatch = useDispatch();
  const flights = useSelector(state => state.flights);
  const filteredFlights = useSelector(state => state.filteredFlights);

  const flightsToShow = filteredFlights || flights;
  const getField = flight => Object.keys(flight);

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  const renderDataTable = () => flightsToShow.map((flight, index) => {
    return (
      <tr key={index}>
        {
          getField(flight).map((key, index) => <td key={index}>{flight[key]}</td>)
        }
      </tr>
    )}
  )

  return (
    flightsToShow && flightsToShow.length ? (
      <div className="table-wrapper">
        <table className="table cell-wrapper">
          <thead>
            <tr>
              {
                getField(flightsToShow[0]).map((item, index) => <th key={index} scope="col">{item}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              renderDataTable()
            }
          </tbody>
        </table>
      </div>
      ) : null
  );
}

export default TableContainer;

