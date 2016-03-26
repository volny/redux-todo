import React, { Component, PropTypes } from 'react'
import FilterLink from '../components/FilterLink'

export default class FilterLinkContainer extends Component {
  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() =>
      this.forceUpdate()
    )
  }
  componentWillUnmout() {
    this.unsubscribe()
  }
  handleVisibility = (e) => {
    e.preventDefault()
    this.context.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: this.props.filter
    })
  }
  render() {
    const { filter, children } = this.props
    const state = this.context.store.getState()
    return (
      <FilterLink
        active={filter === state.visibilityFilter}
        handleVisibility={this.handleVisibility}>
        {children}
      </FilterLink>
    )
  }
}

FilterLinkContainer.contextTypes = {
  store: PropTypes.object
}
