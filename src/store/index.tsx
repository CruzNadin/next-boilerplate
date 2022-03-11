import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './reducers';

export const rootReducers = combineReducers({
  authReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
