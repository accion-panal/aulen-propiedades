import React from 'react';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../styles/Card/PlanCard.module.css';

const PlanCard = ({ plan }) => {
  const { id, name, supply, brokersInfo, characteristics } = plan;
  return (
    <Col xs={12} md={4} key={id} plan={plan} className={styles.colCard}>
      <Card className={styles.card} style={{height:'100%'}}>
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.cardTitle}>{name}</Card.Title>
          <div className={styles.supplyContainer}>
            <span className={styles.supply}>
              <strong>{supply}</strong>
            </span>
            <span className={styles?.brokersInfo}>{brokersInfo}</span>
          </div>

          <ul className={styles.characteristics}>
            {characteristics.map((characteristic, index) => (
              <li
                className={`${styles.characteristicsItem} text-md xl:text-lg`}
                key={index}
              >
                {characteristic}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PlanCard;
