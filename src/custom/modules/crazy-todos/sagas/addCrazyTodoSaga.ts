import { call, put, takeEvery, select, apply } from 'redux-saga/effects';
import uniqid from 'uniqid';
import { todoAdded } from '../../../../modules/todos/default/defaultTodosSlice';
import { ITodo } from '../../../../modules/todos/default/ITodo';
import todosRepository from '../../../../modules/todos/default/repository/todosRepository';
import { selectTodoById } from '../../../../modules/todos/default/selectors';

export const ADD_CRAZY_TODO_SAGA = 'sagas/todos/add';

export interface IAddCrazyTodoSagaAction {
  type: typeof ADD_CRAZY_TODO_SAGA;
}

export function addCrazyTodo(): IAddCrazyTodoSagaAction {
  return {
    type: ADD_CRAZY_TODO_SAGA,
  };
}

export function* addCrazyTodoHandler(_action: IAddCrazyTodoSagaAction) {
  const id: string = yield call(uniqid);
  yield put(todoAdded({ id, text: 'Crazy!!' }));
  const addedTodo: ITodo = yield select(selectTodoById, id);
  yield apply(todosRepository, todosRepository.add, [addedTodo]);
}

export function* addCrazyTodoSaga() {
  yield takeEvery(ADD_CRAZY_TODO_SAGA, addCrazyTodoHandler);
}
