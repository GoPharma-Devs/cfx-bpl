import React from "react";
import { Link } from "react-router-dom";
import ProblemasS from "../img/problemas-sangrado.png";
import GrupoX from "../img/grupo-factorx.png";
import ImgHeader from "../img/img-header.png";
function Home() {
  return (
    <div className="home">
      <header className="App-header">
        <div className="contenedor">
          <div className="texto-header">
            <h1>
              DEFICIENCIA HEREDITARIA DEL FACTOR X
            </h1>
            <Link className="btn-primario" to="/transtornos_hemorragicos"> Conozca más</Link>
          </div>
          <img src={ImgHeader} className="img-header" alt="logo" />
        </div>
      </header>
      <section className="section">
        <div className="contenedor">
          <img
            src={ProblemasS}
            alt="Problemas con sangrado facil"
            className="hematomas"
          />

          <div className="texto">
            <h2>
              ¿Problemas con sangrado fácil, hematomas o articulaciones
              inflamadas?
            </h2>
            <p>
              Las personas con trastornos hemorrágicos suelen tener uno o más
              síntomas, que pueden ser de leves a graves.
            </p>
            <ul>
              <li>
                En las mujeres, estos síntomas pueden incluir sangrado más
                abundante o más prolongado durante los períodos que la mayoría
                de las otras mujeres, o complicaciones hemorrágicas durante el
                embarazo o el parto.
              </li>
              <li>
                Algunos síntomas pueden provocar dolor, como cuando una
                articulación se hincha debido a un sangrado dentro de la
                articulación.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="contenedor">
          <div className="texto">
            <h2>
              ¿Se pregunta si sus síntomas son causados ​​por una deficiencia de
              factor X?
            </h2>

            <ul>
              <li>
                La deficiencia de factor X causa problemas con la coagulación de
                la sangre debido a que no hay suficiente factor X en la sangre.
                O a veces, la gente tiene suficiente factor X pero no funciona
                como debería.
              </li>
              <li>
                Las personas con deficiencia de factor X pueden sangrar más que
                la mayoría de las personas y tienen dificultades para detener el
                sangrado.
              </li>
            </ul>
          </div>
          <img
            src={GrupoX}
            alt="Problemas con sangrado facil"
            className="hematomas"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
