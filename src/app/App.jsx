import React from 'react';
import {
  Container, Col, Row,
} from 'react-bootstrap';
import { connect } from 'react-redux';
// import Calculator from './components/Calculator';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import AddToDo from './components/ToDoList';
// import SimpleCounter from './components/SimpleCounter';
import addTodo from './components/store/Actions';
import './App.scss';
import TestQuiz from './components/TestQuiz';
// import POCCSVUPLOADER from './components/POCCSVUPLOADER';


// const initState = {
//   count: 0,
//   add: '',
// };
// const initStateForToDo = { add: '' };


// function reducerForToDoList(state = initStateForToDo, action) {
//   // console.log(state.add);
//   // state.add.map((v) => console.log(v));
//   // console.log(action);
//   switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         add: `${state.add.concat(action.add)}`,
//       };
//     default:
//       return state;
//   }
// }

// function aSimplereducer(state = initState, action) {
//   // console.log(state);
//   switch (action.type) {
//     case 'INC':
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case 'DEC':
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case 'ADD_TODO':
//       return {
//         ...state,
//         add: `${state.add.concat(action.add)}`,
//       };
//     default:
//       return state;
//   }
// }

// const storeForSimpleCounter = createStore(reducerForSimpleCounter);
// const storeForToDoList = createStore(reducerForToDoList);

// export const store = createStore(aSimplereducer);

// store.subscribe(() => store.getState());

class App extends React.PureComponent {
  render() {
    return (
      <Container fluid>
        {/* <h2 className="calculator">Simple Counter & ToDo List</h2> */}
        {/* <h2 className="calculator text-center">Dare Quiz</h2> */}
        {/* <Row>
          <Col><SimpleCounter /></Col>
        </Row>
        <Row>
          <Col><AddToDo /></Col>
        </Row> */}
        <Row>
          <Col><TestQuiz /></Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  addTodo: () => {
    dispatch(addTodo());
  },
});

export default connect(mapStateToProps)(App);
