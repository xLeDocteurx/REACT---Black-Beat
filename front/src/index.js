import React from 'react'
import ReactDOM from 'react-dom'

// import Redux from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './redux/reducers/index'

import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter } from "react-router-dom"

import './index.css'
import App from './App'



const store = createStore(reducers)

store.subscribe(() => console.log(store.getState()))

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
