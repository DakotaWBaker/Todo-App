import React from "react";

export default function Todo({ todo, todos, setTodos, counter }) {
  
  //toggle function. changing todo complete status
  function toggle(id) {
    const newTodos = [...todos]; //using spreader to set todos already in state to variable
    const todo = newTodos.find((todo) => todo.id === id);   //finding todo by id
    todo.complete = !todo.complete;   //toggling between complete and not complete
    setTodos(newTodos);   //setting todos to newtodos variable
  }

  //handle change function when checkbox gets selected.
  function handleChange() {
    toggle(todo.id);     //passing todo if to toggle function
  }
  return (
    <div className="row items m-3">
      <div className="col-10"> {`${counter}.)  ${todo.name}`}</div>
      <div className="col-1 p-0">
        <input                //checkbox for changing todos to completed
          className="check"
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}   //calling handlechange function on change
        />
      </div>
      <div className="col-1 p-0">
        <button                     //button for removing individual todos
          className="todoButton"
          onClick={() => {
            setTodos(todos.filter((e) => e.id !== todo.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
