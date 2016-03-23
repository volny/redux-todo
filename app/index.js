import { createStore } from 'redux'

import deepfreeze from 'deep-freeze'
import expect from 'expect'

import React from 'react'
import ReactDOM from 'react-dom'

const toggleTodo = (todo) => {
  // impure
  //todo.completed = !todo.completed
  //return todo
  // `Object.assign` is new in ES6, assign properties onto a target object
  // passing in multiple values overwrites previous ('last one wins')
  //return Object.assign({}, todo, {
  //  completed: !todo.completed
  //})
  // or use ES7 object spread operator
  return {
    ...todo,
    completed: !todo.completed
  }

}

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  }
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  }
  deepfreeze(todoBefore)
  expect(toggleTodo(todoBefore))
    .toEqual(todoAfter)
}

const Comp = () => {
  return (
    <div>hello</div>
  )
}

ReactDOM.render(
  <Comp/>,
  document.getElementById('app')
)

testToggleTodo()
console.log('All tests passed')
