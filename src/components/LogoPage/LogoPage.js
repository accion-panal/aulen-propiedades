import React from 'react';
import { Link } from 'react-router-dom';
import LogoAulenPropiedades from '../../assets/img/LogoSite/logoAulen.png';
import styles from '../../styles/Layout/Logo.module.css';

const LogoPage = () => {
  return (
    <>
      {LogoAulenPropiedades && (
        <Link to="/">
          <img
            src={LogoAulenPropiedades}
            alt="logo-aulen-propiedades"
            className={styles.logo}
          />
        </Link>
      )}
    </>
  );
};

export default LogoPage;
