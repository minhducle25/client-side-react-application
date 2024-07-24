import {
    FETCH_POPULATION_BEGIN,
    FETCH_POPULATION_SUCCESS,
    FETCH_POPULATION_FAILURE
  } from '../action/chartActions';
  
  const initialState = {
    data: null,
    loading: false,
    error: null
  };
  
  export default function populationReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_POPULATION_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_POPULATION_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload.data
        };
      case FETCH_POPULATION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          data: null
        };
      default:
        return state;
    }
  }
  