import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { todoApp } from './app'
import Main from './containers/Main'

render(
  <Provider store={createStore(todoApp)}>
    <Main/>
  </Provider>,
  document.getElementById('app')
)
