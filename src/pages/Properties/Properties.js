import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import LayoutSection from '../../components/Section/LayoutSection';
import PropertiesComponent from '../../components/Section/Properties';

const Properties = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/propiedades') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <LayoutSection className="relative flex flex-col md:flex-row">
      <Head title="Propiedades" />
      <PropertiesComponent />
    </LayoutSection>
  );
};

export default Properties;
