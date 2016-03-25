import React from 'react'

export default ({handleAdd}) => {
  let input
  return (
    <div>
      <input ref={node => input = node}/>
      <button
        onClick={() => handleAdd(input)}>
        Add Todo
      </button>

    </div>
  )
}
