import React from 'react'

function ChildComponent({greetHandler, greetHandlerPara}) {
  return (
    <div>
      <button type='button' className='btn btn-primary' onClick={greetHandler}>Greet Parent(without parameter)</button>
      <hr/>
      <button type='button' className='btn btn-primary' onClick={()=>greetHandlerPara('child')}>Greet Parent(with Parameter)</button>
    </div>
  )
}

export default ChildComponent
