import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { userReducer as user } from 'redux-controllers/user';

const rootReducer = combineReducers({
  form,
  user
});

export default rootReducer;
