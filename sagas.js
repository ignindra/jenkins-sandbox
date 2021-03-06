import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

import * as action from './actions'

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put(action.incrementVal())
}

export function* watchIncrementAsync() {
  yield takeEvery(action.constants.INCREMENT_ASYNC, incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}
