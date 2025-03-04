import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";
import chunkReducer from "./chunkSlice";

export const storage = configureStore({
  reducer: { question: questionReducer, chunks: chunkReducer },
});

export type RootState = ReturnType<typeof storage.getState>;
