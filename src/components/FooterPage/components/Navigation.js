import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/Layout/Footer.module.css';

const Navigation = () => {
  const phoneNumber = '56948636470';
  const whatsappBusinessLink = `https://wa.me/${phoneNumber}`;

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
          to="/soy-inversionista/unidades-en-remate#ur-contacto"
          className={styles.navLinkFooter}
        >
          Quiero invertir
        </Link>
      </div>
      <div className={styles.navigationFooterInfoSection}>
        <a
          href={whatsappBusinessLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navLinkFooter}
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
};

export default Navigation;
