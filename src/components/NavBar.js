import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import logoNav from "../../src/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav>
      <div className="contenedor-nav">
        <NavLink to="/" onClick={closeMobileMenu}> <img src={logoNav} alt="Coagulación Factor X" /></NavLink>

        <ul className={click ? "menu active-r" : "menu "}>
          <li className="oculto"> <NavLink className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={closeMobileMenu} to="/transtornos_hemorragicos"><i className="fas fa-home"></i></NavLink></li>
          <li> <NavLink className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={closeMobileMenu} to="/transtornos_hemorragicos">Trastornos
            hemorrágicos</NavLink></li>

          <li> <NavLink className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={closeMobileMenu} to="/deficiencia_factor_x">Deficiencia
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
          <li className="oculto"> <NavLink className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={closeMobileMenu} to="/aviso-de-privacidad">Aviso de privacidad</NavLink></li>
        </ul>
        <div className={click ? "menu-icon fixed" : "menu-icon "} onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
