import React from 'react'

const styles = {
  padding: '0 3px'
}

export default ({active, handleVisibility, children}) => {
  if (active) {
    return <span style={styles}>{children}</span>
  }
  return (
    <a href="#"
      onClick={() => handleVisibility()}
      style={styles}>
      {children}
    </a>
  )
}
