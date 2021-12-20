import React from "react";
import info1 from "../img/PLAQUETAS_ESQUEMAS_1-01.svg"
import info2 from "../img/PLAQUETAS_ESQUEMAS_2-02.svg"
import Articulacion from "../img/articulacion.svg"
import ProblemasS from "../img/problemas-sangrado.png";
import VideoImg1 from "../img/PREVIEW_VIDEO_BPL_WEB_2.jpg"
import Rutina from "../img/rutina.svg"
import Cirugia from "../img/cirugia.svg";
import Pedido from "../img/apedido.svg"
import Moretones from "../img/moreton.svg";
import Nasales from "../img/nariz-sangrando.svg"
import Encias from "../img/encias.svg"
import Excesivo from "../img/excesivos.svg"
import Cerebro from "../img/cerebro.svg"
import Mujer from "../img/icon-woman.svg"
import Bebe from "../img/icon-baby.svg"
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
            <iframe src="https://player.vimeo.com/video/658719436?h=1627dc7b25" width={640} height={360} frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />

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
            src={ProblemasS}
            alt="Problemas con sangrado facil"
            className="hematomas2"
          />
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

        </div>
      </section>
      <section className="section-white">
        <div className="contenedor">
          <div className="col">
            <img
              src={Mujer}
              alt="sintomas en mujeres"
            />
            <div className="texto-col">
              <p className="titulod">Síntomas en mujeres:</p>
              <ul>
                <li>Sangrado más abundante o más prolongado durante los períodos que la mayoría de las otras mujeres (sangrado menstrual abundante)</li>
                <li>Complicaciones hemorrágicas durante el embarazo o el parto.</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <img
              src={Bebe}
              alt="Síntomas en mujeres"
            />
            <div className="texto-col">
              <p className="titulod">Síntomas en los recién nacidos:</p>
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
            <p className="titulo">Síntomas en cualquier persona:
            </p>
            <ul>
              <li><img src={Moretones} alt="img-list" />Moretones con facilidad</li>
              <li><img src={Nasales} alt="img-list" />Hemorragias nasales</li>
              <li><img src={Articulacion} alt="img-list" />Hinchazón / dolor articular</li>
              <li><img src={Encias} alt="img-list" />Sangrado de las encías
              </li>
              <li><img src={Excesivo} alt="img-list" />Sangrado excesivo después de una lesión.</li>
              <li><img src={Cerebro} alt="img-list" />Sangrado en el cerebro</li>

            </ul>
          </div>
          <div className="cuadro-azul-cielo">
            <h3 className="titulod">¿Sabías?</h3>
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
      <section className="section">
        <div className="contenedor-col">
          <div className="transtornos-info">   <p className="titulod">¿Cómo se tratan los trastornos hemorrágicos?
          </p>
            <p>Por lo general, los trastornos hemorrágicos no se pueden curar. Pero muchos trastornos hemorrágicos pueden tratarse. El tratamiento depende del trastorno hemorrágico. Puede incluir medicamentos que reemplacen los factores de coagulación que faltan en la sangre.

            </p>

            <p>El tipo de tratamiento necesario depende de la frecuencia con la que tenga síntomas y de su gravedad.

            </p></div>
          <div className="col-tres">
            <div className="col-tres-el">
              <img src={Rutina} alt="img-col" />
              <p className="titulod">Tratamiento de rutina:</p>
              <ul>
                <li>Algunos trastornos hemorrágicos se pueden tratar con un tratamiento de rutina. Esto significa que debe tomar un medicamento, según las indicaciones de su médico, para ayudar a prevenir el sangrado antes de que suceda.</li>
                <li>Esta puede ser la opción correcta si sus síntomas son regulares, afectan sus actividades diarias, le causan dolor o si tiene hemorragias muy graves (graves).</li>
              </ul>
            </div>
            <div className="col-tres-el">
              <img src={Cirugia} alt="img-col" />
              <p className="titulod">Tratamiento con cirugía:</p>
              <ul>
                <li>En algunos casos, se puede administrar un tratamiento para ayudar a prevenir el sangrado con cirugías. Esto incluye cirugía dental u otros procedimientos en los que es posible sangrar.</li>
                <li>Ésta puede ser la opción correcta si puede sangrar más debido a la cirugía. Se puede elegir incluso si no tiene muchos síntomas de sangrado, porque podría sangrar más con la cirugía.</li>
              </ul>
            </div>
            <div className="col-tres-el">
              <img src={Pedido} alt="img-col" />
              <p className="titulod">Tratamiento según sea necesario (a pedido):</p>
              <ul>
                <li>A veces, se administra un tratamiento cada vez que sangra. El tratamiento según sea necesario puede ayudar a detener una hemorragia después de que comience.</li>
                <li>Esta puede ser la opción correcta si sangra muy raramente, si el sangrado no suele afectar su actividad diaria o si su sangrado no es severo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="contenedor">


          <p className="referencias"><strong>Referencias: 1.</strong>  Centers for Disease Control. What is von Willebrand disease? https://www.cdc.gov/ncbddd/vwd/facts.html. Reviewed October 28, 2019. Accessed October 22, 2020.
            <br />
            <strong>2.</strong> Centers for Disease Control. What is hemophilia? https://www.cdc.gov/ncbddd/hemophilia/facts.html. Reviewed July 17, 2020. Accessed October 22, 2020.</p>
        </div>
      </section>

    </React.Fragment >
  );
}

export default Transtornos;
