import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('esto es despues de renderizar la vista' );
  }

  componentWillUnmount() {

  }

  validateForm() {
    //return this.state.email.length > 0 && this.state.password.length > 0;
    return true;
  }

  handleSubmit(e) {
    console.log('dentro de handleSubmit');
    e.preventDefault();
  }

  handleChange(e) {
    console.log('dentro de handleChange');
    this.setState(state => ({
      email: e.target.value
    }));
    console.log ('hasta aqui no hay problem dentro de handleChange ');
  }



  render() {

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}