import React from 'react';
import { Fade } from 'react-awesome-reveal';
import OurServices from './OurServices';
import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/HeroSection/HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={`${styles.customRow} ${styles.sectionHeroContainer}`}>
      <div className={`${styles.customRow} ${styles.servicesContainer}`}>
        {/* <OurServices /> */}
      </div>

      <div className={`${styles.customCol} ${styles.headerContainer}`}>
        <Fade cascade>
          <h1 className={`${styles.heroH1}`}>
            ¡Disfruta de la tranquilidad de arrendar tu propiedad con Aulen!
          </h1>
          <img src={'https://res.cloudinary.com/dvdb33uyj/image/upload/v1692217740/Projects/aulen/soy%20propietario/QUIERO_ARRENDAR_1_aigtrf.webp'} alt="imagen-hero" className={`${styles.heroImage}`} />
        </Fade>
      </div>
    </section>
  );
};

export default HeroSection;
