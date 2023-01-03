import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("button");
    }
  return (
    <div>
        <h1>Functional-Based Components</h1>
      <button type='button' className='btn btn-primary' onClick={()=> clickHandler()}>Click (arrow function)</button>
      <hr/>
      <button type='button' className='btn btn-primary' onClick={clickHandler}>Click  (function)</button>
      <hr/>
        {/* above two does the same and gives the same result we want the handler to be a function not a function call*/}
      
      
      <button type='button' className='btn btn-primary' onClick={clickHandler()}>Click (function call)</button>
      {/* DONOT DO THIS AS it give a function call */}
    </div>
  )
}

export default FunctionClick
