import React from 'react';

export const Button = ({ children, onClick, className = '' }: any) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition ${className}`}
  >
    {children}
  </button>
);
