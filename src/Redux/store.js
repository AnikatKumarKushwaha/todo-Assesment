import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice/toDoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
