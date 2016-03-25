import React from 'react'
import TodoItem from './TodoItem'

export default ({todos, handleCompleted}) => (
  <ul>
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        handleCompleted={handleCompleted}
        {...todo}/>
      )
    }
  </ul>
)
