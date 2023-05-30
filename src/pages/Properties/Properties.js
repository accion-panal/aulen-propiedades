import React from 'react';
import Head from '../../components/Head/Head';
// import Section from '../../components/Section/Section';
import LayoutSection from '../../components/Section/LayoutSection';
import PropertiesComponent from '../../components/Section/Properties';

const Properties = () => {
  return (
    <LayoutSection className="relative flex flex-col md:flex-row">
      <Head title="Propiedades" />
      <PropertiesComponent />
    </LayoutSection>
  );
};

export default Properties;
