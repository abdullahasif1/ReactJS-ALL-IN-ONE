import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Parent"
      }
      this.greetParent=this.greetParent.bind(this)
      this.greetParentWithPara=this.greetParentWithPara.bind(this)
    }


    greetParent (){
        alert(`Hello ${this.state.parentName}`)
    }
    greetParentWithPara (childNamme){
        alert(`Hello ${this.state.parentName} from ${childNamme}`)
    }
    render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} greetHandlerPara={this.greetParentWithPara}/>
      </div>
    )
  }
}

export default ParentComponent
