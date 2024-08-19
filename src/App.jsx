import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './Home';
import Connect from './components/connectfour/Connect';
import TicTac from './components/supertictactoe/TicTac';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supertictactoe" element={<TicTac />} />
        <Route path="/connectfour" element={<Connect />} />
      </Routes>
    </Router>
  );
}

export default App;
