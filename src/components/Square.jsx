import React from 'react';

const Square = ({ value, onClick, isActive }) => {
  const getColor = () => {
    switch (value) {
      case 'Player1':
        return 'bg-[#2607f2]';
      case 'Player2':
        return 'bg-[#f22307]';
      default:
        return 'bg-black';
    }
  };

  const hoverClasses = isActive ? 'hover:bg-slate-100' : '';

  return (
    <button
      className={`w-12 h-12 rounded-lg ${hoverClasses} border-4 border-black ${getColor()} flex items-center justify-center`}
      onClick={isActive ? onClick : null}
      disabled={!isActive}
    />
  );
};

export default Square;
