import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { icons } from '../../Icons';
import AboutImg from '../../../assets/img/About/about.png';
import styles from '../../../styles/Section/Inicio/About.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  const { TfiFacebook, BsInstagram, AiFillYoutube } = icons;
  return (
    <Fade delay={300}>
      <div className={styles.aboutContainer}>
        <Row className={styles.rowAbout}>
          <Col sm={12} lg={6}>
            <div className={styles.leftContent}>
              <ul>
                <li className="relative">
                  <span>Dirección:</span>
                  <p>Asturias 171, Of. 101, Las Condes, Santiago.</p>
                </li>
                <li className="relative">
                  <span>Teléfono :</span>
                  <p>+56 2 6469 1800</p>
                </li>
                <li className="relative">
                  <span>WhatsApp :</span>
                  <p>+56 9 3291 0591</p>
                </li>
                <li className="relative">
                  <span>Correo: </span>
                  <p>info@aulenpropiedades.cl</p>
                </li>
              </ul>
            </div>
          </Col>

          <div className={styles.aboutCentredContent}>
            <Fade delay={200} direction="left" cascade>
              <div className={styles.newPropertiesColAbsolute}>
                <img
                  src={AboutImg}
                  className={styles.aboutImg}
                  alt="imagen-nuevas-propiedades"
                  style={{
                    width: '100%',
                    height: '700px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </Fade>
          </div>

          <Col sm={12} lg={6} className={styles.newPropertiesCol}>
            {/* <Fade delay={200} direction="right" cascade> */}
            <div className={styles.rightContent}>
              <h2 className={styles.title}>Sobre Nosotros</h2>
              <p>
                Somos una empresa dedicada a la asesoría e intermediación de
                compra, arriendo y administración de propiedades, tanto para
                personas naturales como jurídicas en el territorio chileno
              </p>

              <p className={styles.followUs}>SÍGUENOS EN:</p>
              <ul className={styles.socialMediaNavbarNav}>
                <li>
                  <a
                    href="https://www.facebook.com/aulenpropiedades/?locale=es_LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 mx-1 relative bg-gray-500 hover:bg-gray-600 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <TfiFacebook className="text-xl" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/aulen_prop/?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 mx-1 relative bg-gray-500 hover:bg-gray-600 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <BsInstagram className="text-xl" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@aulenpropiedades3552"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 mx-1 relative bg-gray-500 hover:bg-gray-600 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <AiFillYoutube className="text-xl" />
                  </a>
                </li>
              </ul>
            </div>
            {/* </Fade> */}
          </Col>
        </Row>
      </div>
    </Fade>
  );
};

export default About;
