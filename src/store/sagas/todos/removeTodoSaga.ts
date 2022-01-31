import { call, put, takeEvery } from 'redux-saga/effects';
import todosRepository from '../../../db/todosRepository';
import { todoRemoved } from '../../slices/todosSlice';

export const REMOVE_TODO_SAGA = 'sagas/todos/remove';

export interface RemoveTodoSagaPayload {
  id: string;
}

export interface RemoveTodoSagaAction {
  type: typeof REMOVE_TODO_SAGA;
  payload: RemoveTodoSagaPayload;
}

export function removeTodo(
  payload: RemoveTodoSagaPayload
): RemoveTodoSagaAction {
  return {
    type: REMOVE_TODO_SAGA,
    payload,
  };
}

export function* removeTodoHandler(action: RemoveTodoSagaAction) {
  yield call(todosRepository.delete, action.payload.id);
  yield put(todoRemoved({ id: action.payload.id }));
}

export function* removeTodoSaga() {
  yield takeEvery(REMOVE_TODO_SAGA, removeTodoHandler);
}
