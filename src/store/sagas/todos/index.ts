import { call, fork } from 'redux-saga/effects';
import { addTodoSaga } from './addTodoSaga';
import { hydrateTodos } from './hydrateTodosSaga';
import { removeTodoSaga } from './removeTodoSaga';

export function* todosSaga() {
  yield call(hydrateTodos);
  yield fork(addTodoSaga);
  yield fork(removeTodoSaga);
}
