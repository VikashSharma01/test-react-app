import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.scss';
import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import ErrorHandler from './components/ErrorHandler';
import BuggyCounter from './components/BuggyCounter';
import TestReact from './components/TestReact';
import './App.scss';

function App() {
  return (
    <Container fluid className="App">
      <Router>
        <Row>
          <Col>
            <h4>Test React App</h4>
          </Col>
          <Col>
            <Link to="/">Home</Link>
          </Col>
          <Col>
            <Link to="/counter">Buggy Counter</Link>
          </Col>
        </Row>

        <Row>
          <Switch>
            <Route path="/counter">
              <ErrorHandler>
                <Col sm="auto">It is a buggy counter</Col>
                <Col sm="auto">
                  <BuggyCounter />
                </Col>
              </ErrorHandler>
            </Route>
            <Route path="/">
              <TestReact />
            </Route>
          </Switch>
        </Row>

      </Router>
    </Container>
  );
}

export default App;
