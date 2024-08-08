import React from 'react';

const Square = ({ value, onClick, isActive }) => {
  const colors = {
    Player1: 'bg-[#2607f2]',
    Player2: 'bg-[#f22307]',
    default: 'bg-black'
  };

  const hoverClass = isActive ? 'hover:bg-slate-100' : '';

  return (
    <button
      className={`w-5 h-5 rounded-md border-2 xs:h-7 xs:w-7 sm:h-9 sm:w-9  md:w-10 md:h-10 lg:h-12 lg:w-12 md:rounded-lg ${hoverClass} md:border-4 border-black ${colors[value] || colors.default} flex items-center justify-center`}
      onClick={isActive ? onClick : null}
      disabled={!isActive}
    />
  );
};

export default Square;
