import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderSection from '../../../components/Section/Investor/AuctionUnits/HeaderSection';
import LayoutSection from '../../../components/Section/LayoutSection';
import HeroSection from '../../../components/Section/Investor/AuctionUnits/HeroSection';
import InvestmentForm from '../../../components/Forms/InvestmentForm';
import { investmentFormData } from '../../../data/investmentForm';
import CustomerExperience from '../../../components/Section/CustomerExperience/CustomerExperience';

const AuctionUnitsComponent = () => {
  const location = useLocation();

  useEffect(() => {
    if (`${location.pathname}` === '/soy-inversionista/unidades-en-remate')
      window.scrollTo({ top: 0, behavior: 'smooth' });

    if (
      `${location.pathname}${location.hash}` ===
      '/soy-inversionista/unidades-en-remate#ur-contacto'
    )
      window.scrollTo({ top: 1100, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (
    <Fragment>
      <LayoutSection>
        <HeaderSection />
        <HeroSection />

        <div id="ur-contacto">
          {investmentFormData?.length > 0
            ? investmentFormData?.map((el, index) => (
                <InvestmentForm key={index} formData={el} isForm />
              ))
            : null}
        </div>
      </LayoutSection>

      <CustomerExperience />
    </Fragment>
  );
};

export default AuctionUnitsComponent;
