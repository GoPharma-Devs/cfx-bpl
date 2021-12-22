import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer>
      <div className="contenedor-footer">
        <Link to="/aviso-de-privacidad">Aviso de Privacidad </Link>
      </div>

    </footer>
  )
}

export default Footer
