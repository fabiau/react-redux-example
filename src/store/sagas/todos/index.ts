import { fork } from 'redux-saga/effects';
import { addTodoSaga } from './addTodoSaga';

export function* todosSaga() {
  yield fork(addTodoSaga);
}
