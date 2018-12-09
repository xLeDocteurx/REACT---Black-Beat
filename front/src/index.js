import React from 'react'
import ReactDOM from 'react-dom'

import Redux from 'redux'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import exemple from './redux/reducers/exemple'
import exemple2 from './redux/reducers/exemple2'

// import store from './redux/store'

import './index.css'
import App from './App'

import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter } from "react-router-dom"


let state = combineReducers(exemple, exemple2)

let store = createStore(state)

// store.subscribe(() => console.log(store.getState()))

// store.dispatch({ type: 'INCREMENT' })

// store.dispatch({ type: 'DECREMENT' })

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  , document.getElementById('root'))
registerServiceWorker()
