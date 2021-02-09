import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';


const todos = [];

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos: todos
    }
  }

  handleTaskToggle = (taskId)=> {
    this.setState({
      todos: this.state.todos.map(task=>{
        if(task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return(task);
      })
    });
  }

  handleTaskAdd = (taskName) => {
    const task = {
      name: taskName,
      id: Date.now(),
      purchased: false
    };

    const newTodos = [...this.state.todos, task];

    this.setState({
      todos: newTodos
    });
  }

  handleTaskCompleted = () => {
    const newTodos = this.state.todos.filter(task => {
      return(!task.purchased);
    });

    this.setState({
      groceries: newTodos
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h1>Todo-List App</h1>
        <TodoForm handleTaskAdd={this.handleTaskAdd} />
        <TodoList todos={this.state.todos} handleTaskCompleted={this.handleTaskCompleted} handleTaskToggle={this.handleTaskToggle} />
      </div>
    );
  }
}

export default App;
