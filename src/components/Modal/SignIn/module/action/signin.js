import API from '../../../../../axios/API';
import { loginUser, logoutUser } from '../reducer/reducer';
import { jwtDecode } from 'jwt-decode';

let logoutTimeout = null;

export const isTokenExpired = () => {
  const token = localStorage.getItem('token');
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // in seconds
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await API('user/login2', 'POST', { email, password });
    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);
      dispatch(loginUser(response.data.token));

      clearTimeout(logoutTimeout);
      const timeoutDuration = response.data.expires_in * 1000; // Convert seconds to milliseconds
      logoutTimeout = setTimeout(() => {
        console.log("Token expired. Logging out...");
        dispatch(logout());
      }, timeoutDuration);
    } else {
      throw new Error(response.data.message || "Login failed.");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Login failed due to an unknown error.";
    console.error('Login error:', errorMessage);
    dispatch(logoutUser(errorMessage));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  clearTimeout(logoutTimeout);
  logoutTimeout = null;
  dispatch(logoutUser());
};
