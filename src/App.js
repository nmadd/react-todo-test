// import React, { Component } from 'react';
var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: ['Test todo', 'Another test'],
      newTodo: ''
    }
  },
  getTodo: function(event) {
    this.setState({newTodo: event.target.value});
  },
  addTodo: function() {
    this.setState({todos: this.state.todos.concat([this.state.newTodo])})
  },
  render: function(){
    return (
      <div>
        <TodoInput handler={this.getTodo}/>
        <AddTodo handler={this.addTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
})

var Todo = React.createClass({
  render: function(){
    return (
      <li>{this.props.todo}</li>
    )
  }
})

var AddTodo = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.handler}>Add a todo!</button>
    )
  }
})

var TodoInput = React.createClass({
  render: function() {
    return (
      <input
        type="text"
        // newTodo={this.state.value}
        onChange={this.props.handler}
      />
    )
  }
})

var TodoList = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.todos.map(function(t){
          return <Todo todo={t} />
        })}
      </ul>
    )
  }
})

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
