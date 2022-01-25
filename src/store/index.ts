import { configureStore } from "@reduxjs/toolkit";
import toDosSlice from "./slices/toDosSlice";

export const store = configureStore({
  reducer: {
    toDos: toDosSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
