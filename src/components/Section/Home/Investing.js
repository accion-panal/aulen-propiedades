import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import HeaderSection from '../../Section/HeaderSection';
import styles from '../../../styles/Section/Inicio/Investing.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Investing = () => {
  const AuctionProperties = 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1692217819/Projects/aulen/inicio/INICIO__PROPIEDADES_EN_REMATE_qmnzus.webp';
  return (
    <Fade delay={300}>
      <div className={styles.investingContainer}>
        <HeaderSection titleSection="¡Invierte en inmuebles con nosotros!" />
        <Row className={styles.rowPlanForm}>
          <Col sm={12} lg={12} xl={12} className={styles.investingCol}>
            <Fade cascade>
              <div className={styles.investingColContent}>
                <h2 className={styles.investingColTitle}>
                  Propiedades en remate
                </h2>
                <p>
                  Un modelo de inversión único en el mercado que genera hasta un
                  15% de rentabilidad por operación.
                </p>

                <p>
                  Invierte de manera segura, y cuenta con la asesoría de
                  expertos que te guiaran según tus objetivos, desde la elección
                  del inmueble hasta la capitalización de tu inversión.
                </p>
                <div className={styles.consultationContainer}>
                  <Link
                    to="/soy-inversionista/unidades-en-remate#ur-contacto"
                    className={styles.consultation}
                  >
                    Quiero una asesoría
                  </Link>
                </div>
              </div>
            </Fade>
          </Col>

          <div className={styles.investingColAbsolute}>
            <Fade cascade>
              <img
                src={AuctionProperties}
                alt="Propieda en remate"
                className={styles.investingImg}
              />
            </Fade>
          </div>
        </Row>
      </div>
    </Fade>
  );
};

export default Investing;
