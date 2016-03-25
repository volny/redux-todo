import React from 'react'

let nextID = 0

const styles = {
  padding: '0 5px',
  display: 'inline'
}

export default ({handleAdd, onEnterSubmit}) => {
  let input
  return (
    <div>
      <input
        onKeyDown={onEnterSubmit}
        ref={node => input = node}/>
      <div style={styles}>
        <button
          onClick={() => handleAdd(input)}
          className='pure-button'>
          Add Todo
        </button>
      </div>
    </div>
  )
}
