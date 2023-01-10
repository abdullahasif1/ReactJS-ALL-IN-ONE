import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

 class HoverCounter extends Component {
   
  render() {
    const {count, increamentCount} = this.props
    return (
      <h2 onMouseOver={increamentCount}> Hovered {count} times</h2>
    )
  }
}

export default UpdatedComponent(HoverCounter, 5)
