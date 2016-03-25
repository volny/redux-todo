import React from 'react'

const styles = {
  padding: '0 5px',
  display: 'inline'
}

export default ({handleAdd}) => {
  let input
  return (
    <div>
      <input ref={node => input = node}/>
      <div style={styles}>
        <button
          onClick={() => handleAdd(input)}>
          Add Todo
        </button>
      </div>
    </div>
  )
}
