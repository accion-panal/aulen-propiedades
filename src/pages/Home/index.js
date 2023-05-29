import React, { Fragment } from 'react';
import Head from '../../components/Head/Head';
import LayoutSection from '../../components/Section/LayoutSection';
import Principal from '../../components/Section/Home/Principal';
import Lease from '../../components/Section/Home/Lease';
import Steps from '../../components/Section/Home/Steps';
import Investing from '../../components/Section/Home/Investing';
import NewProperties from '../../components/Section/Home/NewProperties';
import AboutSection from '../../components/Section/Home/AboutSection';

const HomeComponent = () => {
  return (
    <Fragment>
      <Head
        title="Inicio"
        description="Somos una empresa dedicada a la asesoría e intermediación de compra, arriendo y administración de propiedades, tanto para personas naturales como jurídicas en el territorio chileno"
        keywords="Aulen, propiedades, plataforma de corretaje, propiedades, departamentos, herramientas, venta de propiedades, corredores, recursos, corretaje"
      />
      <LayoutSection>
        <Principal />
        <Lease />
        <Steps />
        <Investing />
        <NewProperties />
        <AboutSection />
      </LayoutSection>
    </Fragment>
  );
};

export default HomeComponent;
