import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
   
  render() {
    const {count, increamentCount, name} = this.props
    return (
      
        <button className='btn btn-primary' onClick={increamentCount}>{name} Clicked {count} times</button>
      
    )
  }
}

export default UpdatedComponent(ClickCounter, 10) 