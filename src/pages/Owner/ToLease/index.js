import React, { Fragment } from 'react';
import Head from '../../../components/Head/Head';
import LayoutSection from '../../../components/Section/LayoutSection';
import HeroSection from '../../../components/Section/Owner/ToLease/HeroSection';
import WhyLease from '../../../components/Section/Owner/ToLease/WhyLease';
import CustomerExperience from '../../../components/Section/CustomerExperience/CustomerExperience';

const ToLeaseComponent = () => {
  return (
    <Fragment>
      <Head title="Quiero arrendar" />

      <LayoutSection>
        <HeroSection />
        <WhyLease />
      </LayoutSection>

      <CustomerExperience />
    </Fragment>
  );
};

export default ToLeaseComponent;
