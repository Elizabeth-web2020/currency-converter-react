import React, { useState, useEffect } from "react";
import { currencyOptions, fetchData } from './utils/fetchData';

import ConverterBox from './components/ConverterBox';
import Header from './components/Header';


function App() {

  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      const latestRatesEndpointData = await fetchData('https://api.apilayer.com/fixer/latest?symbols=UAH%2CUSD%2CEUR&base=UAH', currencyOptions);
      
      setRates(latestRatesEndpointData.rates);
      // setCurrencyFirst(latestRatesEndpointData.base);
      // setCurrencySecond(Object.keys(latestRatesEndpointData.results)[1])
    };
    fetchCurrenciesData();
  }, [])

  // console.log('rates', rates)

  return (
    <>
      <Header rates={Object.entries(rates)} />
      <ConverterBox rates={rates} />
    </>
  );
}

export default App;
