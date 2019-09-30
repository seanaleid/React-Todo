import React from 'react';
import ReactDOM from "react-dom";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css"




const toDoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Walk The Dog',
    id: 1528817094358,
    completed: false
  },
  {
    task: 'Clean The Car',
    id: 1528817097358,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 constructor() {
   super();
   this.state = {
     task: "Clean",
     todo: toDoData
   };
 }



toggleTask = id => {
  console.log(id);
  this.setState({
    todo: this.state.todo.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    })
  });
};

addTask = taskName => {
  const newTask = {
    name: taskName,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todo: [...this.state.todo, newTask]
  });
};

clearCompleted = () => {
  this.setState({
    todo: this.state.todo.filter(task =>
      !task.completed)
  });
};

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
