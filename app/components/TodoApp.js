import React from 'react'
import { visibilityFilter, getVisibleTodos, store } from '../app'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import FilterLinks from './FilterLinks'

let nextID = 0
const handleAdd = (input) => {
  store.dispatch({
    type: 'ADD_TODO',
    text: input.value,
    id: nextID++
  })
  input.value = ''
}

const handleCompleted = (id) => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id
  })
}

export default ({todos, visibilityFilter}) => {
  const visibleTodos = getVisibleTodos(todos, visibilityFilter)
  return (
    <div>
      <AddTodo
        handleAdd={handleAdd}/>
      <TodoList
        visibleTodos={visibleTodos}
        handleCompleted={handleCompleted}/>
      <FilterLinks
        visibilityFilter={visibilityFilter}/>
    </div>
  )
}
