import React, { Component } from 'react';
import Todos from './todos' ; 
import Addtodo from './addfrom' ; 
 


class App extends Component {
  state =  {
    todos : [
      {id : 1 ,  task : 'Buy some milk'},
      {id : 2 ,  task : 'clean my room'   },
      {id : 3 ,  task : 'coock a meal'}
    ]
  }
  deleteTodo = (id)  => { 
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id 
    });
    this.setState({
      todos : todos
    })
  } 
  addTodo = (todo) => {
    todo.id = Math.random() 
    let todos = [...this.state.todos, todo] 
    this.setState({
      todos
    })
  }
  reset = (e) => {
    this.state.todos.length = 0 
    let todos = this.state.todos 
    this.setState ({
      
      todos 
    })
    
  
      }
 
 
render () {
  return(
    <div className = "todo-app container"> 
    <h1 className = "center blue-text"> Todo's </h1>
    <Todos deleteTodo = {this.deleteTodo} todos = {this.state.todos}/>
    <Addtodo addTodo ={this.addTodo} / > 
    <button onClick = {this.reset}> Reset </button>
    </div>
  );
  }
}
  

export default App;
