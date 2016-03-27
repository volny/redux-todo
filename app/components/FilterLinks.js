import React from 'react'
import FilterLinkContainer from '../containers/FilterLinkContainer'

export default () => (
  <p>
    Show:
    <FilterLinkContainer
      filter='SHOW_ALL'>
      All
    </FilterLinkContainer>
    <FilterLinkContainer
      filter='SHOW_ACTIVE'>
      Active
    </FilterLinkContainer>
    <FilterLinkContainer
      filter='SHOW_COMPLETED'>
      Completed
    </FilterLinkContainer>
  </p>
)
