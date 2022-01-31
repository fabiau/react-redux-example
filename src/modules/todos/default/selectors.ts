import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { ITodosModule } from './ITodosModule';

export const selectTodos = (state: ITodosModule) => state.todos;
export const selectTodosItems = createSelector(selectTodos, (todos) =>
  Object.values(todos ?? {})
);

export const selectId = (_: RootState, id: string) => id;
export const selectTodoById = createSelector(
  selectTodos,
  selectId,
  (todos, id: string) => todos[id]
);
