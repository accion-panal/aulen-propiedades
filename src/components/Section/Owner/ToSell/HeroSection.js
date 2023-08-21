import React from 'react';
import { Fade } from 'react-awesome-reveal';
import keyImg from '../../../../assets/img/SoyPropietario/key.jpg';
import PublishingForm from '../../../../components/Forms/PublishingForm';
import { publishingFormData } from '../../../../data/publishingForm';
import styles from '../../../../styles/Section/soy-propietario/quiero-vender/HeroSection/HeroSection.module.css';

export const HeroSection = () => {
  return (
    <header
    className={`grid grid-cols-1 md:justify-center text-center my-28 `}
  >

    <h1 className="flex py-4 font-extrabold text-[#31254c] text-3xl md:text-5xl  lg:max-w-[29ch] mx-auto lg:leading-[1.2em]">
      ¡Vende tu propiedad rápido y sin complicaciones!
    </h1>
    <div className={`grid grid-cols-1 md:mx-44 md:flex lg:mx-36 justify-center`}>
      <Fade cascade>    
          <img
            className={`${styles.imgHeader} w-full h-[400px] md:w-[920px] md:h-[560px]  lg:h-[542px] xl:w-[730px] xl:h-[535px] lg:mr-2`}
            src={'https://res.cloudinary.com/dvdb33uyj/image/upload/v1692217740/Projects/aulen/soy%20propietario/QUIERO_VENDER__VENDE_TU_PROPIEDAD_RAPIDO_Y_SIN_COMPLICACIONES_ztvjtq.webp'}
            alt="imagen-header" 
          />
        <PublishingForm formData={publishingFormData[0]} />

      </Fade>
    </div>
  </header>
);
  //   <header
  //     className={`${styles.customCol} ${styles.sellPageHeader} text-center mt-[5rem] xl:mt-[7rem]`}
  //   >
  //     <h1 className="text-xl xl:text-3xl mb-6 xl:mb-10">
  //       ¡Vende tu propiedad rápido y sin complicaciones!
  //     </h1>

  //     <div className={`${styles.customRow} ${styles.imgAndForm}`}>
  //       <Fade cascade>
  //         <div className={`${styles.customRow} ${styles.imgContainer}`}>
  //           <img
  //             className={`${styles.imgHeader}`}
  //             src={'https://res.cloudinary.com/dvdb33uyj/image/upload/v1692217740/Projects/aulen/soy%20propietario/QUIERO_VENDER__VENDE_TU_PROPIEDAD_RAPIDO_Y_SIN_COMPLICACIONES_ztvjtq.webp'}
  //             alt="imagen-header"
  //           />
  //         </div>
  //       </Fade>
  //     </div>
  //   </header>
  // );
};

export default HeroSection;
