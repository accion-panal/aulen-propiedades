import React, { Fragment } from 'react';
import Head from '../../components/Head/Head';
import LayoutSection from '../../components/Section/LayoutSection';
import HeaderSection from '../../components/Section/HeaderSection';
import style from '../../styles/Section/about/nosotros.module.css';
import ContactForm from '../../components/Forms/ContactForm';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const About = () => {
  const SoldHomeImg = 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1692306035/Projects/aulen/nosotros/Nosotros.webp';
  return (
    <Fragment>
      <Head
        title="Nosotros"
        description="Somos una empresa dedicada a la asesoría e intermediación de compra, arriendo y administración de propiedades, tanto para personas naturales como jurídicas en el territorio chileno"
        keywords="Aulen, propiedades, plataforma de corretaje, propiedades, departamentos, herramientas, venta de propiedades, corredores, recursos, corretaje"
      />
      <LayoutSection>
        <div className={style.generalContainer}>
          <HeaderSection titleSection="Nosotros" />
          <div className='flex justify-center'>
            <Row className={style.rowContainer}>
              <Col xl={5}>
                <img src={SoldHomeImg} className={style.image} alt="Sold Home"/>
              </Col>
              <Col xl={7}>
                <div className={style.textContainer}>
                  <p>
                    Entregamos servicios de asesoría e intermediación de compra, arriendo y administración inmobiliaria a nuestros clientes, a partir del reconocimiento de sus necesidades, la evaluación del mercado; convirtiéndonos de esta forma en un apoyo en la definición de la estrategia. 
                    <br/>
                    <br/>
                    Nuestro equipo de trabajo vela por el cumplimiento de las gestiones definidas en cada estrategia en forma oportuna, transparente e informada entre las partes involucradas en cada negocio. 
                    <br/>
                    <br/>
                    Nuestro trabajo, esfuerzo y compromiso se enfocan en conquistar la confianza por parte de nuestros clientes.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className={style.generalContainer}>
          <div className='flex justify-center'>
            <Row className={`${style.rowContainer}`}>
              <Col xl={6}>
                <ContactForm />
              </Col>
              <Col xl={6}>
                <div className={style.infoContainer}>
                  <div>
                    <h3>Horario de atención</h3>
                    <p>De Lunes a viernes de 08:30 a 18:00 hrs.</p>
                  </div>
                  <div>
                    <h3>Dirección</h3>
                    <p>De Lunes a viernes de 08:30 a 18:00 hrs.</p>
                  </div>
                  <div>
                    <h3>Teléfono</h3>
                    <p>+56 2 6469 1800</p> 
                    <p>+56 9 3291 0591</p>
                  </div>
                  <div>
                    <h3>Correo</h3>
                    <p>info@aulenpropiedades.cl</p>
                  </div>

                </div>
              </Col>
            </Row>
          </div>
          
        </div>
      </LayoutSection>
    </Fragment>
  );
};

export default About;
