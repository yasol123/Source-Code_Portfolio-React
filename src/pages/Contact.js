import React, { Component } from "react";
import '../components/Contact.css';
import emailjs from 'emailjs-com';
import background1 from '../components/images/0.mp4'

export default class Contact extends Component {
  state={
    name:"",
    lastname:"",
    email:"",
    message:"",
    sent:false
  }
  //handle inputs
  handleName=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  handleLastName=(e)=>{
    this.setState({
      lastname:e.target.value
    })
  }
  handleEmail=(e)=>{
    this.setState({
      email:e.target.value
    })
  }
  handleMessage=(e)=>{
    this.setState({
      message:e.target.value
    })
  }  
  //end of the handle inputs
  formSubmit=(e)=>{
    e.preventDefault();
    let data={
      name:this.state.name,
      lastname:this.state.lastname,
      email:this.state.email,
      message:this.state.message
    }
    emailjs.sendForm('service_go4azii', 'template_80pj4mz', e.target, 'user_NXUDc8GrRQPPSxMgC9Evv')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent!")
          window.location='/';
      }, (error) => {
          console.log(error.text);
          alert("Email Not Sent!")
      }); 
  }
  render(){
    return(
      <div className="container">
        <form onSubmit={this.formSubmit}>
      <div className='singleItem'>
        <label htmlFor='name'>First Name</label>
        <input type="text" name="name" classNam e="name" placeholder="Enter Your First Name.." value={this.state.name} onChange={this.handleName} required/>
      </div>
      <div className='singleItem'>
        <label htmlFor='lastname'>Last Name</label>
        <input type="text" name="name" className="name" placeholder="Enter Your Last Name.." value={this.state.lastname} onChange={this.handleLastName} required/>
      </div>
      <div className='singleItem'>
        <label htmlFor='email'>Email</label>
        <input type="email" name="name" className="name" placeholder="Enter Your Email.." value={this.state.email} onChange={this.handleEmail} required/>
      </div>
      <div className='textArea singleItem'>
        <label htmlFor='message'>Message</label>
        <textarea name="message" id="" cols="30" rows="5" placeholder="Enter Your Message .." value={this.state.message} onChange={this.handleMessage} required/>
      </div>
      {/*End of item*/}
      <div className="btn">
        <button type="submit">Submit</button>
      </div>
      </form>
      </div>
      );
  }
}