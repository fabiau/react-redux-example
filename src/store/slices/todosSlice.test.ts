import reducer, { todoAdded, TodosState } from './todosSlice';

describe('To-dos Slice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({});
  });

  test('should handle a todo being added to an empty list', () => {
    const previousState: TodosState = {};
    expect(
      reducer(previousState, todoAdded({ id: '1', text: 'Run the tests' }))
    ).toEqual({
      '1': {
        text: 'Run the tests',
        completed: false,
        id: '1',
      },
    });
  });

  test('should handle a todo being added to an existing list', () => {
    const previousState: TodosState = {
      '1': {
        text: 'Run the tests',
        completed: true,
        id: '1',
      },
    };

    expect(
      reducer(previousState, todoAdded({ id: '2', text: 'Use Redux' }))
    ).toEqual({
      '1': {
        text: 'Run the tests',
        completed: true,
        id: '1',
      },
      '2': {
        text: 'Use Redux',
        completed: false,
        id: '2',
      },
    });
  });
});
