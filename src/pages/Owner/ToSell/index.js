import React, { Fragment } from 'react';
import Head from '../../../components/Head/Head';
import Layout from './Layout';
import LayoutSection from '../../../components/Section/LayoutSection';
import HeroSection from '../../../components/Section/Owner/ToSell/HeroSection';
import StepsSection from '../../../components/Section/Owner/ToSell/StepsSection';
import Plans from '../../../components/Section/Owner/ToSell/Plans';
import CustomerExperience from '../../../components/Section/CustomerExperience/CustomerExperience';

const ToSellComponent = () => {
  return (
    <Fragment>
      <Head title="Quiero vender" />

      <Layout>
        <LayoutSection>
          <HeroSection />
          <StepsSection />
          <Plans />
        </LayoutSection>
      </Layout>

      <CustomerExperience />
    </Fragment>
  );
};

export default ToSellComponent;
