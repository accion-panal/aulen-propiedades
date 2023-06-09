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
      className={`${styles.customRow} ${styles.mainWhyContainer} w-[95%] lg:w-[85%] mx-auto`}
    >
      <div className={`${styles.customCol} ${styles.whyContainer}`}>
        <Fade cascade>
          <h2 className={`${styles.whyH2}`}>
            ¿Por qué arrendar tu propiedad con nosotros?
          </h2>
          <div className={`${styles.customRow}  flex flex-col md:flex-row`}>
            <FeaturesCard features={FeaturesData} />
          </div>
        </Fade>

        <div>
          <div className="flex items-center">
            <div className="flex-1 border-b border-gray-200"></div>
            <div className="mx-3 text-gray-800 font-bold text-2xl text-center">
              <h3>Arrienda en 3 simples pasos</h3>
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
      <OwnerLeaseForm formData={publishingFormData[0]} />
    </main>
  );
};
export default WhyLease;
