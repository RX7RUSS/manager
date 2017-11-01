import { combineReducers } from 'redux';

const reducerAction = (state = {
  text: '',
  name: ''
}, action) => {
  switch (action.type) {
    case 'change':
      return {
        name: action.payload,
        text: '' + action.payload
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
    reducerAction
})

export default reducers;
