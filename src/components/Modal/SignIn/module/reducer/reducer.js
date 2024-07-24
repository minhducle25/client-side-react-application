const getTokenFromStorage = () => localStorage.getItem('token');

const initialState = {
    isAuthenticated: !!getTokenFromStorage(),
    token: getTokenFromStorage(),
    error: null
};

export const loginUser = (token) => ({
    type: 'LOGIN_SUCCESS',
    payload: token,
});

export const logoutUser = (error = null) => ({
    type: 'LOGOUT',
    error: error
});

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload,
          error: null
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          error: action.error
        };
      default:
        return state;
    }
};
