import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Abdullah'
      }
      console.log("LifeCycle A constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycle A getDerivedSatteFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycle A componentDidMount")
    }
    
    render() {
        console.log("LifeCycle A render")

    return (
      <div>
        <div>LifeCycleA</div>
        <div><LifeCycleB/></div>
      </div>
    )
  }
}

export default LifeCycleA
