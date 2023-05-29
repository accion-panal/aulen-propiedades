import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/Layout/Footer.module.css';

const Navigation = () => {
  return (
    <div className={styles.navigationFooterContainer}>
      <div className={styles.navigationFooterInfoSection}>
        <Link
          to="/soy-propietario/quiero-arrendar"
          className={styles.navLinkFooter}
        >
          Quiero arrendar
        </Link>
      </div>
      <div className={styles.navigationFooterInfoSection}>
        <Link
          to="/soy-propietario/quiero-vender"
          className={styles.navLinkFooter}
        >
          Quiero vender
        </Link>
      </div>
      <div className={styles.navigationFooterInfoSection}>
        <Link
          to="/soy-inversionista/quiero-invertir"
          className={styles.navLinkFooter}
        >
          Quiero invertir
        </Link>
      </div>
      <div className={styles.navigationFooterInfoSection}>
        <Link to="/contacto" className={styles.navLinkFooter}>
          Contáctanos
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
