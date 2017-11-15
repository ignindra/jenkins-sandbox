export const constants = {
  INCREMENT: 'INCREMENT',
  INCREMENT_IF_ODD: 'INCREMENT_IF_ODD',
  DECREMENT: 'DECREMENT',
  INCREMENT_ASYNC: 'INCREMENT_ASYNC'
}

export const incrementVal = function() {
  return {
    type: constants.INCREMENT,
    payload: null
  }
}

export const decrementVal = function() {
  return {
    type: constants.DECREMENT,
    payload: null
  }
}

export const incrementAsyncVal = function() {
  return {
    type: constants.INCREMENT_ASYNC,
    payload: null
  }
}