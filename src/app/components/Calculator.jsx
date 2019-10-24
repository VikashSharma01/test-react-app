import React, { Component } from 'react';
import './Calculator.scss';
import {
  Container, Form, Row, Col, ButtonToolbar, ButtonGroup, Button,
} from 'react-bootstrap';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Container className="shadow-lg bg-light">
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control className="py-3" type="text" placeholder="" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonToolbar aria-label="Toolbar with button groups" className="">
              <ButtonGroup className="w-100" aria-label="First group">
                <Button className="left-corner-first-button" variant="outline-info" block>1</Button>
                <Button variant="outline-info" block>2</Button>
                <Button variant="outline-info" block>3</Button>
                <Button variant="outline-info" block>+</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar aria-label="Toolbar with button groups" className="">
              <ButtonGroup className="w-100" aria-label="First group">
                <Button className="left-corner-first-button" variant="outline-info" block>4</Button>
                <Button variant="outline-info" block>5</Button>
                <Button variant="outline-info" block>6</Button>
                <Button variant="outline-info" block>-</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar aria-label="Toolbar with button groups" className="">
              <ButtonGroup className="w-100" aria-label="First group">
                <Button className="left-corner-first-button" variant="outline-info" block>7</Button>
                <Button variant="outline-info" block>8</Button>
                <Button variant="outline-info" block>9</Button>
                <Button variant="outline-info" block>*</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar aria-label="Toolbar with button groups" className="">
              <ButtonGroup className="w-100" aria-label="First group">
                <Button className="left-corner-first-button" variant="outline-info" block>.</Button>
                <Button variant="outline-info" block>0</Button>
                <Button variant="outline-info" block>=</Button>
                <Button variant="outline-info" block>/</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
