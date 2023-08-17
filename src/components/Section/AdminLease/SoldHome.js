import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SoldHomeImg from '../../../assets/img/SoldHome/sold-home.jpg';
import styles from '../../../styles/Section/administracion-de-arriendo/SoldHome.module.css';
import PlanForm from '../../Forms/PlanForm';
import HeaderSection from '../HeaderSection';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SoldHome = () => {
  return (
    <div className={styles.rowContainerSoldHomePrueba}>
      <HeaderSection titleSection="¡Mantén tú depa ocupado y a ti desocupado!" />
      <Row className={styles.rowContainerSoldHome}>
        <Col xl={5}>
          <img src={SoldHomeImg} alt="Sold Home" className={styles.img} />
        </Col>
        <Col xl={7}>
          <PlanForm />
        </Col>
      </Row>
    </div>
    
  );
};

export default SoldHome;
