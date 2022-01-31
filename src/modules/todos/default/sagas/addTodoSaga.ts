import { call, put, takeEvery, select, apply } from 'redux-saga/effects';
import uniqid from 'uniqid';
import { todoAdded } from '../defaultTodosSlice';
import { ITodo } from '../ITodo';
import todosRepository from '../repository/todosRepository';
import { selectTodoById } from '../selectors';

export const ADD_TODO_SAGA = 'sagas/todos/add';

export interface IAddTodoSagaPayload {
  text: string;
}

export interface IAddTodoSagaAction {
  type: typeof ADD_TODO_SAGA;
  payload: IAddTodoSagaPayload;
}

export function addTodo(payload: IAddTodoSagaPayload): IAddTodoSagaAction {
  return {
    type: ADD_TODO_SAGA,
    payload,
  };
}

export function* addTodoHandler(action: IAddTodoSagaAction) {
  const id: string = yield call(uniqid);
  yield put(todoAdded({ id, text: action.payload.text }));
  const addedTodo: ITodo = yield select(selectTodoById, id);
  yield apply(todosRepository, todosRepository.add, [addedTodo]);
}

export function* addTodoSaga() {
  yield takeEvery(ADD_TODO_SAGA, addTodoHandler);
}
