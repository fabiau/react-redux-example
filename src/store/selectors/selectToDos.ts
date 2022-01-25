import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const selectToDos = (state: RootState) => state.toDos.items;
export const selectToDosItems = createSelector(selectToDos, (toDos) =>
  Object.values(toDos)
);
