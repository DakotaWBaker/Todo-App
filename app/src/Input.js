import React from "react";
import { useRef } from "react";
import TodoList from "./TodoList";

export default function Input({ todos, setTodos, list }) {
  const complete = todos.filter((todos) => todos.complete === false).length; //counter for number of tasks left
  const nameRef = useRef(null);   //setting use ref to a variable to use inside of input field to reference it
  function handleAdd(e) {
    const name = nameRef.current.value; //setting useRef current value from input field to a variable

    //returning if input field is empty. if its not empty, adding object for new todo after previous todos using spreader
    if (name === "") return;
    setTodos((previousTodos) => {
      return [
        ...previousTodos,
        {                   
          id: Date.now(),      //setting id to current time in MS
          name: name,         //setting todo.name to name variable thats referencing whats currently in input field
          complete: false,    //setting if todo is complete to initially be false
        },
      ];
    });
    nameRef.current.value = null; //setting input field back to empty after user hits enter
  }
  return (
    <>
      <div className="row mt-3 text-center">
        <h1>To-Do List</h1>
      </div>
      <div className="row inputrow">
        <div className="col-8 input">
          <input //input field for adding todos
            className="addTodo"
            id= "inputfield"
            ref={nameRef}         //passing todos, setTodos, and list view state to todoList component. useref on input
            type="text"
            placeholder="  What do you need To-Do?"
          />
        </div> 
        <div className="col-3 button"> 
          <button className="todoButton" onClick={handleAdd}> 
            Add Task
          </button> 
        </div>
      </div>
      <div className="row text-center">
        <h2>{list}</h2>
      </div>
      <div className="row text-center">  
        <div className="itemsleft">{`${complete} items left to complete!`}</div>  
      </div>
      <div className="row">
        <div className="label p-1 overflow-auto">
          <TodoList           //passing todos, setTodos, and list view state to todoList component
          todos={todos} 
          setTodos={setTodos} 
          list={list}
          />
        </div>
      </div>
    </>
  );
}
