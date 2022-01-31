import { apply, put, takeEvery } from 'redux-saga/effects';
import { todoRemoved } from '../defaultTodosSlice';
import todosRepository from '../repository/todosRepository';
import {
  removeTodo,
  removeTodoHandler,
  removeTodoSaga,
  REMOVE_TODO_SAGA,
} from './removeTodoSaga';

describe('removeTodo', () => {
  it(`creates an action with type "${REMOVE_TODO_SAGA}" and payload id "kz2qqdsg"`, () => {
    expect(removeTodo({ id: 'kz2qqdsg' })).toEqual({
      type: REMOVE_TODO_SAGA,
      payload: {
        id: 'kz2qqdsg',
      },
    });
  });
});

describe('removeTodoSaga', () => {
  const gen = removeTodoSaga();

  it('waits for the user to remove a todo', () => {
    expect(gen.next().value).toEqual(
      takeEvery(REMOVE_TODO_SAGA, removeTodoHandler)
    );
  });
});

describe('removeTodoHandler', () => {
  const gen = removeTodoHandler(removeTodo({ id: 'kz2qqdsg' }));

  it('deletes the todo with id: "kz2qqdsg" from the todos repository', () => {
    expect(
      gen.next({ id: 'kz2qqdsg', text: 'Run the Saga', completed: false }).value
    ).toEqual(apply(todosRepository, todosRepository.delete, ['kz2qqdsg']));
  });

  it('uses id: "kz2qqdsg" to remove the todo', () => {
    expect(gen.next().value).toEqual(put(todoRemoved({ id: 'kz2qqdsg' })));
  });

  it('should be done processing at this point', () => {
    expect(gen.next().done).toBe(true);
  });
});
