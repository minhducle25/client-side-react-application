const initialState = {
  registerSuccess: false,
  message: "",
  error: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        registerSuccess: true,
        message: action.payload,
        error: null,
      };
    case "REGISTER_FAIL":
      return {
        ...state,
        registerSuccess: false,
        error: action.payload,
        message: "",
      };
    case "RESET_REGISTER_STATE":
      return { ...initialState };
    default:
      return state;
  }
};

export default registerReducer;
