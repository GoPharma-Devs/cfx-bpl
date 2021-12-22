import React from 'react';

import './scss/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Transtornos from './views/Transtornos'
import Deficiencia from './views/Deficiencia'
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Aviso from './views/Aviso'
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/transtornos_hemorragicos" element={<Transtornos />} />
          <Route path="/deficiencia_factor_x" element={<Deficiencia />} />
          <Route path="/aviso-de-privacidad" element={<Aviso />} />
        </Routes>
        <Footer />

      </BrowserRouter >
    </div >
  );
}

export default App;
