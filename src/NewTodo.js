import React, { Component } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodo: ''
    }
  }

  render() {
    return (
      <form  >
        <input 
          type="text"
          name="todoText"/>
        <input type="submit" disabled={!this.state.newTodo}/>
      </form>
    )
  }
}

export default NewTodo
