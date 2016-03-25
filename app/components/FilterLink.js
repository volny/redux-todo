import React from 'react'
import { store } from '../app'

const styles = {
  padding: '0 3px'
}

const handleVisibility = (e, filter) => {
  e.preventDefault
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
}

export default ({filter, currentFilter, children}) => {
  if (filter === currentFilter) {
    return <span style={styles}>{children}</span>
  }
  return (
    <a href="#"
      onClick={e => handleVisibility(e, filter)}
      style={styles}>
      {children}
    </a>
  )
}
