import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./components/TodoApp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      todos: [
      ],
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.toggleFinish = this.toggleFinish.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  addNewTodo(str) {
    if (str == "") return;
    let {todos} = this.state;
    this.setState({
      todos: [
        ...todos,
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          content: str,
          isDone: false,
        },
      ],
      modal: false,
    });
  }

  toggleFinish(item) {
    return (e) => {
      let { todos } = this.state;
      let index = todos.indexOf(item);
      this.setState({
        todos: [
          ...todos.slice(0, index),
          {
            ...item,
            isDone: !item.isDone,
          },
          ...todos.slice(index + 1),
        ],
      });
    };
  }

  render() {
    return (
      <div className="App">
        <TodoApp
          todos={this.state.todos}
          modal={this.state.modal}
          addNewTodo={this.addNewTodo}
          toggleModal={this.toggleModal}
          toggleFinish={this.toggleFinish}
        />
      </div>
    );
  }
}

export default App;
