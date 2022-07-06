import React, { useState, useEffect } from "react";

import CurrencyInput from "./CurrencyInput";

const ConverterBox = ({ rates }) => {

  const [amountFirst, setAmountFirst] = useState(1);
  const [amountSecond, setAmountSecond] = useState(1);
  const [currencyFirst, setCurrencyFirst] = useState('UAH');
  const [currencySecond, setCurrencySecond] = useState('USD');
  

  function handleAmountChange(amountFirst) {
    setAmountSecond(amountFirst * rates[currencySecond] / rates[currencyFirst]); 
    setAmountFirst(amountFirst);
  }

  function format() {
    return Number.toFixed(4);
  }

  // console.log('rates', rates)
  // console.log('currencyFirst', currencyFirst);
  // console.log('currencySecond', currencySecond);
  // console.log('amountFirst', amountFirst)
  return (
    <div className="max-w-4xl m-auto pb-6 pt-14">
      <div className="pt-14 bg-white pb-14 px-6 shadow">
        <h1 className="text-2xl text-black mb-10 font-semibold">
          Currency Exchange Rate
        </h1>
        <form>
          <div className="flex flex-row mb-6 gap-9 items-center">
            <CurrencyInput currencies={ Object.keys(rates) } amount={amountFirst} currency={currencyFirst} handleAmountChange={handleAmountChange} setCurrency={setCurrencyFirst} />
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
            <CurrencyInput currencies={ Object.keys(rates) } amount={amountSecond} currency={currencySecond} setAmount={setAmountSecond} setCurrency={setCurrencySecond} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConverterBox;
