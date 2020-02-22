import * as apiService from '../api/apiService';
import * as types from '../utils/types';

export const fetchCountries = () => {
  return async dispatch => {
    dispatch(fetchCountriesBegin());
    try {
      const response = await apiService.fetchCountries();
      dispatch(fetchCountriesSuccess(response));
    } catch (error) {
      dispatch(fetchCountriesError(error));
    }
  }
}

const fetchCountriesBegin = () => {
  return {
    type: types.FETCH_COUNTRIES_BEGIN,
    loading: true
  }
}

const fetchCountriesSuccess = (response) => {
  return {
    type: types.FETCH_COUNTRIES_SUCCESS,
    payload: response,
    loading: false
  }
}

const fetchCountriesError = (error) => {
  return {
    type: types.FETCH_COUNTRIES_ERROR,
    loading: false,
    payload: error
  }
}