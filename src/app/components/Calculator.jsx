import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Container className="shadow-lg bg-light">
        <Form>
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="email" placeholder="" />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Calculator;
