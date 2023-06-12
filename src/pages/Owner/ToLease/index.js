import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../../components/Head/Head';
import LayoutSection from '../../../components/Section/LayoutSection';
import HeroSection from '../../../components/Section/Owner/ToLease/HeroSection';
import WhyLease from '../../../components/Section/Owner/ToLease/WhyLease';
import CustomerExperience from '../../../components/Section/CustomerExperience/CustomerExperience';

const ToLeaseComponent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/soy-propietario/quiero-arrendar') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

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
