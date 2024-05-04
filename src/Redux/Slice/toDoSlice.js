import { createSlice } from "@reduxjs/toolkit";

///////////////
const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    getTodos: (state, action) => {
      const todos = localStorage.getItem("todos");
      if (todos === null) {
        state.todos = [];
      } else {
        state.todos = JSON.parse(todos);
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, getTodos } = todoSlice.actions;

export default todoSlice.reducer;
