import React from 'react'
import Todo from './Todo'

const Todos = (props) =>
  <ol>
    {
      props.todos.map((ele, id) => {
        return <Todo
          key={id}
          todo={ele}
          index={id}
        />
      })
    }
  </ol>

export default Todos
