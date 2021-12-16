import React from 'react';

import './scss/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Transtornos from './views/Transtornos'
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/deficiencia_factor_x" element={<Home />} />
          <Route path="/transtornos_hemorragicos" element={<Transtornos />} />
        </Routes>

      </BrowserRouter >
    </div >
  );
}

export default App;
