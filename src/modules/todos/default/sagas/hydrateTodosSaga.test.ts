import { apply, put } from 'redux-saga/effects';
import { todosHydrated } from '../defaultTodosSlice';
import todosRepository from '../repository/todosRepository';
import { hydrateTodos } from './hydrateTodosSaga';

describe('hydrateTodos', () => {
  const gen = hydrateTodos();

  it('queries all todos stored in todos repository', () => {
    expect(gen.next().value).toEqual(
      apply(todosRepository, todosRepository.all, [])
    );
  });

  it('dispatches the queried todos by calling todosHydrated ', () => {
    expect(
      gen.next([
        {
          id: 'kz2qa7mn',
          text: 'Run the Saga',
          completed: false,
        },
      ]).value
    ).toEqual(
      put(
        todosHydrated({
          todos: [
            {
              id: 'kz2qa7mn',
              text: 'Run the Saga',
              completed: false,
            },
          ],
        })
      )
    );
  });
});
