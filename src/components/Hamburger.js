import { Transition } from '@tailwindui/react';
import { useState } from 'react';

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className="block ">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded border-gray-500  text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
export default Hamburger;
