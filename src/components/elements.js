import React, { Component } from 'react'

export default class elements extends Component {
    render() {
        return (
          <>
        <li className="nav-item">
       <a className="nav-link" onClick={()=>this.changeToLogin()}>
         Login
       </a>
     </li>
      <li className="nav-item">
      <a className="nav-link"  onClick={()=>this.changeToRegister()}>
       Register
      </a>
    </li>
     </>
        )
    }
}
