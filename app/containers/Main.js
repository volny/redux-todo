import React, { Component } from 'react'
import AddTodo from '../components/AddTodo'
import FilterLinks from '../components/FilterLinks'
import TodoListContainer from '../containers/TodoListContainer'

export default class Main extends Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <TodoListContainer/>
        <FilterLinks/>
      </div>
    )
  }
}
