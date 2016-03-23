import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
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

const todos = (state=[], action) => {
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
  return {
    ...todo,
    completed: !todo.completed
  }
}

const visibilityFilter = (state='SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

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

const store = createStore(todoApp)

//store.dispatch({
//  type: 'ADD_TODO',
//  id: 0,
//  text: 'Learn Redux'
//})
//
//store.dispatch({
//  type: 'TOGGLE_TODO',
//  id: 0
//})
//
//store.dispatch({
//  type: 'SET_VISIBILITY_FILTER',
//  filter: 'SHOW_COMPLETED'
//})

console.log(store.getState())

//////////REACT

let _ID = 0

class TodoApp extends Component {
  handleAdd = () => {
    store.dispatch({
     type: 'ADD_TODO',
     text: this.input.value,
     id: _ID++
    })
    this.input.value = ''
  }
  render() {
    return (
      <div>
        <input ref={node => {
          this.input = node
        }}/>
        <button onClick={this.handleAdd}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const render = () => ReactDOM.render(
  <TodoApp todos={store.getState().todos}/>,
  document.getElementById('app')
)

store.subscribe(render)
render()
