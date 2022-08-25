import { combineReducers } from "redux";
import { REQUEST_API, RESPONSE_API, GET_ERROR  } from "../actions";

const INICIAL_STATE = {
  isLoading: false,
  phrase: [],
  error: '',
}

function getPhrase(state = INICIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    }  
  case RESPONSE_API:
    return {
      ...state,
      isLoading: false,
      phrase: action.payload,
    }  
  case GET_ERROR:
    return {
      ...state,
      error: action.e,
    }  
    default:
      return state;
  }
}

function wanNervoso(state = INICIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;  
  }

}

const rootReducer = combineReducers({ getPhrase, wanNervoso });

export default rootReducer;