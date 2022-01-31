import { call, fork } from 'redux-saga/effects';
import { hydrateTodos } from '../../../../modules/todos/default/sagas/hydrateTodosSaga';
import { removeTodoSaga } from '../../../../modules/todos/default/sagas/removeTodoSaga';
import { addCrazyTodoSaga } from './addCrazyTodoSaga';

export function* crazyTodosSaga() {
  yield call(hydrateTodos);
  yield fork(addCrazyTodoSaga);
  yield fork(removeTodoSaga);
}
