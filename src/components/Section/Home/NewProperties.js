import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import styles from '../../../styles/Section/Inicio/NewProperties.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewProperties = () => {
  const SoldHome = 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1692217819/Projects/aulen/inicio/INICIO__PROPIEDADES_NUEVAS_y3ddu8.webp';
  return (
    <Fade delay={300}>
      <div className={styles.newPropertiesContainer}>
        <Row className={styles.rowNewProperties}>
          <Col sm={12} lg={6} xl={6} className={styles.newPropertiesCol}>
            <Fade cascade>
              <div className={styles.newPropertiesColAbsolute}>
                <img
                  src={SoldHome}
                  className={styles.newPropertiesImg}
                  alt="imagen-nuevas-propiedades"
                />
              </div>
            </Fade>
          </Col>

          <Col sm={12} lg={6} xl={6} className={styles.newPropertiesCol}>
            <Fade cascade>
              <div className={styles.newPropertiesColContent}>
                <h2 className={styles.newPropertiesColTitle}>
                  Propiedades nuevas
                </h2>
                <p>
                  Invierte en propiedades nuevas en blanco, verde o de entrega inmediata, para que tu activo pueda generar ganancias luego de arrendarla y con el tiempo plusvalía.
                </p>
                <div className={styles.consultationContainer}>
                  <Link
                    // to="/soy-inversionista/unidades-nuevas#un-contacto"
                    to="/soy-inversionista/unidades-nuevas"
                    className={styles.consultation}
                  >
                    Quiero una asesoría
                  </Link>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
    </Fade>
  );
};

export default NewProperties;
