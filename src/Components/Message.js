import React, { Component } from 'react'


class Message extends Component{ 
    constructor(){
        super()
        this.state ={
            message: "Welcome Baby"
        }
    }

    changeMsg(){
        this.setState({
            message: "Thank you for Subscribing"
        })
    }
    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>  
            <button type='button' className='btn btn-primary' onClick={()=> this.changeMsg()}>Subscribe</button>  
        </div>
        )
    }
}
export default Message