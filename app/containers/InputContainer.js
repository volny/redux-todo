import React, { Component } from 'react'
import Input from '../components/Input'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


class InputContainer extends Component {
  handleAdd = (input) => {
    if (input.value.trim()) {
      this.props.dispatch(addTodo(input.value))
      input.value = ''
    }
  }
  handleEnterSubmit = (e) => {
    if (e.keyCode === 13) {
      return this.handleAdd(e.target)
    }
  }
  render() {
    return (
      <Input
        onAdd={this.handleAdd}
        onEnterSubmit={this.handleEnterSubmit}/>
    )
  }
}

//export default connect (
//  state => ({}),
//  dispatch => ({dispatch})
//)(InputContainer)
// default behavior for `connect` is to inject no state, and dispatch
// so there's this shortcut
export default connect()(InputContainer)
