import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './Home';
import Game from './components/supertictactoe/Game';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supertictactoe" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
