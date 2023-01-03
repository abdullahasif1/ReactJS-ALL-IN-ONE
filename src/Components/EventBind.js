import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello"
      }
      // this.clickHandler=this.clickHandler.bind(this) //for 3rd button and conditon
    }
    // clickHandler(){
    //     this.setState({
    //         message: "Goodbye!"
    //     })
    //     console.log(this)
    // }
  
    clickHandler = () => {
      this.setState({
          message: "Goodbye!"
      })
      //console.log(this)
    }

    render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* <button type='button' className='btn btn-primary' onClick={this.clickHandler.bind(this)}>Click (this.click.bind(this))</button> */}
        {/* <hr/> */}
        {/* <button type='button' className='btn btn-primary' onClick={()=>this.clickHandler()}>Click ( ()=  this.clickHandler())</button> */}
        {/* <hr/> */}
        {/* <button type='button' className='btn btn-primary' onClick={this.clickHandler}>Click (binding in constructor) is prefered</button> */}
        <hr/>
        <button type='button' className='btn btn-primary' onClick={this.clickHandler}>Click Most prefered as its new (function created using arrow function)</button>
      </div>
    )
  }
}

export default EventBind
