import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Login from './login'
import Elements from './elements'
export default class logout extends Component {
    changeToLogin(){
        const element=<Login></Login>
       ReactDOM.render(element,document.getElementById("mainContent"))
       const elem=<Elements></Elements>
     ReactDOM.render(elem,document.getElementById("mynavbar"))
   }
    render() {
        return (
            <li className="nav-item">
            <a className="nav-link" onClick={()=>this.changeToLogin()}>
            Logout
            </a>
            </li>         
        )
    }
}
