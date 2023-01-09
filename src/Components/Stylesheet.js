import React from 'react'
import './myStyles.css'

function Stylesheet({primary}) {
    let className = primary ? 'primary': '' 
  return (
    <div>
      <h1 className={className}>StyleSheet</h1>

      <h1 className='primary font-xl'>StyleSheet</h1>
    </div>
  )
}

export default Stylesheet
