import React, { useState } from 'react';
import Board from './board';

const Connect = () => {
  const initialBoard = Array(7).fill(Array(6).fill(0));
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  // Check for win function
  const checkWin = (board, player) => {
    const rows = 6;
    const cols = 7;

    // Horizontal Check
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols - 3; col++) {
        if (
          board[col][row] === player &&
          board[col + 1][row] === player &&
          board[col + 2][row] === player &&
          board[col + 3][row] === player
        ) {
          return true;
        }
      }
    }

    // Vertical Check
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows - 3; row++) {
        if (
          board[col][row] === player &&
          board[col][row + 1] === player &&
          board[col][row + 2] === player &&
          board[col][row + 3] === player
        ) {
          return true;
        }
      }
    }

    // Diagonal Check (Bottom-Left to Top-Right)
    for (let col = 0; col < cols - 3; col++) {
      for (let row = 0; row < rows - 3; row++) {
        if (
          board[col][row] === player &&
          board[col + 1][row + 1] === player &&
          board[col + 2][row + 2] === player &&
          board[col + 3][row + 3] === player
        ) {
          return true;
        }
      }
    }

    // Diagonal Check (Top-Left to Bottom-Right)
    for (let col = 0; col < cols - 3; col++) {
      for (let row = 3; row < rows; row++) {
        if (
          board[col][row] === player &&
          board[col + 1][row - 1] === player &&
          board[col + 2][row - 2] === player &&
          board[col + 3][row - 3] === player
        ) {
          return true;
        }
      }
    }

    return false;
  };

  // Handle drop logic
  const handleDrop = (colIndex) => {
    if (winner) return;

    const newBoard = board.map((col, i) => (i === colIndex ? [...col] : col));
    const emptyRowIndex = newBoard[colIndex].indexOf(0);

    if (emptyRowIndex !== -1) {
      newBoard[colIndex][emptyRowIndex] = currentPlayer;

      if (checkWin(newBoard, currentPlayer)) {
        setWinner(currentPlayer);
      } else {
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      }

      setBoard(newBoard);
    }
  };

  // Reset game
  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer(1);
    setWinner(null);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen text-white ${
        winner === 1 ? 'bg-blue-500' : winner === 2 ? 'bg-red-500' : 'bg-black'
      }`}
    >
      {winner ? (
        <div className="text-2xl mb-4">Player {winner} Wins!</div>
      ) : (
        <div className="text-xl mb-4">Player {currentPlayer}'s Turn</div>
      )}
      <Board board={board} handleDrop={handleDrop} />
      {winner && (
        <button
          className="mt-4 px-4 py-2 bg-gray-800 rounded"
          onClick={resetGame}
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default Connect;