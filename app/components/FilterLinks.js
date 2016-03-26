import React from 'react'
import FilterLinkContainer from '../containers/FilterLinkContainer'
import { visibilityFilter } from '../app'

export default ({store}) => (
  <p>
    Show:
    <FilterLinkContainer
      filter='SHOW_ALL'
      store={store}>
      All
    </FilterLinkContainer>
    <FilterLinkContainer
      filter='SHOW_ACTIVE'
      store={store}>
      Active
    </FilterLinkContainer>
    <FilterLinkContainer
      filter='SHOW_COMPLETED'
      store={store}>
      Completed
    </FilterLinkContainer>
  </p>
)
