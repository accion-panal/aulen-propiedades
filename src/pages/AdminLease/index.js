import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import Layout from '../../components/Section/AdminLease/Layout';
import LayoutSection from '../../components/Section/LayoutSection';
import SoldHome from '../../components/Section/AdminLease/SoldHome';
import StepsToRentDepartment from '../../components/Section/AdminLease/StepsToRentDepartment';
import Plans from '../../components/Section/Owner/ToSell/Plans';
import CustomerExperience from '../../components/Section/CustomerExperience/CustomerExperience';

const InvestorAdminComponent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/administracion-de-arriendo') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Administración de arriendo" />


      <LayoutSection>
        <SoldHome />
        <StepsToRentDepartment />
        <Plans />
        <CustomerExperience />
      </LayoutSection>
    </Fragment>
  );
};

export default InvestorAdminComponent;
