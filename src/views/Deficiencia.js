import React from 'react'

import Def from "../img/PLAQUETAS_ESQUEMAS_2-02.svg";
import Paciente1 from "../img/adrian-256.jpeg"
import Paciente2 from "../img/maritza-256.jpeg"
import Paciente3 from "../img/carly-256.jpeg"
import Paciente4 from "../img/pam-256.jpeg"
//import VideoImg2 from "../img/PREVIEW_VIDEO_BPL_WEB_1.jpg"

function Deficiencia() {
  return (
    <React.Fragment>
      <section className="section header">
        <div className="contenedor">
          <div className="texto">
            <h2>
              ¿SU HEMORRAGIA U OTROS SÍNTOMASPODRÍAN DEBERSE A UNA DEFICIENCIA HEREDITARIA DE FACTOR X ?
            </h2>
            <p>
              La deficiencia hereditaria del factor X (10) es un trastorno hemorrágico poco común que puede ser grave. Afecta aproximadamente a 1 de cada 12 personas con un trastorno hemorrágico poco común. Si tiene deficiencia de factor X, o cree que podría tenerla, esta página es para uste
            </p>
            <ul>
              <li>Aprenda sobre la deficiencia de factor X y su tratamiento. </li>
              <li>Encuentre recursos útiles, incluido un evaluador de síntomas de trastornos hemorrágicos. </li>
              <li>Escuche a personas reales con deficiencia de factor X.</li>
            </ul>
          </div>
          <div className="contendor-video">
            <iframe src="https://player.vimeo.com/video/658719507?h=7156904faa" width={592} height={333} frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />

            <small>
              Los síntomas del trastorno hemorrágico a veces pueden ser confusos
              o
              difíciles de entender. Mire este video para obtener más
              información.
            </small>
          </div>
        </div>
      </section>
      <section className="section-white">
        <div className="contenedor">
          <img
            src={Def}
            alt="Problemas con sangrado facil"
            className="hematomas"
          />
          <div className="texto">
            <h2>
              ¿QUÉ ES LA DEFICIENCIA DE FACTOR X?
            </h2>
            <p>
              La deficiencia de factor X (expresada como “factor 10”) es un trastorno hemorrágico poco común. Es causada por tener muy poco factor de coagulación llamado factor X en la sangre. O a veces, la gente tiene suficiente factor X pero no funciona como debería. La deficiencia hereditaria de factor X es una deficiencia de factor X que se da en las familias, lo que significa que puede transmitirse de padres a hijos.
            </p>
            <p>
              El factor X actúa ayudando con la coagulación de la sangre a ralentizar y detener el sangrado. El sangrado puede ocurrir dentro del cuerpo (por ejemplo, en una articulación) o en la parte exterior del cuerpo (como en un corte de piel). Las personas con deficiencia de factor X pueden sangrar más de lo normal y tener dificultades para detener el sangrado.
            </p>
            <p>Los síntomas de la deficiencia de factor X a veces pueden ser confusos o difíciles de entender. Por ejemplo, los síntomas pueden incluir hinchazón de las articulaciones y dolor causado por el sangrado dentro de una articulación.</p>
          </div>

        </div>
      </section>
      <section className="section">
        <div className="contenedor-pacientes-general">
          <h3>Historias de pacientes y cuidadores:<br /> camino hacia el diagnóstico</h3>
          <div className="contenedor-pacientes">
            <div className="paciente"><img src={Paciente1} alt="img-paciente" />
              <div className="texto">
                <p className="titulo">La historia de Adrian:</p>
                <p>"Animo a todos a que sean sus propios defensores, busquen ayuda cuando la necesiten y encuentren el tratamiento adecuado para ellos".

                </p>
              </div>
            </div>
            <div className="paciente"><img src={Paciente2} alt="img-paciente" />
              <div className="texto">
                <p className="titulo">La historia de Maritza:</p>
                <p>“Durante 23 años no tuve nada. Ahora sí tengo algo, y está hecho solo para mí ".

                </p>
              </div>
            </div>
            <div className="paciente"><img src={Paciente3} alt="img-paciente" />
              <div className="texto">
                <p className="titulo">La historia de Carly:
                </p>
                <p>“Ayudó a la autoestima y la confianza de mi hija saber que ahora tiene un tratamiento aprobado específicamente para su enfermedad”.

                </p>
              </div>
            </div>
            <div className="paciente"><img src={Paciente4} alt="img-paciente" />
              <div className="texto"> <p className="titulo">La historia de Pam:
              </p>
                <p>“Mi hijo quiere que los demás sepan que 'realmente y verdaderamente ... si tomas tu medicamento, puedes vivir una vida normal'”.

                </p></div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Deficiencia
