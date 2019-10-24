import React, { Component } from 'react';
import './Calculator.scss';
// import PropTypes from 'prop-types';
import {
  Container, Form, Row, Col, ButtonToolbar, ButtonGroup, Button,
} from 'react-bootstrap';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonVal: '',
    };
  }

  handleClick = (event) => {
    const { buttonVal } = this.state;
    this.setState({
      buttonVal: buttonVal + event.target.name,
    });
  }

  handleCalculate = (event) => {
    console.log(event.target.name);
  }

  render() {
    return (
      <Container className="shadow-lg bg-white">
        <Row>
          <Col>
            {/* {this.state.buttonVal} */}
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control value={this.state.buttonVal} className="py-3" type="text" placeholder="" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonToolbar aria-label="Toolbar with button groups" className="">
              <ButtonGroup className="w-100" aria-label="First group">
                <Button name="1" onClick={this.handleClick} className="left-corner-first-button" variant="outline-info" block>1</Button>
                <Button name="2" onClick={this.handleClick} variant="outline-info" block>2</Button>
                <Button name="3" onClick={this.handleClick} variant="outline-info" block>3</Button>
                <Button name="+" onClick={this.handleClick} variant="info" block>+</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar aria-label="Toolbar with button groups" className="">
              <ButtonGroup className="w-100" aria-label="First group">
                <Button name="4" onClick={this.handleClick} className="left-corner-first-button" variant="outline-info" block>4</Button>
                <Button name="5" onClick={this.handleClick} variant="outline-info" block>5</Button>
                <Button name="6" onClick={this.handleClick} variant="outline-info" block>6</Button>
                <Button name="-" onClick={this.handleClick} variant="info" block>-</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar aria-label="Toolbar with button groups" className="">
              <ButtonGroup className="w-100" aria-label="First group">
                <Button name="7" onClick={this.handleClick} className="left-corner-first-button" variant="outline-info" block>7</Button>
                <Button name="8" onClick={this.handleClick} variant="outline-info" block>8</Button>
                <Button name="9" onClick={this.handleClick} variant="outline-info" block>9</Button>
                <Button name="*" onClick={this.handleClick} variant="info" block>*</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar aria-label="Toolbar with button groups" className="">
              <ButtonGroup className="w-100" aria-label="First group">
                <Button name="." onClick={this.handleClick} className="left-corner-first-button" variant="outline-info" block>.</Button>
                <Button name="0" onClick={this.handleClick} variant="outline-info" block>0</Button>
                <Button name="=" onClick={this.handleCalculate} variant="outline-info" block>=</Button>
                <Button name="/" onClick={this.handleClick} variant="info" block>/</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
