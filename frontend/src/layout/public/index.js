/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withRouter } from "react-router";

function Public_Layout(props) {
  console.log(props)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* <a className="navbar-brand" href="#">
          Logo
        </a> */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" onClick={()=>{props.history.push('/')}}>
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>{props.history.push('/login')}}>
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>{props.history.push('/program')}}>
                Program
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {props.children}
    </div>
  );
}

export default withRouter(Public_Layout);
