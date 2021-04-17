import { all } from 'redux-saga/effects'

import cart from './cart/sagas'

// o asterisco é como se fosse o async = generators
export default function* rootSaga() {
  yield all([cart])
}
