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
      <HeaderSection
        titleSection="¡Aulén, contigo en cada paso!"
        fontSize="3xl"
      />

      <Row className={styles.rowPlanForm}>
        <Col sm={12} lg={6} className={styles.principalCol}>
          <Fade cascade>
            <img
              width="100%"
              src={Packaging}
              alt="house"
              className={styles.principalImage}
            />
          </Fade>
        </Col>

        <Col sm={12} lg={6} className={styles.principalCol}>
          <Fade cascade>
            <Form
              titleContentForm="Vende o arrienda tu propiedad rápido y sin complicaciones"
              textAlign="center"
              subtitle=""
              haveAction1={{
                text: 'QUIERO VENDER',
              }}
              haveAction2={{
                text: 'QUIERO ARRENDAR',
              }}
            />
          </Fade>
        </Col>
      </Row>
    </div>
  );
};

export default Principal;
