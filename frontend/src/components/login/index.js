import React, { useState } from "react";
import { onLogin } from "../../action-reducer/login/loginActions";
import "./style.css";

function Login() {
  const [credentials, updateCredentials] = useState({});
  const [currentFocusedField, updateCurrentFocused] = useState("");
  const [loginStatus, updateLoginStatus] = useState({
    state: "",
    message: "",
  });
 
  function handleFocus(ev) {
    updateCurrentFocused(ev.target.id);
    updateCredentials({
      ...credentials,
      [ev.target.id]: credentials[ev.target.id] || "",
    });
  }

  function handleBlur(ev) {
    updateCurrentFocused("");
  }

  function handleChange(ev) {
    updateCredentials({
      ...credentials,
      [ev.target.id]: ev.target.value,
    });
  }


  function onLoginSuccess() {
    updateLoginStatus({
      state: "success",
      message:
        "Logged in successfully. Please wait while we redirect you to your account.",
    });
    window.location.reload();
  }

  function onLoginFailed(exception) {
    updateLoginStatus({
      state: "error",
      message: exception.message,
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!loginStatus.state) {
      // To-do: Register Validations here

      updateLoginStatus({
        state: "loading",
        message: "Logging in. Please wait...",
      });
      onLogin(credentials, onLoginSuccess, onLoginFailed);
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="username" class="sr-only">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="form-control"
          required
          value={credentials.username || ""}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autofocus
        />

        <label for="password" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="form-control"
          value={credentials.username || ""}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />

        <button
          class="btn btn-lg btn-primary btn-block"
          type="button"
          onClick={() => {}}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Login;
