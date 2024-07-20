import React from 'react';
import useStore from '../store/store.js'; 

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      onClick={increasePopulation}
    >
      one up
    </button>
  );
}

export default Controls;