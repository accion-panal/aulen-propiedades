import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../../components/Head/Head';
// import Layout from './Layout';
import LayoutSection from '../../../components/Section/LayoutSection';
import HeroSection from '../../../components/Section/Owner/ToSell/HeroSection';
import StepsSection from '../../../components/Section/Owner/ToSell/StepsSection';
import Plans from '../../../components/Section/Owner/ToSell/Plans';
import CustomerExperience from '../../../components/Section/CustomerExperience/CustomerExperience';

const ToSellComponent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/soy-propietario/quiero-vender') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Quiero vender" />
        <LayoutSection>
          <HeroSection />
          <StepsSection />
          <Plans />
        </LayoutSection>
      <CustomerExperience />
    </Fragment>
  );
};

export default ToSellComponent;
