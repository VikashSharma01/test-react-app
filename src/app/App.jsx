import React from 'react';
import {
  Container, Col, Row,
} from 'react-bootstrap';
// import Calculator from './components/Calculator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddToDo from './components/ToDoList';
import SimpleCounter from './components/SimpleCounter';
import './App.scss';

const initState = { count: 0 };
const initStateForToDo = { add: '' };


function reducerForToDoList(state = initStateForToDo, action) {
  // console.log(state.add);
  // state.add.map((v) => console.log(v));
  // console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        add: `${state.add.concat(action.add)}`,
      };
    default:
      return state;
  }
}

function reducerForSimpleCounter(state = initState, action) {
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

const storeForSimpleCounter = createStore(reducerForSimpleCounter);
const storeForToDoList = createStore(reducerForToDoList);

// store.subscribe(() => console.log(store.getState()));

class App extends React.PureComponent {
  render() {
    return (
      <Container fluid className="App">
        <h2 className="calculator">Simple Counter & ToDo List</h2>
        <Row>
          <Col><Provider store={storeForSimpleCounter}><SimpleCounter /></Provider></Col>
        </Row>
        <Row>
          <Col><Provider store={storeForToDoList}><AddToDo /></Provider></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
