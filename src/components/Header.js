import React from 'react';

const Header = () => {
  return (
    <div className='w-full bg-white text-center shadow'>
      <div className='p-6 max-w-sm mx-auto flex justify-between items-center text-xl'>
        <p>
          USD: 33.58
        </p>
        <p>
          EUR: 50.20
        </p>
        </div>
    </div>
  );
}

export default Header;
