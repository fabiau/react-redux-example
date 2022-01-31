import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const selectTodos = (state: RootState) => state.todos;
export const selectTodosItems = createSelector(selectTodos, (todos) =>
  Object.values(todos)
);

export const selectId = (_: RootState, id: string) => id;
export const selectTodoById = createSelector(
  selectTodos,
  selectId,
  (todos, id: string) => todos[id]
);
