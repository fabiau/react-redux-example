import { apply, call, put, select, takeEvery } from 'redux-saga/effects';
import uniqid from 'uniqid';
import { todoAdded } from '../defaultTodosSlice';
import todosRepository from '../repository/todosRepository';
import { selectTodoById } from '../selectors';
import {
  addTodo,
  addTodoHandler,
  addTodoSaga,
  ADD_TODO_SAGA,
} from './addTodoSaga';

describe('addTodo', () => {
  it(`creates an action with type "${ADD_TODO_SAGA}" and payload text "Run the Saga"`, () => {
    expect(addTodo({ text: 'Run the Saga' })).toEqual({
      type: ADD_TODO_SAGA,
      payload: {
        text: 'Run the Saga',
      },
    });
  });
});

describe('addTodoSaga', () => {
  const gen = addTodoSaga();

  it('waits for the user to add a todo', () => {
    expect(gen.next().value).toEqual(takeEvery(ADD_TODO_SAGA, addTodoHandler));
  });
});

describe('addTodoHandler', () => {
  const gen: Generator = addTodoHandler(addTodo({ text: 'Run the Saga' }));

  it('randomly generates an id', () => {
    expect(gen.next().value).toEqual(call(uniqid));
  });

  it('uses the generated id: "kz2qa7mn" and the text: "Run the Saga" to add the todo', () => {
    expect(gen.next('kz2qa7mn').value).toEqual(
      put(todoAdded({ id: 'kz2qa7mn', text: 'Run the Saga' }))
    );
  });

  it('uses the generated id: "kz2qa7mn" to query state', () => {
    expect(gen.next().value).toEqual(select(selectTodoById, 'kz2qa7mn'));
  });

  it('saves the queried todo in the todos repository', () => {
    expect(
      gen.next({ id: 'kz2qa7mn', text: 'Run the Saga', completed: false }).value
    ).toEqual(
      apply(todosRepository, todosRepository.add, [
        {
          id: 'kz2qa7mn',
          text: 'Run the Saga',
          completed: false,
        },
      ])
    );
  });

  it('should be done processing at this point', () => {
    expect(gen.next().done).toBe(true);
  });
});
