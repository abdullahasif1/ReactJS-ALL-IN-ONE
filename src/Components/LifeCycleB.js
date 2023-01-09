import React, { Component } from 'react'


class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Abdullah'
      }
      console.log("LifeCycle B constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycle B getDerivedSatteFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycle B componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifeCycle B shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycle B getSnapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate(){
        console.log("LifeCycle B componentDidUpdate")

    }
    
    render() {
        console.log("LifeCycle B render")

    return (
      <div>
        <div>LifeCycleB</div>
      </div>
    )
  }
}

export default LifeCycleB