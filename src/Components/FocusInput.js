import React, { Component } from 'react'
import Input from './Input'

 class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }

    handleClick=()=>{
        this.componentRef.current.focusInput()
    }
    
  render() {
    return (
        <div>
            <Input ref={this.componentRef}/>
            <button className='btn btn-primary' onClick={this.handleClick}>Focus Button</button>
        </div>
    )
  }
}

export default FocusInput