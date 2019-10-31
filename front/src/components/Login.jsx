import React from "react";

export default function Login(props) {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <form onSubmit={props.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              onChange={event => props.handleEmailInput(event.target.value)}
              placeholder="mail@email.com"
              type="text"
              name="username"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              onChange={event => props.handlePasswordInput(event.target.value)}
              type="password"
              name="password"
            />
          </div>
          <div>
            <input type="submit" value="Log in" />
          </div>
        </form>
      </div>
    </div>
  );
}
