import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Login from './login'
import axios from 'axios'


export default class register extends Component {
    constructor(){
        super();
        this.state={
            username:'atr',
            email:'atr',
            pwd:'atr',
            
        }
        this.changeHandler=this.changeHandler.bind(this);
        // this.submitForm=this.submitForm.bind(this);
    }

    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
        
    submitForm(){
        fetch('http://127.0.0.1:8000/api',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
              },
        })
        .then(response=>response.json())
       
    }

    backtologin(){
        const element=<Login></Login>
        ReactDOM.render(element,document.getElementById("mainContent"))
        // this.submitForm();
    }
    render() {
        return (
            <div>
                <div>
           <section className="login-block">
  <div className="container">
    <div className="row">
      <div className="col-md-4 login-sec">
        <h2 className="text-center">Register Now</h2>
       
          <div className="form-group">
            <label htmlFor="exampleInputusername1" className="text-uppercase">Username</label>
            <input type="text" className="form-control" placeholder />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
            <input type="text" className="form-control" placeholder />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
            <input type="password" className="form-control" placeholder />
          </div>
          <div className="form-check">
            <button type="submit" className="btn btn-login float-right" onClick={this.backtologin}>Submit</button>            
          </div>
       
        <div className="copy-text">Created by <i className="fa fa-heart" /><a>asbhavsar.com</a></div>
      </div>
      <div className="col-md-8 banner-sec">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="https://cdn.pixabay.com/photo/2016/05/05/11/22/computer-1373684__480.jpg" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <div className="banner-text">
                  <h2>This is Fullstack Project</h2>
                  <p>It is developed using Python Django,ReactJs,Html,CSS,JavaScript with bootstrap as Supporting Style and MySql Database By Antara Bhavsar.</p>
                </div>	
              </div>
            </div>
          
          </div>	   
        </div>
      </div>
    </div>
  </div></section>
        </div>
            </div>
        )
    }
}
