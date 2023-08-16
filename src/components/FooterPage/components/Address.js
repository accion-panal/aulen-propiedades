import React from 'react';
import styles from '../../../styles/Layout/Footer.module.css';

const Address = () => {
  return (
    <div className={styles.addressFooterContainer}>
      <div className={styles.addressFooterInfoSection}>
        <h3 className={styles.addressFooterTitle}>Dirección:</h3>
        <p className={styles.addressFooterParagraph}>
          Asturias 171, Of. 101 Las Condes, Santiago.
        </p>
      </div>
      <div className={styles.addressFooterInfoSection}>
        <h3 className={styles.addressFooterTitle}>Teléfono:</h3>
        <p className={styles.addressFooterParagraph}>+56 2 6469 1800</p>
      </div>
      <div className={styles.addressFooterInfoSection}>
        <h3 className={styles.addressFooterTitle}>WhatsApp:</h3>
        <p className={styles.addressFooterParagraph}>+56 9 3291 0591</p>
      </div>
      <div className={styles.addressFooterInfoSection}>
        <h3 className={styles.addressFooterTitle}>Correo</h3>
        <p className={styles.addressFooterParagraph}>
          info@aulenpropiedades.cl
        </p>
      </div>
    </div>
  );
};

export default Address;
