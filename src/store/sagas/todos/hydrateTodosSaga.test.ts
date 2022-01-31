import { call, put } from 'redux-saga/effects';
import todosRepository from '../../../db/todosRepository';
import { todosHydrated } from '../../slices/todosSlice';
import { hydrateTodos } from './hydrateTodosSaga';

describe('hydrateTodos', () => {
  const gen = hydrateTodos();

  it('queries all todos stored in todos repository', () => {
    expect(gen.next().value).toEqual(call(todosRepository.all));
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
