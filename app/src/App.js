import React from "react";
import { useState, useEffect, useRef } from "react";
import Input from "./Input.js";

export default function App() {
  //todo state. setting initial render to local storage if there is storage else blank array
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  //state for different views of all, completed, and todo
  const [list, setList] = useState("To-Do");

//use effect for storing items to local storage. use effect running is dependent on todo state changing
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      className="container justify-contents-center mt-5"
      style={{ width: "40rem", height: "40rem" }}
    >
      <Input   //passing todos, setTodos, and list state to input component
      todos={todos} 
      setTodos={setTodos} 
      list={list} 
      />
      <div className="row buttons justify-content-center">
        <div className="col-3 p-0">
          <button className="views"  //button for setting list view to show todo items
          onClick={() => setList("To-Do")}> 
            To-Do 
          </button>
        </div>
        <div className="col-3 views p-0 ">
          <button className="views"  //button for setting list view to show completed items
          onClick={() => setList("Completed")}>
            Completed
          </button>
        </div>
        <div className="col-3 views p-0">
          <button className="views" //button for setting list to show all items
          onClick={() => setList("All")}>
            All
          </button>
        </div>
      </div>

      <div className="row buttons justify-content-center ">
        <div className="col-4">
          <button
            className="views" //button for deleting all completed todos
            onClick={() => {
              setTodos(todos.filter((e) => e.complete === false));
            }}
          >
            Delete Completed
          </button>
        </div>
      </div>
    </div>
  );
}
