import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { icons } from '../../Icons';
import AboutImg from '../../../assets/img/About/about.png';
import styles from '../../../styles/Section/Inicio/About.module.css';
import Form from './FormMain';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
  const { TfiFacebook, BsInstagram, AiFillYoutube } = icons;
  return (
    <Fade delay={300}>
      <div className={styles.aboutContainer}>
        <Row className={styles.rowAbout}>
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
    </Fade>
  );
};

export default Contact;
