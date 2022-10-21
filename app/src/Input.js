import React from "react";
import { useRef } from "react";
import TodoList from "./TodoList";

export default function Input({ todos, setTodos, list }) {
  const complete = todos.filter((todos) => todos.complete === false).length;
  const nameRef = useRef(null);
  function handleAdd(e) {
    const name = nameRef.current.value;

    if (name === "") return;
    setTodos((previousTodos) => {
      return [
        ...previousTodos,
        { id: Date.now(), name: name, complete: false },
      ];
    });
    nameRef.current.value = null;
  }
  return (
    <>
      <div className="row mt-3 text-center">
        <h1>To-Do List</h1>
      </div>
      <div className="row inputrow">
        <div className="col-8 input">
          <input
            className="addTodo"
            id="inputfield"
            ref={nameRef}
            type="text"
            placeholder="  Add new To-Do"
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
        <div>{`${complete} items left to complete!`}</div>
      </div>
      <div className="row">
        <label className="label p-1 overflow-auto">
          <TodoList todos={todos} setTodos={setTodos} list={list} />
        </label>
      </div>
    </>
  );
}
