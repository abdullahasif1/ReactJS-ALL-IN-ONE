import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("button clicked in class")
    }
  render() {

    return (
      <div>
        <h1>Class-Based Components</h1>
        <button type='button' className='btn btn-primary' onClick={()=> this.clickHandler()}>Click (arrow function)</button>
        <hr/>
        <button type='button' className='btn btn-primary' onClick={this.clickHandler}>Click  (function)</button>
        <hr/>
        {/* above two does the same and gives the same result we want the handler to be a function not a function call*/}
      
      
        <button type='button' className='btn btn-primary' onClick={this.clickHandler()}>Click (function call)</button>
        {/* DONOT DO THIS AS it give a function call */}
      </div>
    )
  }
}

export default ClassClick
