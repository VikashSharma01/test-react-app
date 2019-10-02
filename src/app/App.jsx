import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.scss';
import { Container, Row, Col } from 'react-bootstrap';
import ErrorHandler from './components/ErrorHandler';
import BuggyCounter from './components/BuggyCounter';
import './App.scss';

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col>
          <h4>Test React App</h4>
        </Col>
      </Row>
      <Row>
        <ErrorHandler>
          <p>Something Went wrong</p>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorHandler>
      </Row>
    </Container>
  );
}

export default App;
