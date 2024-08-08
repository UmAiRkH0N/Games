import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick, isActive, winner, currentTurn }) => {
  const boardStyle = {
    backgroundColor: winner
      ? winner === 'Player1' ? '#0a0c91' : '#b30c00'
      : isActive ? currentTurn === 'Player1' ? '#0a0c91' : '#b30c00'
      : 'transparent',
  };

  return (
    <div className="grid grid-cols-3 gap-1 p-1 xs:gap-1 sm:gap-1 md:gap-2 md:p-2 border-4 border-black rounded-lg" style={boardStyle}>
      {squares.map((value, i) => (
        <Square
          key={i}
          value={winner || value}
          onClick={() => onClick(i)}
          isActive={isActive && !winner && !value}
        />
      ))}
    </div>
  );
};

export default Board;
