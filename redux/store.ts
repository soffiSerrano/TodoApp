import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers';

const initialState = {
  todos: [
    { id: 1, text: 'Example Task 1', completed: false },
    { id: 2, text: 'Example Task 2', completed: true },
  ],
};

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;