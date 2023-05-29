import React, { Fragment } from 'react';
import Head from '../../components/Head/Head';
import Layout from '../../components/Section/AdminLease/Layout';
import LayoutSection from '../../components/Section/LayoutSection';
import SoldHome from '../../components/Section/AdminLease/SoldHome';
import StepsToRentDepartment from '../../components/Section/AdminLease/StepsToRentDepartment';
import Plans from '../../components/Section/Owner/ToSell/Plans';
import CustomerExperience from '../../components/Section/CustomerExperience/CustomerExperience';

const InvestorAdminComponent = () => {
  return (
    <Fragment>
      <Head title="Administración de arriendo" />

      <Layout>
        <LayoutSection>
          <SoldHome />
          <StepsToRentDepartment />
          <Plans />
        </LayoutSection>
      </Layout>

      <CustomerExperience />
    </Fragment>
  );
};

export default InvestorAdminComponent;
