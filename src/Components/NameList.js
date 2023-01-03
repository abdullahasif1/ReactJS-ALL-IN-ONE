import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Nimra', 'Maha', 'Zoha'] 
    
    // Just another way to render list
    const personData = [
    {
        id: 1,
        name: 'Nimra',
        skill: 'React'
    },
    {
        id: 2,
        name: 'Maha',
        skill: 'Angular'
    },
    {
        id: 3,
        name: 'Zoha',
        skill: 'Vue'
    }
    ]
    const anotherNameList = personData.map(person=> <Person person={person} key ={person.id}/>)
    return <div>{anotherNameList}</div>

    // ANOTHER WAY
    // const namesList = names.map(name=> <h1>{name}</h1>)
    // return <div>{namesList}</div>

//   return (
//     <div>
//       {/* <h2>{names[0]}</h2>
//       <h2>{names[1]}</h2>
//       <h2>{names[2]}</h2> */}


//       {names.map(name=> <h1>{name}</h1>)}
//     </div>
//   )
}

export default NameList
