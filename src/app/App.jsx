import React from 'react';
import {
  Container, Col, Row,
} from 'react-bootstrap';
import Calculator from './components/Calculator';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Container className="App">
        <h2 className="calculator">Calculator </h2>
        <Row>
          <Col><Calculator /></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
