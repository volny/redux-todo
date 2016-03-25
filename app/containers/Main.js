import React, { Component } from 'react'
import { getVisibleTodos, store } from '../app'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import FilterLinks from '../components/FilterLinks'

let nextID = 0

export default class Main extends Component {
  handleAdd = (text) => {
    store.dispatch({
      type: 'ADD_TODO',
      id: nextID++,
      text
    })
  }
  handleCompleted = (id) => {
    store.dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  }
  render() {
    return (
      <div>
        <AddTodo
          handleAdd={this.handleAdd}/>
        <TodoList
          visibleTodos={getVisibleTodos(this.props.todos, this.props.visibilityFilter)}
          handleCompleted={this.handleCompleted}/>
        <FilterLinks/>
      </div>
    )
  }
}
