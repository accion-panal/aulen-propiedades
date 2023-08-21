import React from 'react';
import { Fade } from 'react-awesome-reveal';
import FeaturesCard from './FeaturesCard';
import Steps from './Steps';
import PublishingForm from '../../../Forms/PublishingForm';
import OwnerLeaseForm from '../../../Forms/OwnerLeaseForm';
import { FeaturesData } from '../../../../data/featuresCard';
import { StepsData } from '../../../../data/stepsLease';
import { publishingFormData } from '../../../../data/publishingForm';

import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/WhyLease/WhyLease.module.css';

export const WhyLease = () => {
  return (
    <main
      className={`${styles.customRow} ${styles.mainWhyContainer} w-[95%] lg:w-[100%] mx-auto mb-8`}
    >
      <div className="block w-full h-full mt-5 p-5">
        <Fade cascade>
          <h2 className="flex justify-center text-center font-black text-5xl max-w-[29ch] mx-auto ">
            ¿Por qué arrendar tu propiedad con nosotros?
          </h2>
          <div className={`${styles.customRow}grid grid-cols-1  sm:mx-36 md:mx-56 lg:mx-0 lg:flex lg:justify-center  md:grid-cols-3 mb-5 mt-4 `}>
            <FeaturesCard features={FeaturesData} />
          </div>
        </Fade>

        <div>
          <div className="flex items-center">
            <div className="flex-1 border-b border-gray-200"></div>
            <div className="mx-3 text-gray-800 font-black text-6xl text-center">
              <h1>Arrienda en 3 simples pasos</h1>
            </div>
            <div className="flex-1 border-b border-gray-200"></div>
          </div>
          <Fade cascade>
            <div
              className={`${styles.customRow} ${styles.stepsContainer} flex flex-col md:flex-row`}
            >
              <Steps steps={StepsData} />
            </div>
          </Fade>
        </div>
      </div>
      {/* <OwnerLeaseForm formData={publishingFormData[0]} /> */}
    </main>
  );
};
export default WhyLease;
