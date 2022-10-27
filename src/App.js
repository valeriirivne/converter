import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Converter from './converter/Converter';
import SharedLayout from './SharedLayout';
import MainCurrencyPage from './secondPageCurrency/MainCurrencyPage';
import About from './about/About';
function App() {
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [forCurrencyPage, setForCurrencyPage] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route
            index
            element={
              <Converter
                fromCurrency={fromCurrency}
                forCurrencyPage={forCurrencyPage}
                setFromCurrency={setFromCurrency}
                setForCurrencyPage={setForCurrencyPage}
              />
            }
          />
          <Route
            path='about'
            element={
              <About
                fromCurrency={fromCurrency}
                forCurrencyPage={forCurrencyPage}
              />
            }
          />
          <Route path='currency' element={<MainCurrencyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
