import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

export const selectTodos = (state: RootState) => state.todos.items;
export const selectTodosItems = createSelector(selectTodos, (todos) =>
  Object.values(todos)
);
