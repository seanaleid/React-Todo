import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            task: ''
        };
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitTask = event => {
        event.preventDefault();
        event.target.reset();
        this.props.addTask(this.state.task);
        
    };

    render() {
        return(
            <form onSubmit={this.submitTask}>
                <input
                    type="text"
                    value={this.task}
                    name="task"
                    onChange={this.handleChanges}
                />
                <button>Add Task</button>
                <button>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;