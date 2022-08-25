export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';
export const GET_ERROR = 'GET_ERROR';

export const requestApi = () => ({ type: REQUEST_API });
export const responseApi = (payload) => ({ type: RESPONSE_API, payload });
export const getError = (e) => ({ type: GET_ERROR, e });

export function fetchApi() {
  return async (dispatch) => {
    dispatch(requestApi());
    try {
      const response = await fetch('https://meowfacts.herokuapp.com/');
      const result = await response.json();
      return dispatch(responseApi(result));
    } catch(e) {
        dispatch(getError(e.message));
    }
  }
}
