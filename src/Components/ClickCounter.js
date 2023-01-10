import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
   
  render() {
    const {count, increamentCount} = this.props
    return (
      
        <button className='btn btn-primary' onClick={increamentCount}>Clicked {count} times</button>
      
    )
  }
}

export default UpdatedComponent(ClickCounter) 