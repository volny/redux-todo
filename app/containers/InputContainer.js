import React, { Component } from 'react'
import Input from '../components/Input'
import { connect } from 'react-redux'

let nextID = 0

class InputContainer extends Component {
  handleAdd = (input) => {
    this.props.dispatch({
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

//export default connect (
//  state => ({}),
//  dispatch => ({dispatch})
//)(InputContainer)
// default behavior for `connect` is to inject no state, and dispatch
// so there's this shortcut
export default connect()(InputContainer)
