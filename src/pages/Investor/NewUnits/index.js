import React, { Fragment } from 'react';
import Head from '../../../components/Head/Head';
import LayoutSection from '../../../components/Section/LayoutSection';
import Header from '../../../components/Section/Investor/NewUnits/Header';

const NewUnitsComponent = () => {
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
