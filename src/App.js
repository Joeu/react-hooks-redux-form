import React, { useEffect } from 'react';
import Header from './components/header';
import Form from './components/form';
import Footer from './components/footer';
import { useDispatch } from 'react-redux';
import { fetchCountries } from './actions/formActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch])

  return (
    <main className="app-container">
      <Header />
      <Form />
      <Footer />
    </main>
  );
}

export default App;
