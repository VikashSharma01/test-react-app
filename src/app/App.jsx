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
      <Container fluid className="App">
        <div>Calculator</div>
        <Row>
          <Col><Calculator /></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
