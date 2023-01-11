import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {
  render() {
    return (
      <div>
        Component E contect {this.context}
        <ComponentF/>
      </div>
    )
  }
}

Component.contextType = UserContext

export default ComponentE
