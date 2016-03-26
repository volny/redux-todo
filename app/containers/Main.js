import React, { Component } from 'react'
import InputContainer from '../containers/InputContainer'
import FilterLinks from '../components/FilterLinks'
import TodoListContainer from '../containers/TodoListContainer'

export default class Main extends Component {
  render() {
    const { store } = this.props
    return (
      <div>
        <InputContainer store={store}/>
        <TodoListContainer store={store}/>
        <FilterLinks store={store}/>
      </div>
    )
  }
}
