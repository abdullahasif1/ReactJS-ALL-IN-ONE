import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef= React.createRef()
      this.cbRef = null    //callback ref
      this.setCbRef = element =>{
        this.cbRef = element     
      }
      
    }

    componentDidMount(){
        if(this.cbRef){ // as cbRef directly have access to the node in DOM
            this.cbRef.focus() // thats why we dont use 'current'
        }

        // this.inputRef.current.focus()
        // console.log(this.inputRef.current.value)
    }

    handleClick = () =>{
        alert(this.inputRef.current.value)
        console.log(this.inputRef.current.value)

    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        <input type='text' ref={this.setCbRef}/>
        <button className='btn btn-primary' type='button' onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default RefsDemo