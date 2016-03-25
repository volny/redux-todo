import React from 'react'
import { store } from '../app'

const styles = {
  padding: '0 3px'
}

export default ({filter, currentFilter, handleVisibility, children}) => {
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
