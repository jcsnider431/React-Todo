import React from 'react';
import TodoList from './components/TodoList';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "orginize garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "bake Cookies",
          id: 1528817084358,
          completed: false,

        },
        ],
    };
  }
  addTodo = (taskName) => {
    const newTodo ={
      task:taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos: [... this.state.todos, newTodo]
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
