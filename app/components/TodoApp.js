import React, { Component } from 'react'
import { visibilityFilter, getVisibleTodos, store } from '../app'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import FilterLinks from './FilterLinks'

// TODO this should probably be in the component state
let _ID = 0

export default class TodoApp extends Component {
  handleAdd = (input) => {
    store.dispatch({
     type: 'ADD_TODO',
     text: input.value,
     id: _ID++
    })
    input.value = ''
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
        <AddTodo
          handleAdd={this.handleAdd}/>
        <TodoList
          visibleTodos={visibleTodos}
          handleCompleted={this.handleCompleted}/>
        <FilterLinks/>
      </div>
    )
  }
}
