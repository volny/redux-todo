import React from 'react'
import { store } from '../app'

let nextID = 0

const styles = {
  padding: '0 5px',
  display: 'inline'
}

const handleAdd = (text) => {
  store.dispatch({
    type: 'ADD_TODO',
    id: nextID++,
    text
  })
}

export default () => {
  let input
  return (
    <div>
      <input ref={node => input = node}/>
      <div style={styles}>
        <button
          onClick={() => {
            handleAdd(input.value)
            input.value = ''}}
          className='pure-button'>
          Add Todo
        </button>
      </div>
    </div>
  )
}
