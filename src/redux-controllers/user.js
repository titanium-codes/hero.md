import { put, takeLatest } from 'redux-saga/effects';
import history from '../history';

const LOGIN_USER_REQUEST = '[user] login request';
const LOGIN_USER_SUCCESS = '[user] login success';
const LOGIN_USER_ERROR = '[user] login error';

const REGISTE_USER_REQUEST = '[user] register user request';
const REGISTE_USER_SUCCESS = '[user] register user success';
const REGISTE_USER_ERROR = '[user] register user error';

export const loginUserRequest = (data, to) => ({
  type: LOGIN_USER_REQUEST,
  data,
  to
});

const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

const loginUserError = error => ({
  type: LOGIN_USER_ERROR,
  error
});

export const registerUserRequest = token => ({
  type: REGISTE_USER_REQUEST,
  token
});

const registerUserSuccess = payload => ({
  type: REGISTE_USER_SUCCESS,
  payload
});

const registerUserError = error => ({
  type: REGISTE_USER_ERROR,
  error
});

// reducers
const initialState = {
  user: {},
  loading: false,
  error: false
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case REGISTE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case REGISTE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false
      };
    case REGISTE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}

// saga
function* registerUserData({ values }) {
  try {
    yield put(registerUserSuccess(values));
  } catch (error) {
    yield put(registerUserError(error.response.data));
  }
}

function* loginUserData({ values }) {
  try {
    yield put(loginUserSuccess(values));
    localStorage.setItem('token', 1);
    history.push('/feed');
  } catch (error) {
    yield put(loginUserError(error.response.data));
  }
}

export function* watchLoginUserData() {
  yield takeLatest(LOGIN_USER_REQUEST, loginUserData);
}

export function* watchRegisterUserData() {
  yield takeLatest(REGISTE_USER_REQUEST, registerUserData);
}
