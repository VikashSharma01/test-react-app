import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.scss';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col>
          <h4>Test React App</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
