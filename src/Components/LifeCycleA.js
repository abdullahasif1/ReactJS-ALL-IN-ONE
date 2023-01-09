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
    
    shouldComponentUpdate(){
        console.log("LifeCycle A shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycle A getSnapshotBeforeUpdate")
        return null;

    }
    componentDidUpdate(){
        console.log("LifeCycle A componentDidUpdate")

    }

    changeState = () =>{
        this.setState({
            name: 'Codevolution'
        })
    }
    render() {
        console.log("LifeCycle A render")

    return (
      <div>
        <div>LifeCycleA</div>
        <button className='btn btn-primary' onClick={this.changeState}>Change state</button>
        <div><LifeCycleB/></div>
      </div>
    )
  }
}

export default LifeCycleA
