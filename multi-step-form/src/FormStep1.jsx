import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.module.css'; 

const FormStep1 = ({ data, setData, nextStep, errors }) => {
  return (
    <Container className="form-container">
      <Row>
        <Col md={12}>
          <h2>Step 1: Personal Information</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                isInvalid={!!errors.name}
                className="form-control" // Add a class for custom styles if needed
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                isInvalid={!!errors.email}
                className="form-control"
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Control
                type="text"
                placeholder="Phone"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                isInvalid={!!errors.phone}
                className="form-control"
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" onClick={nextStep}>Next</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormStep1;
