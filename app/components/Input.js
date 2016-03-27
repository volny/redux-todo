import React from 'react'

const styles = {
  padding: '0 5px',
  display: 'inline'
}

export default ({onAdd, onEnterSubmit}) => {
  let input
  return (
    <div>
      <input
        onKeyDown={onEnterSubmit}
        ref={node => input = node}/>
      <div style={styles}>
        <button
          onClick={() => onAdd(input)}>
          Add Todo
        </button>
      </div>
    </div>
  )
}
