import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import './App.css'
import Timer from './components/Timer'

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld text="Hello World" />
        <Timer />
      </div>
    )
  }
}

export default App
