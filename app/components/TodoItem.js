import React from 'react'

export default ({handleCompleted, completed, text, id}) => (
  <li
    onClick={() => handleCompleted(id)}
    style={{textDecoration: completed
      ? 'line-through'
      : 'none'}}>
    {text}
  </li>
)
