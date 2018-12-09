import { createStore } from 'redux'

let initialState = 2

function state(initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return initialState + 1
    case 'DECREMENT':
      return initialState + 1
    default:
      return initialState
  }
}

let exemple2 = createStore(state)

export default exemple2