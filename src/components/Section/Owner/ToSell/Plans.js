import React from 'react';
import { Fade } from 'react-awesome-reveal';
import HeaderSection from '../../HeaderSection';
import PlanCard from '../../../Card/PlanCard';
import { plansData } from '../../../../data/plans';
import styles from '../../../../styles/Section/Plans/Plans.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Plans = () => {
  return (
    <Row className={`${styles.rowContainer} justify-content-center`}>
      <Col md={12} xl={9} className={styles.col}>
        <HeaderSection titleSection="Conoce nuestros planes" />
        <br/>
        <Fade cascade>
          <Row className={styles.rowItems} style={{gap:'1rem 0'}}>
            {plansData &&
              plansData.map((plan) => <PlanCard key={plan?.id} plan={plan} />)}
          </Row>
        </Fade>
      </Col>
    </Row>
  );
};

export default Plans;
