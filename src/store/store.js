import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { modalReducer } from '../reducers/modal.Reducer';
import { userReducer } from '../reducers/user.Reducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
  modal: modalReducer,
  user: userReducer
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);