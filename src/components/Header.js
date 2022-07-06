import React from 'react';

const Header = ({ rates }) => {
  console.log("rates", rates)
  return (
    <div className='w-full bg-white text-center shadow'>
      <div className='p-6 max-w-sm mx-auto flex justify-between items-center text-xl'>
        {rates?.map((rate) => (
            rate[0] == 'UAH' ? '' : <p>
            {rate[0]} : {rate[1]*1000}
        </p>
        ))}
        </div>
    </div>
  );
}

export default Header;
