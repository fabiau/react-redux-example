import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoAddedPayload } from '../../interfaces/actions/TodoAddedPayload';
import { TodoRemovedPayload } from '../../interfaces/actions/TodoRemovedPayload';
import { TodosHydratedPayload } from '../../interfaces/actions/TodosHydratedPayload';
import { TodoToggledPayload } from '../../interfaces/actions/TodoToggledPayload';
import { Todo } from '../../interfaces/models/Todo';

export interface TodosState extends Record<string, Todo> {}
const initialState: TodosState = {};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: (state, action: PayloadAction<TodoAddedPayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state[action.payload.id] = { ...action.payload, completed: false };
    },
    todoRemoved: (state, action: PayloadAction<TodoRemovedPayload>) => {
      delete state[action.payload.id];
    },
    todoToggled: (state, action: PayloadAction<TodoToggledPayload>) => {
      const todo = state[action.payload.id];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    todosHydrated: (_state, action: PayloadAction<TodosHydratedPayload>) => {
      return action.payload.todos.reduce((todos, todo) => {
        todos[todo.id] = todo;
        return todos;
      }, {} as TodosState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { todoAdded, todoRemoved, todoToggled, todosHydrated } = todosSlice.actions;

export default todosSlice.reducer;
