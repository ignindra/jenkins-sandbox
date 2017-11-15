import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas'
import * as action from './actions'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const pressed = func => store.dispatch(func)

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => pressed(action.incrementVal())}
      onDecrement={() => pressed(action.decrementVal())}
      onIncrementAsync={() => pressed(action.incrementAsyncVal())}/>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)