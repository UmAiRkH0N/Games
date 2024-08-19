import React from 'react';
import Disc from './Disc';

export const Column = ({ column, handleClick }) => {
  return (
    <div className="flex flex-col-reverse items-center cursor-pointer" onClick={handleClick}>
      {column.map((value, index) => (
        <Disc key={index} value={value} />
      ))}
    </div>
  );
};
export default Column; 