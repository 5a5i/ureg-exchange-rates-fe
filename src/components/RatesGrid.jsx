import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

const RatesGrid = ({ rates }) => {
  return (
      rates.map(({ id, target_currency, rate }) => (
        <Col key={id}>
            <Card text="center" style={{ borderRadius: '8px' }}>
                <Card.Header bg="secondary">{target_currency.code}</Card.Header>
                <Card.Body bg="light">
                    <Card.Text style={{ fontWeight: 'bolder' }}>{parseFloat(rate).toFixed(4)}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
      ))
  );
};

export default RatesGrid;
