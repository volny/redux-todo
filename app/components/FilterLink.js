import React from 'react'
import { store } from '../app'

const styles = {
  padding: '0 3px'
}

export default ({active, handleVisibility, children}) => {
  if (active) {
    return <span style={styles}>{children}</span>
  }
  return (
    <a href="#"
      onClick={e => handleVisibility(e)}
      style={styles}>
      {children}
    </a>
  )
}
