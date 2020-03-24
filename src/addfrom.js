import React ,  { Component } from 'react' ; 

class Addtodo extends Component {
    state = {
        task :'' 
    }
    handleChange = (e) =>  {
        this.setState({
           task :  e.target.value 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault() ;  
        this.props.addTodo(this.state )  ; 
        this.setState ({
            task : ''
        })
    }
    render (){
        return (
            <div> 
            <form onSubmit ={this.handleSubmit}> 
            <label> Add New Todo </label>
            <input value = {this.state.task} type = 'text' onChange = {this.handleChange}  / > 
            </form>
            </div>
        )
    }
}
export default Addtodo ; 