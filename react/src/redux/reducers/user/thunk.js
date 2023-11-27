import { login, logout } from ".";

// userThunks.js
export const loginAsync = (username) => (dispatch) => {
    setTimeout(() => {
      dispatch(login(username));
    }, 1000);
  };
  
  export const logoutAsync = () => (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, 1000);
  };
  