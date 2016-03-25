import React from 'react'
import { visibilityFilter, getVisibleTodos, store } from '../app'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import FilterLinks from '../components/FilterLinks'

let nextID = 0
const handleAdd = (text) => {
  store.dispatch({
    type: 'ADD_TODO',
    id: nextID++,
    text
  })
}

const handleCompleted = (id) => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id
  })
}

const handleVisibility = (e, filter) => {
  e.preventDefault
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
}

export default ({todos, visibilityFilter}) => (
  <div>
    <AddTodo
      handleAdd={handleAdd}/>
    <TodoList
      visibleTodos={getVisibleTodos(todos, visibilityFilter)}
      handleCompleted={handleCompleted}/>
    <FilterLinks
      visibilityFilter={visibilityFilter}
      handleVisibility={handleVisibility}/>
  </div>
)
