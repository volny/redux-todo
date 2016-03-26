import React, { Component } from 'react'
import { getVisibleTodos } from '../app'
import TodoList from '../components/TodoList'

export default class TodoListContainer extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.forceUpdate())
  }
  componentWillUnmout() {
    this.unsubscribe()
  }
  handleCompleted = (id) => {
    this.props.store.dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  }
  render() {
    const state = this.props.store.getState()
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
