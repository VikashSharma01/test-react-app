import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
// import SuspenceApiTest from './FnComponentSuspenceApiTest';

class TestReact extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              Hello React
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default TestReact;
