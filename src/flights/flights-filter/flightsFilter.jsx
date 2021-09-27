import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import format from 'date-format';
import "react-datepicker/dist/react-datepicker.css";
import { AIRPORT, EXACT_FLIGHT_NUMBER, AIRLINE_CODE, AIRCRAFT_TYPE } from "../../consts/regex";
import "./flightsFilter.css";

const FlightFilter = props => {
  const { inputContent, setFilter, params } = props;
  const [filterErrors, setFilterErrors] = useState({
    flightDateUTC: '',
    carrier: '',
    from: '',
    to: '',
    flightNumber: '',
    aircraftType: '',
  });
  const [startDate, setStartDate] = useState(new Date());
  const validatorsMap = {
    carrier: AIRLINE_CODE,
    from: AIRPORT,
    to: AIRPORT,
    flightNumber: EXACT_FLIGHT_NUMBER,
    aircraftType: AIRCRAFT_TYPE,
  }
  const param = Object.keys(params);

  const setDate = (e, param, date) => {
    setStartDate(date);
    setFilter(e, param, format('yyyy-MM-dd', date));
  }

  const handleChange = (e, param) => {
    if (!e.target.value.match(validatorsMap[param])) {
      setFilterErrors({
        ...filterErrors,
        [param]: 'Not valid!',
      })
    } else {
      setFilterErrors({
        ...filterErrors,
        [param]: '',
      })
    }
    setFilter(e, param);
  }

  return inputContent.map((content, i) => (
    <div className="mb-3 wrapper" key={i}>
      {
        i === 0 ? (
          <div>
            <div className="form-label label">{content}</div>
            <DatePicker selected={startDate} dateFormat="yyyy-MM-dd" onChange={(date) => setDate(null, param[i], date)}/>
            <div className='validation-tip'>
              Insert date
            </div>
          </div>
        ) : (
          <div>
            <label htmlFor={content} className="form-label label">{content}</label>
            <input
              onChange={e => handleChange(e, param[i])}
              type="text"
              className="form-control"
            />
            {
              filterErrors[param[i]] ? (
                <div className="validation-error">
                  Not valid
                </div>
              ) : (
                <div className={params[param[i]] ? 'hidden' : 'validation-tip'}>
                  Insert value
                </div>
              )
            }
          </div>
        )
      }
     </div>
  ));
}

export default FlightFilter;
