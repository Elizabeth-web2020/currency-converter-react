import React from "react";

const CurrencyInput = ({ currencies, currency, amount, setAmount, setCurrency }) => {
  return (
    <div className="flex-1">
      <label className="font-bold text-sm mb-3 block" htmlFor="text">
        Amount
      </label>
      <div className="flex">
        <input
          type="text"
          className="focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 w-full border-2 rounded-sm min-h-50 pl-3 pr-10 py-2"
          value={amount}
          size="lg"
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={currency}
          className="focus:outline-none border-2 rounded-sm min-h-50 pl-3 pr-10 py-2"
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyInput;
