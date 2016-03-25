import React, { Component } from 'react'
import FilterLink from '../components/FilterLink'
import { store } from '../app'

export default class FilterLinkContainer extends Component {
  handleVisibility = (e) => {
    e.preventDefault
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: this.props.filter
    })
  }
  render() {
    const state = store.getState

    return (
      <FilterLink
        active={this.props.filter === state.visibilityFilter}
        handleVisibility={this.handleVisibility}>
        {this.props.children}
      </FilterLink>
    )
  }
}


