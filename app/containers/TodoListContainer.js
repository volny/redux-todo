import React, { Component, PropTypes } from 'react'
import { getVisibleTodos } from '../app'
import TodoList from '../components/TodoList'

export default class TodoListContainer extends Component {
  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() =>
      this.forceUpdate())
  }
  componentWillUnmout() {
    this.unsubscribe()
  }
  handleCompleted = (id) => {
      this.context.store.dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  }
  render() {
    const state = this.context.store.getState()
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

TodoListContainer.contextTypes = {
  store: PropTypes.object
}
