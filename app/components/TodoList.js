import React from 'react'
import TodoItem from './TodoItem'

export default ({visibleTodos, handleCompleted}) => (
  <ul>
    {visibleTodos.map(todo =>
      <TodoItem
        key={todo.id}
        handleCompleted={handleCompleted}
        {...todo}/>
    )}
  </ul>
)
