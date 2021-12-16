import React from 'react'
import { NavLink } from 'react-router-dom'
import logoNav from "../../src/logo.svg"
function NavBar() {
  return (
    <nav>
      <div className="contenedor-nav">
        <NavLink to="/"> <img src={logoNav} alt="Coagulación Factor X" /></NavLink>
        <ul className="menu">
          <li> <NavLink className={({ isActive }) => isActive ? 'active-nav' : ''} to="/transtornos_hemorragicos">Trastornos
            hemorrágicos</NavLink></li>
          <li> <NavLink className={({ isActive }) => isActive ? 'active-nav' : ''} to="/deficiencia_factor_x">Deficiencia
            Factor X</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
