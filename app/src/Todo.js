import React from 'react'

export default function Todo({todo, todos, setTodos}) {
function toggle(id) {
  const newTodos = [...todos]
  const todo = newTodos.find (todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}

  function handleChange() {
     toggle(todo.id)
    };
  return (
    
<label>
   <div>{todo.name}
    <input 
    type = 'checkbox'
    checked = {todo.complete}
    onChange={handleChange} 
    />
    <button onClick={() => {
          setTodos(
            todos.filter(e =>
              e.id !== todo.id
            )
          );
        }}>
          Delete
        </button>
    </div>
    </label>
  )
}
