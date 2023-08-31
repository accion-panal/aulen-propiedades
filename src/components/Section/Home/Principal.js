import React from 'react';
import { Fade } from 'react-awesome-reveal';
import HeaderSection from '../HeaderSection';
import Form from './FormMain';
import styles from '../../../styles/Section/Inicio/Principal.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Principal = () => {
  const Packaging = 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1692217818/Projects/aulen/inicio/INICIO__AULEN_CONTIGO_EN_CADA_PASO_alq4pe.webp';
  return (
    <div className={styles.principalContainer}>
      <Row className={styles.rowPlanForm}>
        <Col sm={12} lg={12} className={styles.principalCol}>

            <img
              width="100%"
              src={Packaging}
              alt="house"
              className={styles.principalImage}
            />
            <div className={styles.Container}>
              <div className={styles.textContainer}>
                <h2>
                  ¡AULÉN, CONTIGO EN CADA PASO!
                </h2>
                <p>
                  Vende o arrienda tu propiedad rápido y sin complicaciones
                </p>
              </div>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default Principal;
