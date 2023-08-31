import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { icons } from '../../../Icons';
import styles from '../../../../styles/Section/soy-propietario/quiero-vender/StepsSection/StepsSection.module.css';

const StepsSection = () => {
  const { BsPuzzle, BsCardChecklist, RiMoneyDollarCircleLine, BsFillGearFill } =
    icons;
  return (
    <section className={`grid grid-cols-1`}>
    <Fade cascade>
      <main className={`${styles.customCol} ${styles.mainContainer} mx-auto mb-5`}>
        <header className={`mt-10 text-center`}>
          <h1 className="text-3xl font-extrabold text-[#31254c] lg:text-6xl xl:text-5xl max-w-[25ch]">
            Vendemos tu propiedad en cuatro simples pasos
          </h1>
          <br></br>
    
        </header>
        <div className={`${styles.customCol} ${styles.iconDivsContainer}`}>
          <div className={`${styles.customRow} ${styles.stepsContainer}`}>
            <BsPuzzle className={`${styles.stepIcon}`} />
            <p>
              Presentamos un estudio estratégico de acuerdo a tus objetivos y
              necesidades, respaldado por las ventas históricas y ofertas del
              sector.
            </p>
          </div>
          <div className={`${styles.customRow} ${styles.stepsContainer}`}>
            <BsCardChecklist className={`${styles.stepIcon}`} />
            <p>
              Publicamos tu propiedad en los 30 portales inmobiliarios más
              importantes del país con sesión de fotos y vídeos profesionales
              para que tu activo tenga mayor alcance.
            </p>
          </div>
          <div className={`${styles.customRow} ${styles.stepsContainer}`}>
            <BsFillGearFill className={`${styles.stepIcon}`} />
            <p>
              Realizamos visitas con potenciales clientes a tu propiedad, para
              que recibas ofertas garantizadas.
            </p>
          </div>
          <div className={`${styles.customRow} ${styles.stepsContainer}`}>
            <RiMoneyDollarCircleLine className={`${styles.stepIcon}`} />
            <p>
              ¡Conseguimos a tu comprador ideal! Y te acompañamos en todo el
              proceso de post venta junto al respaldo de nuestro equipo legal
              hasta la entrega de la propiedad y liberación de valores.
            </p>
          </div>
        </div>
      </main>
    </Fade>
  </section>
    // <section className={`${styles.customCol} ${styles.stepSectionContainer}`}>
    //   <Fade cascade>
    //     <main className={`${styles.customCol} ${styles.mainContainer}`}>
    //       <header className={`mt-10 text-center`}>
    //         <h2 className="text-xl xl:text-3xl">
    //           Vendemos tu propiedad en cuatro simples pasos
    //         </h2>
    //         {/* <h3 className="text-sm text-gray-400">
    //           Evalúa en cuanto han vendido propiedades similares en tu sector
    //         </h3> */}
    //       </header>
    //       <div className={`${styles.customCol} ${styles.iconDivsContainer}`}>
    //         <div className={`${styles.customRow} ${styles.stepsContainer}`}>
    //           <BsPuzzle className={`${styles.stepIcon}`} />
    //           <p>
    //             Presentamos un estudio estratégico de acuerdo a tus objetivos y
    //             necesidades, respaldado por las ventas históricas y ofertas del
    //             sector.
    //           </p>
    //         </div>
    //         <div className={`${styles.customRow} ${styles.stepsContainer}`}>
    //           <BsCardChecklist className={`${styles.stepIcon}`} />
    //           <p>
    //             Publicamos tu propiedad en los 30 portales inmobiliarios más
    //             importantes del país con sesión de fotos y vídeos profesionales
    //             para que tu activo tenga mayor alcance.
    //           </p>
    //         </div>
    //         <div className={`${styles.customRow} ${styles.stepsContainer}`}>
    //           <BsFillGearFill className={`${styles.stepIcon}`} />
    //           <p>
    //             Realizamos vistas con potenciales clientes a tu propiedad, para
    //             que recibas ofertas garantizadas.
    //           </p>
    //         </div>
    //         <div className={`${styles.customRow} ${styles.stepsContainer}`}>
    //           <RiMoneyDollarCircleLine className={`${styles.stepIcon}`} />
    //           <p>
    //             ¡Conseguimos a tu comprador ideal! Y te acompañamos en todo el
    //             proceso de pos venta junto al respaldo de nuestro equipo legal
    //             hasta la entrega de la propiedad y liberación de valores.
    //           </p>
    //         </div>
    //       </div>
    //     </main>
    //   </Fade>
    // </section>
  );
};

export default StepsSection;
