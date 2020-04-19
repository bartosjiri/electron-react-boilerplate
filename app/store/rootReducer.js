import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { HashHistory } from 'history'
import counter from './counter/counter.reducer'

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    counter
  })
}
