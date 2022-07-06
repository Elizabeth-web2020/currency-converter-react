import React from 'react';

const Header = ({ rates, format }) => {
 
  return (
    <div className='w-full bg-white text-center shadow'>
      <div className='p-6 max-w-sm mx-auto flex justify-between items-center text-xl'>
        {rates?.map((rate) => (
            rate[0] === 'UAH' ? '' : <p key={rate[0]}>
            {rate[0]}: {format((rate[1]*1000), 2)}
        </p>
        ))}
        </div>
    </div>
  );
}

export default Header;
