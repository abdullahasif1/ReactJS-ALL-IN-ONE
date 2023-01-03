import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    // USING SHORT CIRCUIT OPERATOR
    return this.state.isLoggedIn && <div>Welcome Alexa</div>



    // USING TERNARY CONDITIONAL OPERATOR
    // return this.state.isLoggedIn ?(
    //     <div>Welcome Alexa</div> 
    // ):(
    //     <div>Alexa not welcomed</div> 
    // )
    
    
    
    // USING ELEMENT VARIABLE
    // let message  
    // if(this.state.isLoggedIn){
    //     message =  <div>Welcome Alexa</div>
    // }else{
    //     message = <div>Alexa not welcomed</div>
    // }
    // return<div>{message}</div>



    // USING IF/ELSE STATEMENT
    // if(this.state.isLoggedIn){
    //     return <div>Welcome Alexa</div>
    // }else{
    //     return <div>Alexa not welcomed</div>
    // }



    // return (
    //     <div>
    //         <div>Welcome Alexa</div>
    //         <div>Alexa not welcomed</div>
    //     </div>
    // )
  }
}

export default UserGreeting
