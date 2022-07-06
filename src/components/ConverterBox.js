import React, { useState, useEffect, useCallback } from "react";
import { currencyOptions, fetchData } from '../utils/fetchData';
import CurrencyInput from "./CurrencyInput";

const ConverterBox = ({ rates, format, exchangeRate, setExchangeRate }) => {

  const [currencyFirst, setCurrencyFirst] = useState('UAH');
  const [currencySecond, setCurrencySecond] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if(amountInFromCurrency) {
    fromAmount = amount;
    toAmount = format((amount * exchangeRate), 4);
  } else {
    toAmount = amount;
    fromAmount = format((amount / exchangeRate), 4);
  }
  
  useEffect(() => {

    if (currencyFirst != null && currencySecond != null) {
      const fetchCurrenciesData = async () => {
        const newExchangeRateData = await fetchData(`https://api.fastforex.io/fetch-one?from=${currencyFirst}&to=${currencySecond}&api_key=${process.env.REACT_APP_RAPID_API_KEY}`, currencyOptions);
        setExchangeRate(newExchangeRateData.result[currencySecond]);
      };
        fetchCurrenciesData();
    }
    }, [currencyFirst, currencySecond])

  const handleFromAmountChange = useCallback((e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }, [])

  const handleToAmountChange = useCallback((e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }, [])

  return (
    <div className="max-w-4xl m-auto pb-6 pt-14">
      <div className="pt-14 bg-white pb-14 px-6 shadow">
        <h1 className="text-2xl text-black mb-10 font-semibold">
          Currency Exchange Rate
        </h1>
        <form>
          <div className="flex flex-row mb-6 gap-9 items-center">
            <CurrencyInput currencies={ Object.keys(rates) } currency={currencyFirst} setCurrency={setCurrencyFirst} amount={fromAmount} onAmountChange={handleFromAmountChange} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-cyan-600/75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
            <CurrencyInput currencies={ Object.keys(rates) } currency={currencySecond} setCurrency={setCurrencySecond} amount={toAmount} onAmountChange={handleToAmountChange} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConverterBox;
