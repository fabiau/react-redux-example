import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddToDoPayload } from '../../interfaces/actions/AddToDoPayload';
import { RemoveToDoPayload } from '../../interfaces/actions/RemoveToDoPayload';
import { ToggleToDoPayload } from '../../interfaces/actions/ToggleToDoPayload';
import { ToDo } from '../../interfaces/models/ToDo';

export interface TodosState {
  items: Record<string, ToDo>;
}

const initialState: TodosState = {
  items: {},
};

export const toDosSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<AddToDoPayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items[action.payload.id] = { ...action.payload, isComplete: false };
    },
    removeToDo: (state, action: PayloadAction<RemoveToDoPayload>) => {
      delete state.items[action.payload.id];
    },
    toggleToDo: (state, action: PayloadAction<ToggleToDoPayload>) => {
      const todo = state.items[action.payload.id];
      if (todo) {
        todo.isComplete = !todo.isComplete;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToDo, removeToDo, toggleToDo } = toDosSlice.actions;

export default toDosSlice.reducer;
