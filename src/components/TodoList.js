import React, { Component } from 'react'

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.items = this.props.items
  }
  render() {
    return (
      <ul>
        {this.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}

export default TodoApp
