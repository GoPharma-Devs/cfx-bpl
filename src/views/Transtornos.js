import React from "react";
import info1 from "../img/PLAQUETAS_ESQUEMASArtboard3.png"
import info2 from "../img/PLAQUETAS_ESQUEMASArtboard3.png"
import ProblemasS from "../img/problemas-sangrado.png";
function Transtornos() {
  return (
    <React.Fragment>
      <section className="section header">
        <div className="contenedor">
          <div className="texto">
            <h2>
              ¿Problemas con sangrado fácil, hematomas o articulaciones
              inflamadas?
            </h2>
            <p>
              Puede que le sorprenda, pero cualquiera de estos puede ser el
              resultado de un trastorno hemorrágico. Puede sangrar o tener
              moretones con facilidad o tener problemas para detener el
              sangrado. O puede tener hinchazón o dolor en las articulaciones
              sin motivo aparente.
            </p>
            <p>
              Si cree que tiene un trastorno hemorrágico, obtenga más
              información leyendo esta página. Luego, hable con su médico acerca
              de sus síntomas y de hacerse la prueba. El diagnóstico y el
              tratamiento pueden ayudar.
            </p>
          </div>
          <div className="contendor-video">
            <img
              src={ProblemasS}
              alt="Problemas con sangrado facil"
              className="hematomas"
            />
            <small>
              Los síntomas del trastorno hemorrágico a veces pueden ser confusos
              o <br />
              difíciles de entender. Mire este video para obtener más
              información.
            </small>
          </div>
        </div>
      </section>
      <section className="section-white">
        <div className="contenedor">
          <div className="texto">
            <h2>
              ¿Cuáles son los signos y síntomas de los trastornos hemorrágicos?
            </h2>
            <p>
              Hay muchos síntomas posibles de los trastornos hemorrágicos.
              Algunos son fáciles de entender porque ocurren fuera del cuerpo,
              como sangrar demasiado por un corte en la piel. Pero el sangrado
              que ocurre dentro del cuerpo (como en una articulación) puede ser
              más difícil de reconocer como causado por un trastorno
              hemorrágico. Además, los síntomas pueden variar de leves (no mucho
              peores de lo normal) a severos (mucho peores de lo normal)
            </p>
          </div>
          <img
            src={ProblemasS}
            alt="Problemas con sangrado facil"
            className="hematomas"
          />
        </div>
      </section>
      <section className="section-white">
        <div className="contenedor">
          <div className="col">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/640d04fdec49375633529e1b84a27b665cdcd1fd/b8866/img/icons/icon-woman.svg"
              alt=""
            />
            <div className="texto-col">
              <p>Síntomas en mujeres:</p>
              <ul>
                <li>Sangrado más abundante o más prolongado durante los períodos que la mayoría de las otras mujeres (sangrado menstrual abundante)</li>
                <li>Complicaciones hemorrágicas durante el embarazo o el parto.</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/0e6fce9dd8361e74da17237ef3a33074bf9cb5a6/d9ae7/img/icons/icon-baby.svg"
              alt=""
            />
            <div className="texto-col">
              <p>Síntomas en los recién nacidos:</p>
              <ul>
                <li>sangrado del cordón umbilical (ombligo) o de la circuncisión que no se detiene normalmente, o sangrado del cerebro o del estómago</li>

              </ul>
            </div>
          </div>
        </div>
      </section >
      <section className="section-white">
        <div className="contenedor">
          <div className="col-list">
            <p>Síntomas en cualquier persona:
            </p>
            <ul>
              <li><img src="/" alt="img-list" />Moretones con facilidad</li>
              <li><img src="/" alt="img-list" />Hemorragias nasales</li>
              <li><img src="/" alt="img-list" />Hinchazón / dolor articular</li>
              <li><img src="/" alt="img-list" />Sangrado de las encías
              </li>
              <li><img src="/" alt="img-list" />Sangrado excesivo después de una lesión.</li>
              <li><img src="/" alt="img-list" />Sangrado en el cerebro</li>

            </ul>
          </div>
          <div className="cuadro-azul-cielo">
            <h3>¿Sabías?</h3>
            <p>Los síntomas del trantorno hemorrágico pueden causar molestias.</p>
            <ul>
              <li>Las personas con trastornos hemorrágicos a veces sienten dolor con los síntomas hemorrágicos.</li>
              <li>El dolor puede ocurrir por diferentes motivos, como hinchazón por sangrado en una articulación o hematomas.</li>
              <li>El dolor puede ocurrir por diferentes motivos, como hinchazón por sangrado en una articulación o hematomas.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-white"><div className="contenedor cuadro-azul">
        <h4>Pregúntele a su médico acerca de las pruebas para detectar trastornos hemorrágicos si tiene estos síntomas.
        </h4>
      </div></section>

      <section className="section-white">
        <div className="contenedor flex">
          <p className="titulo">¿Qué son los trastornos hemorrágicos?
          </p>
          <p>Los trastornos hemorrágicos son un grupo de afecciones en las que las personas pueden sangrar mucho, sangrar fácilmente o tener dificultades para detener el sangrado. El sangrado puede ocurrir dentro o fuera del cuerpo.
            <br />
            <br />
            Gráfico de la coagulación sanguínea normal de las células sanguíneas.</p>
          <div className="contenedor-imagenes">
            <img src={info1} className="col-img" alt="img-info" />
            <img className="col-img" src={info2} alt="img-info" />
          </div>
        </div>
      </section>
      <section className="section-white">
        <div className="contenedor">
          <div className="col-text">
            <p className="titulo">¿Cómo deja de sangrar el cuerpo normalmente?
            </p>
            <p>El cuerpo forma un coágulo (tapón) para detener el flujo de sangre. Los coágulos de sangre se forman utilizando células diminutas conocidas como plaquetas y proteínas llamadas factores de coagulación .</p>
          </div>
          <div className="col-text">
            <p className="titulo">¿Qué sucede en las personas con trastornos hemorrágicos?</p>
            <p>Es posible que la sangre no tenga suficientes factores de coagulación o que no estén funcionando como deberían. Estos problemas pueden evitar que se forme un coágulo, por lo que el sangrado continúa.</p>
          </div>
        </div>
      </section>
      <section className="section-white"><div className="contenedor cuadro-azul">
        <h4>Si el sangrado ocurre dentro del cuerpo, los síntomas pueden ser más difíciles de notar.
          Por ejemplo, el sangrado en las articulaciones puede manifestarse como hinchazón o dolor en las articulaciones.
        </h4>
      </div></section>
    </React.Fragment >
  );
}

export default Transtornos;
