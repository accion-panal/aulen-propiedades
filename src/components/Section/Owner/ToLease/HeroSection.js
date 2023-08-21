import React from 'react';
import { Fade } from 'react-awesome-reveal';
// import OurServices from './OurServices';
import OwnerSellForm from '../../../Forms/OwnerSellForm';
import PublishingForm from '../../../Forms/PublishingForm';
import { publishingFormData }from "../../../../data/publishingForm";
import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/HeroSection/HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={`grid grid-cols-1 text-center my-28  `}>
    <div className={`${styles.customRow} ${styles.servicesContainer}`}>
      {/* <OurServices /> */}
    </div>
    <Fade >
      <h1 className={`flex py-4 font-extrabold text-[#31254c] text-3xl md:text-5xl  lg:max-w-[29ch] mx-auto `}>
            ¡Disfruta de la tranquilidad de arrendar tu propiedad con Aulen!
      </h1>
    </Fade>

    <div className={`grid grid-cols-1 md:mx-52 md:flex justify-center`}>
      <OwnerSellForm formData={publishingFormData[0]} className={`${styles.heroForm}`} />
      <Fade cascade>
        <img src={'https://res.cloudinary.com/dvdb33uyj/image/upload/v1692217740/Projects/aulen/soy%20propietario/QUIERO_ARRENDAR_1_aigtrf.webp'} alt="imagen-hero" className={`${styles.heroImage} w-full h-[400px] md:w-[920px] md:h-[560px]  lg:h-[535px] xl:w-[920px] xl:h-[540px]`} />
      </Fade>
    </div>
  </section>

  );
};

export default HeroSection;
