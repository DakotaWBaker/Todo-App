import React from 'react'
import { useState, useEffect, useRef} from 'react'
import TodoList from './TodoList.js'

export default function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || []
  });
  const [list, setList] = useState('Todo')
  const nameRef = useRef(null);


  // useEffect(() => {
  //   const stored = JSON.parse(localStorage.getItem('todos'))
  //   if (stored) {
  //     setTodos(stored)
  //   }
  //   }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])



  function handleAdd (e) {
    const name = nameRef.current.value;
    
    if (name === '') return
    setTodos (previousTodos => {
      return [...previousTodos, { id: Date.now(), name: name, complete: false}]
    })
    nameRef.current.value = null;
  }
  console.log(list)
  return (
  <>
  <h1>TODO List</h1>
    <input ref = {nameRef} type = "text" />
    <button onClick = {handleAdd}>Add todo</button>
   <h2>{list}</h2>
    <TodoList 
    todos = {todos}
    setTodos = {setTodos}
    list = {list}
    />
    <div>{`${todos.length} left to do`}</div>
      <button onClick={() => setList("Todo")}>Todo</button>
      <button onClick={() => setList("Completed")}>Completed</button>
      <button onClick={() => setList("All")}>All</button>
      
    </>
  )
}
