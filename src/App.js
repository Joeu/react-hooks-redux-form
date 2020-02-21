import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Form from './components/form';

import { fetchCountries } from './api/apiService';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchCountries();
      setCountries(res);
    }

    fetchData();
  }, [])

  return (
    <main className="main">
      <Header />
      <Form countries={countries} />
    </main>
  );
}

export default App;
