import React, { Component } from 'react'

export default class element2 extends Component {
    render() {
        return (
            <li className="nav-item">
            <a className="nav-link"  onClick={()=>this.changeToRegister()}>
             Register
            </a>
          </li>
        )
    }
}
