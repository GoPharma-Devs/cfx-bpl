import React from "react";
import info1 from "../img/PLAQUETAS_ESQUEMAS_1-01.svg"
import info2 from "../img/PLAQUETAS_ESQUEMAS_2-02.svg"
import Articulacion from "../img/articulacion.svg"
import ProblemasS from "../img/problemas-sangrado.png";
//import VideoImg1 from "../img/PREVIEW_VIDEO_BPL_WEB_2.jpg"
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
              Puede que le sorprenda pero cualquiera de estos puede ser el resultado de un trastorno hemorrágico, es probable que tenga sangrados o moretones con facilidad, incluso se pueden presentar problemas para detener el sangrado, así como hinchazón o dolor en las articulaciones sin motivo aparente.
            </p>
            <p>
              Si usted cree que pudiera tener un trastorno hemorrágico puede obtener más información en esta página pero no olvide acudir con su médico para hablar acerca de sus síntomas y sobre realizarse la prueba.
            </p>
            <p>El diagnóstico oportuno y el tratamiento adecuado pueden ayudar a mejorar su calidad de vida.</p>
          </div>
          <div className="contendor-video">
            <iframe title="Transtornos Hemorragicos" className="video-preview" src="https://player.vimeo.com/video/658719436?h=1627dc7b25" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />

            <small>
              Los síntomas del trastorno hemorrágico pueden ser confusos o difíciles de entender, oberve este video para obtener más información.
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
              Hay varios síntomas que puede padcer un paciente con trastorno hemorrágico,  algunos son fáciles de identificar porque son evidentes como sangrar más de lo usual por una cortadura en la piel, sin embargo, hay sangrados que ocurren dentro del cuerpo (por ejemplo en las articulaciones), lo cual puede dificultar que sean reconocidos; aunado a esto los síntomas varían de leves (que no representan un peligro) a severos (que pueden poner en peligro la vida del paciente).
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
              <p className="titulod">Algunos síntomas que pueden presentarse en las mujeres son: </p>
              <ul>
                <li>Sangrado menstrual más abundante o con mayor prolongación durante su período. </li>
                <li>Complicaciones hemorrágicas durante el embarazo y/o el parto. </li>
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
                <li>Sangrado del cordón umbilical o al momento de realizar la circuncisión, el cual no cesa, incluso puede suceder que el cerebro o el estómago sangren sin razón aparente.</li>

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
              <li><img src={Articulacion} alt="img-list" />Hinchazón/dolor articular</li>
              <li><img src={Encias} alt="img-list" />Sangrado de las encías
              </li>
              <li><img src={Excesivo} alt="img-list" />Sangrado excesivo después de una lesión.</li>
              <li><img src={Cerebro} alt="img-list" />Sangrado en el cerebro</li>

            </ul>
          </div>
          <div className="cuadro-azul-cielo">
            <h3 className="titulod">¿Sabías?</h3>
            <p>Los síntomas del trastorno hemorrágico pueden causar molestias.</p>
            <ul>
              <li>Las personas con trastornos hemorrágicos a veces sienten dolor. </li>
              <li>El dolor puede ocurrir por diferentes motivos como: hinchazón ocasionada por el sangrado en una articulación o hematomas. </li>

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
          <p>Los trastornos hemorrágicos son un grupo de afecciones en las cuales las personas pueden sangrar más de lo usual, sangrar con facilidad o tener dificultades para detener el sangrado, este sangrado puede ocurrir dentro o fuera del cuerpo.

            <br />
            <br />
            Gráfico de la coagulación sanguínea normal.</p>
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
            <p>El cuerpo forma un coágulo (tapón) para detener el flujo de sangre. Los coágulos de sangre se forman utilizando células conocidas como plaquetas y proteínas llamadas factores de coagulación.</p>
          </div>
          <div className="col-text">
            <p className="titulo">¿Qué sucede en las personas con trastornos hemorrágicos?</p>
            <p>Es posible que la sangre no tenga suficientes factores de coagulación o que no estén funcionando como deberían. Estos problemas pueden evitar que se forme un coágulo, por lo que el sangrado continúa.</p>
          </div>
        </div>
      </section>
      <section className="section-white"><div className="contenedor cuadro-azul">
        <h4>Si el sangrado ocurre dentro del cuerpo los síntomas pueden ser más difíciles de notar, por ejemplo, el sangrado en las articulaciones puede manifestarse como hinchazón o dolor en el área afectada.
        </h4>
      </div></section>
      <section className="section">
        <div className="contenedor-col">
          <div className="transtornos-info">   <p className="titulod">¿Cómo se tratan los trastornos hemorrágicos?
          </p>
            <p>Por lo general, los trastornos hemorrágicos no se pueden curar pero muchos trastornos hemorrágicos pueden tratarse. El tratamiento dependerá del tipo de trastorno hemorrágico, ya que puede incluir medicamentos que reemplacen los factores de coagulación faltantes en la sangre, así como de la frecuencia con la que tenga síntomas y la gravedad de estos.

            </p>

          </div>
          <div className="col-tres">
            <div className="col-tres-el">
              <img src={Rutina} alt="img-col" />
              <p className="titulod">Tratamiento de rutina:</p>
              <ul>
                <li>Esto significa que debe tomar un medicamento de forma regular indicado por su médico para ayudar a prevenir el sangrado.</li>
                <li>Esta puede ser la opción correcta si padece regularmente de síntomas que afectan sus actividades diarias, le causan dolor o si tiene hemorragias severas. </li>
              </ul>
            </div>
            <div className="col-tres-el">
              <img src={Cirugia} alt="img-col" />
              <p className="titulod">Tratamiento con cirugía:</p>
              <ul>
                <li>En algunos casos se puede administrar un tratamiento para ayudar a prevenir el sangrado durante las cirugías, esto incluye cirugías dentales u otros procedimientos médico-quirúgicos en los que pudiera sangrar. </li>
                <li>Ésta puede ser la opción correcta incluso si los sangrados que usted presenta no son severos o no hay afección en las actividades que realiza diariamente. </li>
              </ul>
            </div>
            <div className="col-tres-el">
              <img src={Pedido} alt="img-col" />
              <p className="titulod">Tratamiento según sea necesario (a demanda):</p>
              <ul>
                <li>A veces, se administra un tratamiento cada vez que ocurre un sangrado. El tratamiento a demanda ayudax a detener una hemorragia después de que esta ha comenzado.</li>
                <li>Esta puede ser la opción si los sangrados se presentan rara vez, si el sangrado no afecta sus actividades diarias o si los sangrados no son severos. </li>
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
