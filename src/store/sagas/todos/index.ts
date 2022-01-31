import { fork } from 'redux-saga/effects';
import { addTodoSaga } from './addTodoSaga';
import { removeTodoSaga } from './removeTodoSaga';

export function* todosSaga() {
  yield fork(addTodoSaga);
  yield fork(removeTodoSaga);
}
