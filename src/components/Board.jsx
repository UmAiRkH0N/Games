import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick, isActive, winner, currentTurn }) => {
  const getBoardStyle = () => {
    if (winner) {
      return { backgroundColor: winner === 'Player1' ? '#0a0c91' : '#b30c00' };
    } else if (isActive) {
      return { backgroundColor: currentTurn === 'Player1' ? '#0a0c91' : '#b30c00' };
    }
    return { backgroundColor: 'transparent' };
  };

  return (
    <div className="grid grid-cols-3 gap-2 p-2 border-4 border-black rounded-lg" style={getBoardStyle()}>
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
