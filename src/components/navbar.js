import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Login from './login'
import Register from './register'

 class navbar extends Component {
     changeToRegister(){
        const element=<Register></Register>
        ReactDOM.render(element,document.getElementById("mainContent"))
     }
     changeToLogin(){
         const element=<Login></Login>
        ReactDOM.render(element,document.getElementById("mainContent"))
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand">Djano React Fullstack Project</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
      
    </ul>
    <ul className="navbar-nav " id="mynavbar">
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
    </ul>
  </div>
</nav>
            
        </div>
        )
    }
}
export default navbar;