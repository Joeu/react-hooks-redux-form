import * as types from '../utils/types';

export const formReducer = (state, action) => {
  const { payload, loading } = action;

  switch (action.type) {
    case types.FETCH_COUNTRIES_BEGIN:
      return {
        loading
      }
    case types.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        payload,
        loading
      }
    case types.FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        payload,
        loading
      }
    default:
      return state
  }
};