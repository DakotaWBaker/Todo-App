import React from 'react'

export default function Todo({todo, todos, setTodos}) {
function toggle(id) {
  const newTodos = [...todos]
  const todo = newTodos.find (todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
console.log(id)
}

  function handleChange() {
     toggle(todo.id)
    };
  return (
    

    <div className="row items m-3">
    <div className='col-10'>
  {todo.name}
   </div>
   <div className='col-1 p-0'>
    <input className='check'
    type = 'checkbox'
    checked = {todo.complete}
    onChange={handleChange} 
    />
    </div>
    <div className='col-1 p-0'>
    <button className='todoButton' onClick={() => {
          setTodos(
            todos.filter(e =>
              e.id !== todo.id
            )
          );
        }}>
          Delete
        </button>
        </div>
    </div>
  
 
  )
}
