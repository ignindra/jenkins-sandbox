import { constants } from './actions'

export default function counter(state = 0, action) {
  switch (action.type) {
    case constants.INCREMENT:
      return state + 1
    case constants.INCREMENT_IF_ODD:
      return (state % 2 !== 0) ? state + 1 : state
    case constants.DECREMENT:
      return state - 1
    default:
      return state
  }
}
