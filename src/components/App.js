import React from 'react'
import { Provider } from 'react-redux'
import Home from './Home'
const logo = require('../assets/images/logo.svg')

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider store={this.props.store}>
          <Home />
        </Provider>
      </div>
    )
  }
}

export default App
