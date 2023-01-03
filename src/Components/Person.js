import React from 'react'

function Person({person}) {
  return (
    <div>
      <h1>I am {person.name}. I amd a {person.skill} Developer.</h1>
    </div>
  )
}

export default Person
