import React, { Component } from 'react'
import { render } from 'react-dom'
import TodoApp from './components/TodoApp'
import { store } from './app'

const _render = () => render(
  <TodoApp {...store.getState()}/>,
  document.getElementById('app')
)

store.subscribe(_render)
_render()
