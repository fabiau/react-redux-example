import { Action } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import uniqid from 'uniqid';
import { todoAdded } from '../../slices/todosSlice';

export const ADD_TODO_SAGA = 'sagas/todos/add';

export interface AddTodoSagaPayload {
  text: string;
}

export interface AddTodoSagaAction {
  type: typeof ADD_TODO_SAGA;
  payload: AddTodoSagaPayload;
}

export function addTodo(payload: AddTodoSagaPayload): AddTodoSagaAction {
  return {
    type: ADD_TODO_SAGA,
    payload,
  };
}

export function* addTodoHandler(action: AddTodoSagaAction) {
  const id: string = yield call(uniqid);
  yield put(todoAdded({ id, text: action.payload.text }));
}

export function* addTodoSaga() {
  yield takeEvery(ADD_TODO_SAGA, addTodoHandler);
}
