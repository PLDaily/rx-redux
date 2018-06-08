import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import configureStore from './redux'
import './assets/css/index.scss'

const mountNode = document.getElementById('app')

const store = configureStore({
  user: {
    name: 'PLDaily',
    age: 100,
    sex: 'man'
  }
})

ReactDOM.render(<App store={store} />, mountNode)
