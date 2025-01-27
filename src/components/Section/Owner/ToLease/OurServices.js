import React, { Fragment } from 'react';
import { Fade } from 'react-awesome-reveal';
import IconNumber from './IconNumber';
import { OurServicesData } from '../../../../data/ourServices';
import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/OurServices/OurServices.module.css';


export const OurServices = () => {
  return (
    <Fragment>
      <section className='block px-36 lg:flex xl:flex justify-between lg:mt-18 lg:mb-18 lg:px-40 lg:gap-2'>
      {OurServicesData.length > 0
        ? OurServicesData?.map((el) => (
            <div
              key={el.id}
              className={`${styles.customCol} ${styles.OurServiceContainer}`}
              data-aos="fade-up"
              data-aos-delay={`${el.id * 100}`}
            >
              <Fade cascade>
                {el.img}
                <IconNumber elNumber={el.id} />
                <p className=' px-0 lg:px-3 text-center'>
                  <span className={`${styles.boldP}`}>{el.span}</span>
                  {el.p}
                </p>
              </Fade>
            </div>
          ))
        : null}
      </section>
      
    </Fragment>
  );
};

export default OurServices;
