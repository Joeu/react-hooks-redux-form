const BASE_URL = 'https://restcountries.eu/rest/v2/all';
const LOCAL_STORAGE_COUNTRIES_KEY = 'localCountries';

export const fetchCountries = async () => {
  const localData = localStorage.getItem(LOCAL_STORAGE_COUNTRIES_KEY);

  return localData !== null
    ? localData
    : await fetch(BASE_URL)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem(LOCAL_STORAGE_COUNTRIES_KEY, data);
        return data;
      })
      .catch(error => error);

}
