import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [boards, setBoards] = useState(Array(9).fill(Array(9).fill(null))); // Initialize 9x9 boards
  const [mainBoard, setMainBoard] = useState(Array(9).fill(null)); // Initialize main board
  const [currentTurn, setCurrentTurn] = useState('Player1');
  const [currentBoard, setCurrentBoard] = useState(null);
  const [gameWinner, setGameWinner] = useState(null);
  const [bgColor, setBgColor] = useState('#1A202C'); // Initialize background color

  const handleClick = (boardIdx, squareIdx) => {
    if (gameWinner || mainBoard[boardIdx] || boards[boardIdx][squareIdx]) return;

    const updatedBoards = boards.map((board, idx) =>
      idx === boardIdx ? board.map((val, i) => (i === squareIdx ? currentTurn : val)) : board
    );

    const updatedMainBoard = [...mainBoard];
    updatedMainBoard[boardIdx] = checkWinCondition(updatedBoards[boardIdx]);

    setBoards(updatedBoards);
    setMainBoard(updatedMainBoard);
    setCurrentBoard(updatedMainBoard[squareIdx] !== null ? null : squareIdx);

    const winner = checkWinCondition(updatedMainBoard);
    if (winner) {
      setGameWinner(winner);
      setBgColor(winner === 'Player1' ? '#2607f2' : '#f22307');
    } else {
      setCurrentTurn(currentTurn === 'Player1' ? 'Player2' : 'Player1');
    }
  };

  const checkWinCondition = (board) => {
    const winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]  // Diagonals
    ];
    for (const [a, b, c] of winningLines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: bgColor }}>
      <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-3 md:gap-5">
        {boards.map((board, idx) => (
          <Board
            key={idx}
            squares={board}
            onClick={(i) => handleClick(idx, i)}
            isActive={!gameWinner && (currentBoard === null || currentBoard === idx)}
            winner={mainBoard[idx]}
            currentTurn={currentTurn}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
