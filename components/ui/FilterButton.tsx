"use client"
import React, { useState } from 'react';

function FilterButton() {
  const [active, setActive] = useState('week');

  return (
    <div className="flex justify-center items-center bg-gray-200 rounded-full py-2 px-4">
      {['Today', 'Week', 'Month', 'Year'].map((item) => (
        <button
          key={item}
          className={`mx-2 text-sm px-4 py-2 rounded-full 
                     ${active === item.toLowerCase() ? 'bg-black text-white' : 'text-gray-700 bg-white'}
                     transition duration-300 ease-in-out`}
          onClick={() => setActive(item.toLowerCase())}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterButton;
