import React from 'react'
import { getVisibleTodos } from '../app'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'

// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCompleted: id => {
      dispatch({type: 'TOGGLE_TODO', id})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

//export default class TodoListContainer extends Component {
//  componentDidMount() {
//    this.unsubscribe = this.context.store.subscribe(() =>
//      this.forceUpdate())
//  }
//  componentWillUnmout() {
//    this.unsubscribe()
//  }
//  handleCompleted = (id) => {
//      this.context.store.dispatch({
//      type: 'TOGGLE_TODO',
//      id
//    })
//  }
//  render() {
//    const state = this.context.store.getState()
//    return (
//      <TodoList
//        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
//        handleCompleted={this.handleCompleted}/>
//    )
//  }
//}
//
//TodoListContainer.contextTypes = {
//  store: PropTypes.object
//}
