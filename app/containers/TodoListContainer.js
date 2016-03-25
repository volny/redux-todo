import React, { Component } from 'react'
import { store, getVisibleTodos } from '../app'
import TodoList from '../components/TodoList'

export default class TodoListContainer extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate())
  }
  componentWillUnmout() {
    this.unsubscribe()
  }
  handleCompleted = (id) => {
    store.dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  }
  render() {
    const state = store.getState()
    return (
      <TodoList
        todos={getVisibleTodos(
          state.todos,
          state.visibilityFilter
        )}
        handleCompleted={this.handleCompleted}/>
    )
  }
}
