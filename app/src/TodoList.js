import React from "react";
import Todo from "./Todo.js";

export default function TodoList({ todos, setTodos, list }) {
  
  if (list === "All") {
    return todos.map((todo) => {
      console.log(todo.id)
      return (
        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      );
    });
  } else if (list === "Completed") {
    return todos
      .filter((todos) => todos.complete === true)
      .map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        );
      });
  } else if (list === "To-Do") {
    return todos
      .filter((todos) => todos.complete === false)
      .map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        );
      });
  }
}
