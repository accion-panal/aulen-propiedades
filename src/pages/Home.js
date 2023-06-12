import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeComponent from './Home/index';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <HomeComponent />
    </Fragment>
  );
};

export default Home;
