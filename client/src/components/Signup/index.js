import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import StudForm from "../StudForm";
import InstForm from "../InstForm";
import "./style.css";




class Signup extends Component {

constructor(props) {
			super(props)
				
		this.state = {
			// username: '',
			// password: '',
			confirmPassword: '',
			buttonId: null

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)

		this.setButton = this.setButton.bind(this);
	}
	
	
	setButton(id) {
		this.setState({buttonId: id});
		document.getElementById('header').style.display = 'none';
		document.getElementById('stud').style.display = 'none';
		document.getElementById('inst').style.display = 'none';
		
		
	}
	

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()

		fetch("/getData")
		.then((response) => response.json())
		.then((res) => {console.log(res) });
  
		// get data
	  fetch("/postData", {
		method:'POST',
		headers: {
		  'Accept':'application/json',
		  'Content-Type':'application/json'
		},
		body: JSON.stringify({username:this.state.username,password: this.state.password})
	  })
	  .then((response) => response.json())
	  .then((res) => {console.log(res) });

		
	}
	




render() {
	return (
		<div className="row">

		{this.state.buttonId === 1 && <InstForm />}
		{this.state.buttonId === 2 && <StudForm />}
		{/* {this.state.buttonId !== 1  && this.state.buttonId !== 2 && <Signup />} */}
				<form className="col s12 center-align main">
					<div class="row">
						<div className="col s12"><h4 id="header" className="heading center-align">Sign Up</h4></div>
					</div>	
					<div class="row">
						<div className="col s12 center-align">
						<input id="inst" className={this.state.buttonId === 1? "button1 btn" : 
              			"button1 btn"} onClick={() => this.setButton(1)} value="Instructor" 
               			type="button" ref="button" />

						<input id="stud" className={this.state.buttonId === 2? "button2 btn" : 
						"button2 btn"} onClick={() => this.setButton(2)}  value="Student" 
						ref="button1" type="button" />

						</div>
						</div>
					</form>
				</div>
	)
}
}

export default withRouter(Signup)