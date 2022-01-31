import { apply, put } from 'redux-saga/effects';
import todosRepository from '../repository/todosRepository';
import { todosHydrated } from '../defaultTodosSlice';
import { ITodo } from '../ITodo';

export function* hydrateTodos() {
  try {
    const allTodos: ReadonlyArray<ITodo> = yield apply(
      todosRepository,
      todosRepository.all,
      []
    );
    yield put(todosHydrated({ todos: allTodos }));
  } catch (error) {
    console.error('Unable to hydrate todos:', error);
  }
}
