import { fork, all } from 'redux-saga/effects';
import { watchLoginUserData, watchRegisterUserData } from 'redux-controllers/user';

export default function* rootSaga() {
  yield all([fork(watchLoginUserData), fork(watchRegisterUserData)]);
}
