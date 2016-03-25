import React from 'react'
import { render } from 'react-dom'
import Main from './containers/Main'
import { store } from './app'

const _render = () => render(
  <Main {...store.getState()}/>,
  document.getElementById('app')
)

store.subscribe(_render)
_render()
