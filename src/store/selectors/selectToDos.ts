import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const selectTodos = (state: RootState) => state.todos;
export const selectTodosItems = createSelector(selectTodos, (todos) =>
  Object.values(todos)
);
