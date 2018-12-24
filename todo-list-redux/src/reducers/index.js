import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import numTimes from './numTimes';

export default combineReducers({
  todos,
  visibilityFilter,
  numTimes
})