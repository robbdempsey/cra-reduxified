import React, { Component } from 'react'
import logo from './logo.svg'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          reduxified
        </p>
      </div>
    )
  }
}

export default App
