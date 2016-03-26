import React from 'react'
import { render } from 'react-dom'
import Main from './containers/Main'
import { createStore } from 'redux'
import { todoApp } from './app'


render(
  <Main store={createStore(todoApp)}/>,
  document.getElementById('app')
)
