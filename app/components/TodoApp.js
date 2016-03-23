import React, { Component } from 'react'
import FilterLink from './FilterLink'
import { visibilityFilter, getVisibleTodos, store } from '../app'

// TODO this should probably be in the component state
let _ID = 0

export default class TodoApp extends Component {
  handleAdd = () => {
    store.dispatch({
     type: 'ADD_TODO',
     text: this.input.value,
     id: _ID++
    })
    this.input.value = ''
  }
  handleCompleted = (id) => {
    store.dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  }
  render() {
    const {todos, visibilityFilter} = this.props
    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    )
    return (
      <div>
        <input ref={node => {
          this.input = node
        }}/>
        {' '}
        <button onClick={this.handleAdd}>
          Add Todo
        </button>
        <ul>
          {visibleTodos.map(todo =>
            <li
              key={todo.id}
              onClick={this.handleCompleted.bind(null, todo.id)}
              style={{textDecoration: todo.completed
                ? 'line-through'
                : 'none'}}>
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show:
          {' '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}>
            All
          </FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}>
            Active
          </FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_COMPLETED'
            currentFilter={visibilityFilter}>
            Completed
          </FilterLink>
        </p>
      </div>
    )
  }
}
