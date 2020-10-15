import sendApiRequest, { cookies } from "../../services/auth";
import apiEndpoints from "../../apiEndpoints";
import loginConstants from "./loginConstants";

export function onSingIn(data, onSuccess = () => {}, onFailure = () => {}) {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: apiEndpoints.LOGIN,
      method: "post",
      data: {
        userEmail: data.email,
        userPassword: data.password,
      },
    });
    if (response.status === "success") {
      // logged in successfully
      cookies.set("elearning_app", response.data.token, { path: "/" });
      onSuccess(response.data);
      dispatch(onLoginSuccess);
    } else {
      // error in logging in
      onFailure(response);
    }
  };
}

export function onLogin({ email, password }, onSuccess, onFailure) {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: apiEndpoints.LOGIN,
      method: "post",
      data: {
        login: { email, password },
      },
    });
    if (response.status === "success") {
      // logged in successfully
      onSuccess();
      dispatch(onLoginSuccess);
    } else {
      // error in logging in
      onFailure(response);
    }
  };
}

/*
  Action creator
*/

function onLoginSuccess() {
  return {
    type: loginConstants.LOGIN_SUCCESSFUL,
  };
}

// function onLoginFailed() {
//   return {
//     type: loginConstants.LOGIN_SUCCESSFUL
//   };
// }
