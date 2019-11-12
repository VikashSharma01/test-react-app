import React from 'react';
import {
  Container, Col, Row,
} from 'react-bootstrap';
// import Calculator from './components/Calculator';
// import AddToDo from './components/ToDoList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SimpleCounter from './components/SimpleCounter';
import './App.scss';

const initState = { count: 0 };

function reducer(state = initState, action) {
  // console.log(action);
  switch (action.type) {
    case 'INC':
      return {
        count: state.count + 1,
      };
    case 'DEC':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// store.dispatch({ type: 'INC' });

class App extends React.PureComponent {
  render() {
    return (
      <Container fluid className="App">
        <h2 className="calculator">Simple Counter</h2>
        <Row>
          <Col><Provider store={store}><SimpleCounter /></Provider></Col>
        </Row>
        {/* <Row>
          <Col><Calculator /></Col>
        </Row> */}
      </Container>
    );
  }
}

export default App;
