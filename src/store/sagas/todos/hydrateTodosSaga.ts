import { call, put } from 'redux-saga/effects';
import todosRepository from '../../../db/todosRepository';
import { Todo } from '../../../interfaces/models/Todo';
import { todosHydrated } from '../../slices/todosSlice';

export function* hydrateTodos() {
  try {
    const allTodos: ReadonlyArray<Todo> = yield call(todosRepository.all);
    yield put(todosHydrated({ todos: allTodos }));
  } catch (error) {
    console.error('Unable to hydrate todos:', error);
  }
}
