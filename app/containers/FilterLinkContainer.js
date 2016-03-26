import React, { Component } from 'react'
import FilterLink from '../components/FilterLink'

export default class FilterLinkContainer extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.forceUpdate()
    )
  }
  componentWillUnmout() {
    this.unsubscribe()
  }
  handleVisibility = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: this.props.filter
    })
  }
  render() {
    const { store, filter, children } = this.props
    const state = store.getState()
    return (
      <FilterLink
        active={filter === state.visibilityFilter}
        handleVisibility={this.handleVisibility}>
        {children}
      </FilterLink>
    )
  }
}


