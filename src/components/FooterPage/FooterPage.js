import React from 'react';
import AboutFooter from './components/About';
import AddressFooter from './components/Address';
import NavigationFooter from './components/Navigation';
import SocialMediaFooter from './components/SocialMedia';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Layout/Footer.module.css';

const FooterPage = () => {
  return (
    <footer className={styles.footerContainer}>
      <Row>
        <Col xs={12} sm={6} xl={3}>
          <AboutFooter />
        </Col>
        <Col xs={12} sm={6} xl={3}>
          <AddressFooter />
        </Col>
        <Col xs={12} sm={6} xl={3}>
          <NavigationFooter />
        </Col>
        <Col xs={12} sm={6} xl={3}>
          <SocialMediaFooter />
        </Col>
      </Row>
      <hr style={{color:'white'}}/>
      <p className={styles.textContainer}>
        Diseño y desarrollo por<a href='https://accionpanal.cl/' target='_blank'> accionpanal.cl</a>
      </p>
    </footer>
  );
};

export default FooterPage;
