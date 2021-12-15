import React from 'react';

import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/deficiencia_factor_x" element={<Home />}></Route>
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
