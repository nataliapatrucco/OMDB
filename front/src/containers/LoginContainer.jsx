import React, { Component } from "react";
import Login from "../components/Login";
import axios from "axios";
import { connect } from "react-redux";
import { fetchUser } from "../store/actions/users";

class LoginContainer extends Component {
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
      axios.post("/api/login", this.state).then(res => {
        if (res.data) {
          this.props.user(res.data);
          this.props.history.push("/favorites");
        } else {
          alert("Mandaste mal las cosas, vieja!");
        }
      });
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
        <Login
          handleEmailInput={this.handleEmailInput}
          handlePasswordInput={this.handlePasswordInput}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  user: user => dispatch(fetchUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
