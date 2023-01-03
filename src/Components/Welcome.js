// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// export default class Welcome extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

//   render() {
//     return (
//       <div>
//             <h1>Class Component</h1>
//             {this.props.children}
//       </div>
//     )
//   }
// }    

// import React, { Component } from 'react'

// export default class Welcome extends Component {
//   render() {
//     return (
//       <div>Welcome</div>
//     )
//   }
// }


import React, { Component } from 'react'
class Welcome extends Component { 
    render(){
        const {name, heroName, children} = this.props
        //const {state1, state2 } = this.state
        return (
        <div>
             <h1>And im {name} a.k.a {heroName}</h1>
                {children}
        </div>
        )
    }
}
export default Welcome



