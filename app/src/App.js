import React from "react";
import { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList.js";
import Input from "./Input.js";

export default function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  const [list, setList] = useState("To-Do");
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      className="container justify-contents-center mt-5"
      style={{ width: "40rem", height: "40rem" }}
    >
      
     
      <Input todos={todos} setTodos={setTodos} list={list} />
      <div className="row buttons justify-content-center">
        <div className="col-3 p-0">
          <button className="views" onClick={() => setList("To-Do")}>To-Do</button>
        </div>
        <div className="col-3 views p-0 ">
          <button className="views" onClick={() => setList("Completed")}>Completed</button>
        </div>
        <div className="col-3 views p-0">
          <button className= "views" onClick={() => setList("All")}>All</button>
        </div>
      </div>
   
<div className="row buttons justify-content-center ">
  <div className="col-4">
      <button className= "views"
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
