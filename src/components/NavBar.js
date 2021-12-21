import React from 'react'

import { NavLink } from 'react-router-dom'
import logoNav from "../../src/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
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
          <li>
            <a href="https://www.instagram.com/coagulacionfactorx/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/coagulacionfactorx">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
