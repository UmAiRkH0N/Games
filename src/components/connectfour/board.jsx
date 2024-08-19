import React from 'react';
import Column from './column';

export const Board = ({ board, handleDrop }) => {
  return (
    <div className="grid grid-cols-7 gap-2 p-4 bg-gray-900 rounded-lg">
      {board.map((column, colIndex) => (
        <Column key={colIndex} column={column} handleClick={() => handleDrop(colIndex)} />
      ))}
    </div>
  );
};
export default Board;
