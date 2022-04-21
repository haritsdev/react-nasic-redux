import { combineReducers } from 'redux';
import userReducer from './userReducer';
import checkedReducer from './checkReducer';

const allReducers = combineReducers({
  userReducer: userReducer,
  checkedReducer: checkedReducer,
});

export default allReducers;
