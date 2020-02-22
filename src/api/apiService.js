const BASE_URL = 'https://restcountries.eu/rest/v2/all';

export const fetchCountries = async () =>
  await fetch(BASE_URL, { cache: 'default' })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);


