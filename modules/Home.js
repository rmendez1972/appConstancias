import React, { Component } from "react";
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

//import "./Home.css";

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = { username: 'rafa', password: '' };

		this.handleSubmit = this.handleSubmit.bind(this);

		if (this.state.username == ''){
	        console.log('usuario no autenticado');
	        return (
	          <Redirect to="/login" />
	        );


  		}
	}




  handleSubmit(e) {
    e.preventDefault();
    this.props.userSignin({ username: this.state.username, password: this.state.password });
    this.setState({ username: '', password: '' });
  }


  render() {
    return (

      <div className="Home">
        <div className="lander">
          <h1>Desafío de Código</h1>
          <p>Bievenido a la nueva App de constancia en React y Python-Django</p>
        </div>
      </div>
    );
  }
}