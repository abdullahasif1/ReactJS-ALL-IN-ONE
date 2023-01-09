import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: ' ',
         comment: '',
         topic: 'react'

      }
    }

    handleUsername= (event)=>{
        this.setState({
            username: event.target.value,
        })
    }
    handleComments= (event)=>{
        this.setState({
            comment: event.target.value,
        })
    }
    handleTopic= (event)=>{
        this.setState({
            topic: event.target.value,
        })
    }

    handleSubmit = (event) => {
        alert(`Username is : ${this.state.username} & text: ${this.state.comment} and topic: ${this.state.topic}`)
        event.preventDefault();
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={this.handleUsername}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comment} onChange={this.handleComments}/>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopic}>
                <option value="react">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>
        <div>
            <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default Form
