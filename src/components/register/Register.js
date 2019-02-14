import React, { Component } from "react";
import "./Register.css";

export default class Register extends Component {
  render() {
    return (
      <form class="form-register">
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        <label for="username" class="sr-only">
          Username
        </label>
        <input
          type="text"
          id="username"
          class="form-control"
          placeholder="Username"
          required
          autofocus
        />
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
        <label for="password2" class="sr-only">
          Confirm Password
        </label>
        <input
          type="password"
          id="password2"
          class="form-control"
          placeholder="Confirm Password"
          required
        />
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
      </form>
    );
  }
}
