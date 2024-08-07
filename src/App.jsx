import React, { useState } from 'react';
import Game from './components/Game';

const App = () => {
  const [bgColor, setBgColor] = useState('#1A202C');

  const handleWin = (winner) => {
    setBgColor(winner === 'Player1' ? '#2607f2' : '#f22307');
  };

  return (
    <div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: bgColor }}>
      <Game onWin={handleWin} />
    </div>
  );
};

export default App;
