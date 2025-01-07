import React, { useState, useEffect } from 'react';
// import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateSelector from './components/DatePicker';
import RatesGrid from './components/RatesGrid';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchExchangeRates } from './api';
import moment from 'moment';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rates, setRates] = useState([]);

  const fetchRates = async (date) => {
    const formattedDate = moment(date).format('yyyy-MM-DD');
    console.log(formattedDate);
    const data = await fetchExchangeRates(formattedDate);
    console.log(data);
    setRates(data || []);
  };

  useEffect(() => {
    fetchRates(selectedDate);
  }, [selectedDate]);

  return (    
    <Container>
      <Row style={{ backgroundColor: 'black', marginTop: '10px' }}>
      <Col style={{ color: 'lightGray', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px' }}>Yet Another Forex</Col>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col><h6 style={{ marginTop: '10px', paddingLeft: '10px', fontWeight: 'bold' }}>Rates as of {moment(selectedDate).format('DD-MM-yyyy')}</h6></Col>
        <Col><DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} /></Col>
      </Row>
      <Row>
        <RatesGrid rates={rates} />
      </Row>
    </Container>
    // <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
    //   <h1 style={{ marginBottom: '20px' }}>Rates as of {moment(selectedDate).format('DD-MM-yyyy')}</h1>
    //   <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
    //   <RatesGrid rates={rates} />
    // </div>
  );
};

export default App;
