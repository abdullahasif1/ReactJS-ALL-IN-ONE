import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  increament(){
    //this.state.count+=1;
    this.setState({
      count: this.state.count+ 1
    }, () => { console.log("Callback value is: ", this.state.count)})
    console.log(this.state.count)
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button type='button' className='btn btn-primary' onClick={()=> this.increament()}>Increament</button>
      </div>
    )
  }
}

export default Counter