import React from 'react'

function Columns() {
  const items = []
  return (
    // This or the below this one
    // <>    
    //   <td>Abdullah</td>
    //   <td>Asif</td>
    // </>

  <React.Fragment>
      { 
        items.map(item => (
        // Without the `key`, React will fire a key warning
          <React.Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
           </React.Fragment>
      ))}
      <td>Abdullah</td>
      <td>Asif</td>
  </React.Fragment>




    //This creates an error
    // <div>
    //   <td>Abdullah</td>
    //   <td>Asif</td>
    // </div>
  )
}

export default Columns
