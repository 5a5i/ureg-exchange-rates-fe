import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({ selectedDate, onDateChange }) => {
  return (
    <div style={{ textAlign: 'right', marginBottom: '20px' }}>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        dateFormat="dd-MM-yyyy"
        className="date-picker"
      />
    </div>
  );
};

export default DateSelector;
