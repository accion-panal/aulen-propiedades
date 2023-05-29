import React, { Fragment } from 'react';
import HeaderSection from '../../../components/Section/Investor/AuctionUnits/HeaderSection';
import LayoutSection from '../../../components/Section/LayoutSection';
import HeroSection from '../../../components/Section/Investor/AuctionUnits/HeroSection';
import InvestmentForm from '../../../components/Forms/InvestmentForm';
import { investmentFormData } from '../../../data/investmentForm';
import CustomerExperience from '../../../components/Section/CustomerExperience/CustomerExperience';

const AuctionUnitsComponent = () => {
  return (
    <Fragment>
      <LayoutSection>
        <HeaderSection />
        <HeroSection />

        <div
          id="ur-contacto"
          style={{
            margin: '10rem 0',
          }}
        >
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
