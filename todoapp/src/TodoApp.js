import React, { Component } from 'react';
import TodoInput from './TodoInput'
import CompletionToggle from './CompletionToggle'
import TodoList from './TodoList'

class TodoApp extends Component {
  state = {
    todos: [],
    inputText: '',
    showCompleted: false
  }

  onChange = (e) => {
    this.setState({ inputText: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.inputText === '') return
    const newTodoItem = {
      id: Date.now(),
      text: this.state.inputText,
      isDone: false
    }
    this.setState({
      todos: [...this.state.todos, newTodoItem],
      inputText: ''
    })
  }

  onClickCompletionToggle = () => {
    this.setState({ showCompleted: !this.state.showCompleted })
  }

  onClickTodoListItem = (id) => () => {
    this.setState({ todos: this.state.todos.map(todo => todo.id !== id ? todo : {...todo, isDone: !todo.isDone}) })
  }

  render() {
    return (
      <div>
        <TodoInput
          text={this.state.inputText}
          onChange={this.onChange}
          onSubmit={this.onSubmit} />
        <br />
        <CompletionToggle onClick={this.onClickCompletionToggle} />
        <TodoList onClick={this.onClickTodoListItem} list={this.state.todos.filter(todo => !this.state.showCompleted || todo.isDone)}/>
      </div>
    )
  }
}

export default TodoApp;
