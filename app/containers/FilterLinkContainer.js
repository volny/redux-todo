import React from 'react'
import FilterLink from '../components/FilterLink'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleVisibility: () => {
      dispatch(setVisibilityFilter(props.filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)

//export default class FilterLinkContainer extends Component {
//  componentDidMount() {
//    this.unsubscribe = this.context.store.subscribe(() =>
//      this.forceUpdate()
//    )
//  }
//  componentWillUnmout() {
//    this.unsubscribe()
//  }
//  handleVisibility = (e) => {
//    e.preventDefault()
//    this.context.store.dispatch({
//      type: 'SET_VISIBILITY_FILTER',
//      filter: this.props.filter
//    })
//  }
//  render() {
//    const { filter, children } = this.props
//    const state = this.context.store.getState()
//    return (
//      <FilterLink
//        active={filter === state.visibilityFilter}
//        handleVisibility={this.handleVisibility}>
//        {children}
//      </FilterLink>
//    )
//  }
//}
//
//FilterLinkContainer.contextTypes = {
//  store: PropTypes.object
//}
