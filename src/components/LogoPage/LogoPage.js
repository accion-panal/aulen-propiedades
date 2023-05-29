import React from 'react';
import LogoAulenPropiedades from '../../assets/img/LogoSite/LOGO-AULEN-PROPIEDADES.png';
import styles from '../../styles/Layout/Logo.module.css';

const LogoPage = () => {
  return (
    <img
      src={LogoAulenPropiedades}
      alt="logo-aulen-propiedades"
      className={styles.logo}
    />
  );
};

export default LogoPage;
