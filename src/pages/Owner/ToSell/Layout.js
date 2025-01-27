import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import PublishingForm from '../../../components/Forms/PublishingForm';
import { publishingFormData } from '../../../data/publishingForm';
import styles from '../../../styles/Section/soy-propietario/quiero-vender/Layout.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = ({ children }) => {
  const [isScrolledPast, setScrolledPast] = useState(false);
  const [isScrolledPast2, setScrolledPast2] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        const isTop = window.scrollY > 50;
        const isTop2 = window.scrollY > 50 && window.scrollY > 1500;

        if (isTop !== isScrolledPast) {
          setScrolledPast(isTop);
        }

        if (isTop2 !== isScrolledPast2) {
          setScrolledPast2(isTop2);
        }
      },
      { passive: true }
    );
  }, [isScrolledPast, isScrolledPast2]);

  return (
    <Row className={styles.row}>
      <Col md={12} xl={10}>
        {children}
      </Col>
      <Col
        sm={12}
        lg={4}
        className={
          isScrolledPast
            ? isScrolledPast2
              ? styles.isScrolledPast2
              : styles.isScrolledPast
            : styles.rightCol
        }
      >
        <Fade cascade>
          {/* <PublishingForm formData={publishingFormData[0]} /> */}
        </Fade>
      </Col>
    </Row>
  );
};

export default Layout;
