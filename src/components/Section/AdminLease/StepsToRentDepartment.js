import React from 'react';
import HeaderSection from '../HeaderSection';
import StepCard from '../../Card/StepCard';
import { stepsToRentDepartmentData } from '../../../data/stepsToRentDepartment';
import styles from '../../../styles/Section/administracion-de-arriendo/SoldHome.module.css';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const StepsToRentDepartment = () => {
  return (
    <Row className={`${styles.rowContainer} justify-content-center`}>
      <Col xl={8} className={styles.col}>

        <Row className={styles.rowItems}>
          {stepsToRentDepartmentData &&
            stepsToRentDepartmentData.map((step) => (
              <StepCard key={step?.id} step={step} />
            ))}
        </Row>
      </Col>
    </Row>
  );
};

export default StepsToRentDepartment;
