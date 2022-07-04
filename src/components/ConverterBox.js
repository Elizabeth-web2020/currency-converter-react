import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectIcon } from "@heroicons/react/solid";

const converterBox = () => {
  return (
    <div className="max-w-4xl m-auto pb-6 pt-14">
      <div className="pt-14 bg-white pb-14 px-6 shadow">
        <h1 className="text-2xl text-black mb-10 font-semibold">
          Currency Exchange Rate
        </h1>
        <form>
          <div className="flex flex-row mb-6 gap-9 items-center">
            <div className="flex-1">
              <label className="font-bold text-sm mb-3 block" htmlFor="text">
                Amount
              </label>
              <div className="flex">
              <input
                type="text"
                className="focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 w-full border-2 rounded-sm min-h-50 pl-3 pr-10 py-2"
                value=""
                size="lg"
                placeholder="Enter amount"
              />
              <select name="" id="" className="focus:outline-none border-2 rounded-sm min-h-50 pl-3 pr-10 py-2"></select>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-cyan-600/75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
            <div className="flex-1">
              <label className="font-bold text-sm mb-3 block" htmlFor="text">
                Amount
              </label>
              <div className="flex">
              <input
                type="text"
                className="focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 w-full border-2 rounded-sm min-h-50 pl-3 pr-10 py-2"
                value=""
                size="lg"
                placeholder="Enter amount"
              />
              <select name="" id="" className="focus:outline-none border-2 rounded-sm min-h-50 pl-3 pr-10 py-2"></select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default converterBox;
