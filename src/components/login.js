import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Result from './result'
import axios from 'axios'
import Logout from './logout'
const user=axios.create({
    baseURL:`http://127.0.0.1:8000/api/`
})
export default class login extends Component {
   
    constructor(){
        super();
        this.name=''
        this.pwd=''
        this.state={
            dataS:[],
            username:'durlaab',
            pwd:'kite'
        }
        user.get('/').then(res=>{
            this.setState({dataS:res.data})
            
        })
      
    }
    handleusernameChange=(e)=> {
        this.setState({username:e.target.value});
     }
     handlepwdChange=(e)=> {
        this.setState({pwd:e.target.value});
     }
    changeToResult=()=>{
        console.log("UserName: " + this.state.username);
        console.log("Password: " + this.state.pwd);
            for(let i=0;i<this.state.dataS.length;i++)
            if(this.state.dataS[i].username===this.state.username){
                if(this.state.dataS[i].pwd===this.state.pwd){
                    console.log('loop'+this.state.dataS[i].username)
                    const element=<Result></Result>
                     ReactDOM.render(element,document.getElementById("mainContent"))     
                     const elem=<Logout></Logout>
                     ReactDOM.render(elem,document.getElementById("mynavbar"))
                                 break;
                }
                else{
                    alert("Invalid PassWord Given !!")
                }
            }      
        
     }
    
    render() {
        return (
            <div>                
<section className="login-block">
  <div className="container">
    <div className="row">
      <div className="col-md-4 login-sec">
        <h2 className="text-center">Login Now</h2>
        {/* <form className="login-form"> */}
          <div className="form-group">
            <label htmlFor="exampleInputusername1" className="text-uppercase">Username</label>
            <input type="text" className="form-control" value={this.state.uaername}  onChange={this.handleusernameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputpwd1" className="text-uppercase">Password</label>
            <input type="password" className="form-control" name="pwd"  onChange={this.handlepwdChange} />
          </div>
          <div className="form-check">
            <button type="submit" className="btn btn-login float-right" onClick={()=>this.changeToResult()}>Submit</button>            
          </div>
        {/* </form> */}
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
        )
    }
}

