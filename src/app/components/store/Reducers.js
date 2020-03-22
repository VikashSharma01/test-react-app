// import { combineReducers } from 'redux';
import { ADD_TODO } from './Actions';

const initState = {
  count: 0,
  add: '',
};

function aSimplereducer(state = initState, action) {
  console.log(action);
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DEC':
      return {
        ...state,
        count: state.count - 1,
      };
    case ADD_TODO:
      return {
        ...state,
        add: `${state.add.concat(action.add)}`,
      };
    default:
      return state;
  }
}

// const todoApp = combineReducers({
//   aSimplereducer,
// });

export default aSimplereducer;
