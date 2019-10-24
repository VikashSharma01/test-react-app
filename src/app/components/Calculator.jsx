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
      <Container className="shadow-lg bg-white">
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
                <Button value="1" className="left-corner-first-button" variant="outline-info" block>1</Button>
                <Button value="2" variant="outline-info" block>2</Button>
                <Button value="3" variant="outline-info" block>3</Button>
                <Button value="+" variant="outline-info" block>+</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar aria-label="Toolbar with button groups" className="">
              <ButtonGroup className="w-100" aria-label="First group">
                <Button value="4" className="left-corner-first-button" variant="outline-info" block>4</Button>
                <Button value="5" variant="outline-info" block>5</Button>
                <Button value="6" variant="outline-info" block>6</Button>
                <Button value="-" variant="outline-info" block>-</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar aria-label="Toolbar with button groups" className="">
              <ButtonGroup className="w-100" aria-label="First group">
                <Button value="7" className="left-corner-first-button" variant="outline-info" block>7</Button>
                <Button value="8" variant="outline-info" block>8</Button>
                <Button value="9" variant="outline-info" block>9</Button>
                <Button value="*" variant="outline-info" block>*</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar aria-label="Toolbar with button groups" className="">
              <ButtonGroup className="w-100" aria-label="First group">
                <Button value="." className="left-corner-first-button" variant="outline-info" block>.</Button>
                <Button value="0" variant="outline-info" block>0</Button>
                <Button value="=" variant="outline-info" block>=</Button>
                <Button value="/" variant="outline-info" block>/</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
