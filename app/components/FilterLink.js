import React, { Component } from 'react'
import { store } from '../app'

export default class FilterLink extends Component {
  handleVisibility = (e) => {
    e.preventDefault()
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: this.props.filter
    })
  }
  render() {
    if (this.props.filter === this.props.currentFilter) {
      return <span>{this.props.children}</span>
    }
    return (
      <a href='#'
        onClick={this.handleVisibility}>
        {this.props.children}
      </a>
    )
  }
}
