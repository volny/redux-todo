import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import deepfreeze from 'deep-freeze'
import expect from 'expect'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

const toggleTodo = (todo) => {
  // `Object.assign` is new in ES6, assign properties onto a target object
  // passing in multiple values overwrites previous ('last one wins')
  //return Object.assign({}, todo, {completed: !todo.completed})
  // or use ES7 object spread operator
  return {
    ...todo,
    completed: !todo.completed
  }
}

////////// TESTS

const testAddTodo = () => {
  const stateBefore = []
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ]

  deepfreeze(stateBefore)
  deepfreeze(action)

  expect(todos(stateBefore, action))
    .toEqual(stateAfter)
}

const testToggleTodo = () => {
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  }
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false
    }
  ]
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true
    }
  ]

  deepfreeze(stateBefore)
  deepfreeze(action)

  expect(todos(stateBefore, action))
    .toEqual(stateAfter)
}

testAddTodo()
testToggleTodo()
console.log('All tests passed')

//////////REDUX

const store = createStore(todos)

store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
})

store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0
})

console.log(store.getState())

//////////REACT

const Comp = () => {
  return (
    <div>hello</div>
  )
}

ReactDOM.render(
  <Comp/>,
  document.getElementById('app')
)
