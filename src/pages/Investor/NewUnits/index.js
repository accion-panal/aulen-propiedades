import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../../components/Head/Head';
import LayoutSection from '../../../components/Section/LayoutSection';
import Header from '../../../components/Section/Investor/NewUnits/Header';

const NewUnitsComponent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/soy-inversionista/unidades-nuevas') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Quiero vender" />

      <LayoutSection>
        <Header />
      </LayoutSection>
    </Fragment>
  );
};

export default NewUnitsComponent;
