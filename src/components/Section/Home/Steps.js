import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import HeaderSection from '../../Section/HeaderSection';
import { stepsData } from '../../../data/steps';
import styles from '../../../styles/Section/Inicio/Steps.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Steps = () => {
  return (
    <div className={styles.stepContainer}>
      <HeaderSection titleSection="Vendemos tu propiedad en cuatro simples pasos" />
      <Row className={styles.rowPlanForm}>
        {stepsData?.length > 0
          ? stepsData.map((item) => (
              <Col
                key={item?.id}
                sm={12}
                lg={12}
                xl={3}
                className={styles.stepCol}
              >
                <Fade cascade>
                  <Card style={{ width: 'auto' }} className={styles.stepCard}>
                    <Card.Body className={styles.stepCardBody}>
                      <span className={styles.stepsIconContainer}>
                        <strong className={styles.stepsIcon}>
                          {item?.icon}
                        </strong>
                      </span>
                      <span className={styles.stepCardIdContainer}>
                        <strong className={styles.stepCardId}>
                          {item?.id}
                        </strong>
                      </span>
                      <Card.Title className={styles.stepCardTitle}>
                        {item?.title}
                      </Card.Title>
                      <Card.Text className={styles.stepCardDesc}>
                        {item?.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
            ))
          : null}

        <div className={styles.publishForFreeContainer}>
          <Fade cascade>
            <Link to="/soy-propietario/quiero-vender" className={styles.publishForFreeLink}>
              Publica gratis
            </Link>
          </Fade>
        </div>
      </Row>
    </div>
  );
};

export default Steps;
