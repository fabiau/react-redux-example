import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddTodoPayload } from "./actions/AddTodoPayload";
import { RemoveTodoPayload } from "./actions/RemoveTodoPayload";
import { Todo } from "./Todo";
import { ToggleTodoPayload } from "./actions/ToggleTodoPayload";

export interface TodosState {
  items: Record<string, Todo>;
}

const initialState: TodosState = {
  items: {},
};

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items[action.payload.id] = { ...action.payload, isComplete: false };
    },
    removeTodo: (state, action: PayloadAction<RemoveTodoPayload>) => {
      delete state.items[action.payload.id];
    },
    toggleTodo: (state, action: PayloadAction<ToggleTodoPayload>) => {
      const todo = state.items[action.payload.id];
      if (todo) {
        todo.isComplete = !todo.isComplete;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleTodo } = counterSlice.actions;

export default counterSlice.reducer;
