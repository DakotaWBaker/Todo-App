import React from "react";
import Todo from "./Todo.js";

export default function TodoList({ todos, setTodos, list }) {
  let counter = 1;    //counter thats increments each time a todo is rendered to make an ordered list with numbers
  
  if (list === "All") {
      //filtering list of all todos
    return todos.map((todo) => {
      return (
        <Todo                   
        key={todo.id} 
        counter = {counter++}
        todo={todo}              //passing key, counter, todo, todos, settodos, and id to todo compononent
        todos={todos} 
        setTodos={setTodos} 
        id = {Date.now()} 
        />
      );
    });

  } else if (list === "Completed") {
     //filtering all the todos that are complete
    return todos
      .filter((todos) => todos.complete === true)
      .map((todo) => {
        return (
          <Todo                  
          key={todo.id} 
          counter = {counter++}
          todo={todo}            //passing key, counter, todo, todos, settodos, and id to todo compononent
          todos={todos} 
          setTodos={setTodos} 
          id = {Date.now()} 
          />
        );
      });
      
  } else if (list === "To-Do") {
      //filtering all the todos that arent completed. 
    return todos
      .filter((todos) => todos.complete === false)
      .map((todo) => {
        return (
          <Todo                 
          key={todo.id} 
          counter = {counter++}
          todo={todo}              //passing key, counter, todo, todos, settodos, and id to todo compononent
          todos={todos} 
          setTodos={setTodos} 
          id = {Date.now()}
          />
        );
      });
  }
}
