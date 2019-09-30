import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Navigation from "./components/TodoComponents/NavBar";
import "./components/TodoComponents/Todo.css"


const toDoData = [];

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
        <Navigation/>
        <div className="header">
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
