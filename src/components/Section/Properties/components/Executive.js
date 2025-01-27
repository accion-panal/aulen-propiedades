import React from 'react';
import { icons } from '../../../Icons';
import styles from '../../../../styles/Section/properties/details/Executive.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Executive = ({ propertyData }) => {
  const { MdOutlineMailOutline, BsTelephoneFill } = icons;
  const phoneNumber = propertyData?.realtor?.contactPhone || "9 3291 0591"  ;
  const whatsappBusinessLink = `https://wa.me/${phoneNumber}`;
  return (
    <div className={styles.executiveContainer}>
      <Row className={styles.row}>
        <Col md={9} className={styles.colDown}>
          <h4>Información del Corredor</h4>
          <p className={styles.realtor}>
            Agente:{' '}
            <span className="ml-1">
              {propertyData?.realtor?.name || 'Corredor no registrado'}{' '}
              {propertyData?.realtor?.lastName}
            </span>
          </p>

          <p className={styles.realtor}>
            <MdOutlineMailOutline className={styles.icon} />
            Correo: {' '}
            <span className="ml-1">
              {propertyData?.realtor?.mail ||
                'Correo electrónico no registrado'}
            </span>
          </p>

          <p className={styles.realtor}>
            <BsTelephoneFill className={styles.icon} />
            Teléfono celular:{' '}
            <span className="ml-1">
              {propertyData?.realtor?.contactPhone ||
                'Teléfono celular no registrado'}
            </span>
          </p>

          <div className={styles.realtorContact}>
            <a href={whatsappBusinessLink} target='_blank'
                rel="noopener noreferrer"
              >Contáctar</a>  
          </div>    
        </Col>
      </Row>
    </div>
  );
};

export default Executive;
