import React, { Component } from 'react'

class ClickCounter2 extends Component {
  render() {
    const {count, increamentCount} = this.props
    return (
      
        <button className='btn btn-primary' onClick={increamentCount}>Clicked {count} times</button>
      
    )
  }
}

export default ClickCounter2
