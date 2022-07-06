import React, { useState, useEffect, useCallback } from "react";
import { currencyOptions, fetchData } from '../utils/fetchData';

import ConverterBox from '../components/ConverterBox';
import Header from '../components/Header';

const Home = () => {

  const [rates, setRates] = useState([]);
  const [exchangeRate, setExchangeRate] = useState();

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      const latestRatesEndpointData = await fetchData(`https://api.fastforex.io/fetch-multi?from=UAH&to=UAH%2CUSD%2CEUR&api_key=${process.env.REACT_APP_RAPID_API_KEY}`, currencyOptions);
      
      setRates(latestRatesEndpointData.results);
      setExchangeRate(latestRatesEndpointData.rates['UAH'])
    };
    fetchCurrenciesData();
  }, [])

  const format = useCallback((value, number) => {
    if (!(value % 1 === 0)) {
      return value.toFixed(number);
    } else {
      return value;
    }
  }, [])

  return (
    <>
      <Header rates={Object.entries(rates)} format={format} />
      <ConverterBox rates={rates} format={format} exchangeRate={exchangeRate} setExchangeRate={setExchangeRate} />
    </>
  );
}

export default Home;
