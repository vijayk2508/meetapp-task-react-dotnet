/* eslint-disable react/jsx-pascal-case */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import LoginContainer from "../containers/LoginContainer";
import ProgramContainer from "../containers/ProgramContainer";
import Public_Layout from "../layout/public";
import Private_Layout from "../layout/private";
import AddEdit from "../components/program/add-edit";

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function AppRoute() {
  return (
    <Router>
      <div>
        <AuthButton />
        <Switch>
          <Route path="/" exact>
            <Public_Layout>
              <HomeContainer />
            </Public_Layout>
          </Route>
          <Route path="/login" exact>
            <Public_Layout>
              <LoginContainer />
            </Public_Layout>
          </Route>
          <Route path="/program" exact>
            <Private_Layout>
              <ProgramContainer />
            </Private_Layout>
          </Route>
          <Route path="/program/add" exact>
            <Private_Layout>
              <AddEdit></AddEdit>
            </Private_Layout>
          </Route>
          <Route path="/program/edit/:program_id" exact>
            <AddEdit></AddEdit>
          </Route>
          {/* <PrivateRoute path="/program" exact>
            <ProgramContainer />
          </PrivateRoute> */}
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useHistory();
  return fakeAuth.isAuthenticated ? "logged in" : "You are not logged in";
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }
