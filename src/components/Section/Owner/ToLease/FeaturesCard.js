import React, { Fragment } from 'react';
import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/FeaturesCard/FeaturesCard.module.css';

export const FeatureCard = ({ features }) => {
  return (
    <Fragment>
      {features.length > 0
        ? features?.map((el) => (
            <div
              key={el.id}
              className={`${styles.customCol} ${styles.cardContainer} shadow-2xl w-[250px] sm:w-[300px] md:w-[298px] transition-all duration-500 border-spacing-1 mb-3 rounded-[60px] overflow-hidden lg:mx-10 `}
              // className={`${styles.customCol} ${styles.cardContainer}`}
            >
              <div className={`${styles.customCol} ${styles.cardImgContainer}`}>
                {el.img}
              </div>
              <div
                className={`${styles.customCol} ${styles.cardTextContainer}`}
              >
                <h2 className={`${styles.card__h2}`}>{el.h2}</h2>
                <p className={`${styles.card__p}`}>{el.p}</p>
              </div>
            </div>
          ))
        : null}
    </Fragment>
  );
};
export default FeatureCard;
