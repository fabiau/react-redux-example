import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { ITodoAddedPayload } from './actions/ITodoAddedPayload';
import type { ITodoRemovedPayload } from './actions/ITodoRemovedPayload';
import type { ITodosHydratedPayload } from './actions/ITodosHydratedPayload';
import type { ITodoToggledPayload } from './actions/ITodoToggledPayload';
import type { ITodosState } from './ITodosState';

const initialState: ITodosState = {};

export const defaultTodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: (state, action: PayloadAction<ITodoAddedPayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state[action.payload.id] = { ...action.payload, completed: false };
    },
    todoRemoved: (state, action: PayloadAction<ITodoRemovedPayload>) => {
      delete state[action.payload.id];
    },
    todoToggled: (state, action: PayloadAction<ITodoToggledPayload>) => {
      const todo = state[action.payload.id];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    todosHydrated: (_state, action: PayloadAction<ITodosHydratedPayload>) => {
      return action.payload.todos.reduce((todos, todo) => {
        todos[todo.id] = todo;
        return todos;
      }, {} as ITodosState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { todoAdded, todoRemoved, todoToggled, todosHydrated } =
  defaultTodosSlice.actions;

export default defaultTodosSlice.reducer;
