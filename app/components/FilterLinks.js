import React from 'react'
import FilterLink from './FilterLink'
import { visibilityFilter } from '../app'

export default ({visibilityFilter, handleVisibility}) => (
  <p>
    Show:
    <FilterLink
      filter='SHOW_ALL'
      currentFilter={visibilityFilter}
      handleVisibility={handleVisibility}>
      All
    </FilterLink>
    <FilterLink
      filter='SHOW_ACTIVE'
      currentFilter={visibilityFilter}
      handleVisibility={handleVisibility}>
      Active
    </FilterLink>
    <FilterLink
      filter='SHOW_COMPLETED'
      currentFilter={visibilityFilter}
      handleVisibility={handleVisibility}>
      Completed
    </FilterLink>
  </p>
)
