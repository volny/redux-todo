import React, { Component } from 'react'
import { store } from '../app'
import Input from '../components/Input'

let nextID = 0

export default class InputContainer extends Component {
  handleAdd = (input) => {
    store.dispatch({
      type: 'ADD_TODO',
      id: nextID++,
      text: input.value
    })
    input.value = ''
  }
  handleEnterSubmit = (e) => {
    if (e.keyCode === 13) {
      return this.handleAdd(e.target)
    }
  }
  render() {
    return (
      <Input
        handleAdd={this.handleAdd}
        onEnterSubmit={this.handleEnterSubmit}/>
    )
  }
}
