import React, { useState } from 'react';
import TableDetails from './TableDetails';
import styles from '../../../../styles/Section/properties/details/Characteristics.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Characteristics = ({ propertyData }) => {
  const { description } = propertyData;
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  const lineas = description.split('\n') || ["No cuenta con descripción"];
  const lineasIniciales = 5;
  const lineasVisibles = isOpen ? lineas.length : lineasIniciales;

  return (
    <div className={styles.characteristicsContainer}>
      <h2>Características del inmueble</h2>
      <Row>
        <Col lg={7}>
          <h6>Descripción</h6>
          <div className={styles.containerDescription}>
            {lineas.slice(0, lineasVisibles).map((linea, index) => (
              <p key={index} className={styles.description2}>{linea}</p>
            ))}
            {!isOpen && lineas.length > lineasIniciales && (
              <p>...</p>
            )}

            <Button onClick={toggleCollapse} className={styles.buttonCollapse}>
              {isOpen ? 'Cerrar' : 'Leer más'}
            </Button>
          </div>
        </Col>
        <Col lg={5} className={styles.tableDetailsContainer}>
          <TableDetails propertyData={propertyData} />
        </Col>
      </Row>
    </div>
  );
};

export default Characteristics;
