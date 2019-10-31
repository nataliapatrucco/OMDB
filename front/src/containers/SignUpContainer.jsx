import React, { Component } from "react";
import SignUp from "../components/SignUp";
import axios from "axios";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      axios.post("/api/signup", this.state);
      return this.props.history.push("/login");
    }
  }
  handleEmailInput(email) {
    this.setState({ email });
  }
  handlePasswordInput(password) {
    this.setState({ password });
  }

  render() {
    return (
      <div>
        <SignUp
          handleEmailInput={this.handleEmailInput}
          handlePasswordInput={this.handlePasswordInput}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default SignUpContainer;
