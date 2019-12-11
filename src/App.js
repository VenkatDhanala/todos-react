import React, { Component } from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: ['laundry', 'dishes']
    }
  }

  render() {
    return (
      <main>
        <br />
        <NewTodo  />
        <br />
        <p>Current To Do List: </p>
        <Todos todos={this.state.todos}
        />
      </main>
    );
  }
}

export default App;
