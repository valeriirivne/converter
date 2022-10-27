import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import '../App.css';

import CurrencyRow from '../CurrencyRow';
import MainCurrencyPage from '../secondPageCurrency/MainCurrencyPage';
import About from '../about/About';

const Converter = ({
  fromCurrency,
  setFromCurrency,
  forCurrencyPage,
  setForCurrencyPage,
}) => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  // const [fromCurrency, setFromCurrency] = useState('UAH');
  // const [forCurrencyPage, setForCurrencyPage] = useState();
  console.log(fromCurrency, forCurrencyPage);

  const BASE_URL =
    'https://v6.exchangerate-api.com/v6/1d07834c7dec00801d2c6308/latest';

  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(`${BASE_URL}/${fromCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log('1111');
        const convertToCurrency = Object.keys(data.conversion_rates)[146];
        setCurrencyOptions([
          // data.base_code,
          ...Object.keys(data.conversion_rates),
        ]);
        setFromCurrency(data.base_code);
        setToCurrency(convertToCurrency);
        setExchangeRate(data.conversion_rates[convertToCurrency]);
      });
  }, []);

  useEffect(() => {
    console.log(fromCurrency);
    console.log(toCurrency);
    if (fromCurrency && toCurrency) {
      fetch(
        `https://v6.exchangerate-api.com/v6/1d07834c7dec00801d2c6308/pair/${fromCurrency}/${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setExchangeRate(data.conversion_rate);
        });

      fetch(`${BASE_URL}/${fromCurrency}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setForCurrencyPage(data.conversion_rates);
        });
    }
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <div className='converter'>
      <div>
        <h1>Convert</h1>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <div className='equals'>=</div>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />
      </div>
      <div>
        {/* <Link to='about'></Link> */}
        {/* <Routes>
          <Route
            path='/about'
            element={<About />}
            fromCurrency={fromCurrency}
            forCurrencyPage={forCurrencyPage}
          />
        </Routes> */}
        {/* <About fromCurrency={fromCurrency} forCurrencyPage={forCurrencyPage} /> */}
      </div>
    </div>
  );
};

export default Converter;
