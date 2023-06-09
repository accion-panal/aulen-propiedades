import React, { Fragment } from 'react';
import IconNumber from './IconNumber';
import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/Steps/Steps.module.css';

const Steps = ({ steps }) => {
  return (
    <Fragment>
      {steps.length > 0
        ? steps.map((el) => (
            <div
              key={el.id}
              className={`${styles.customRow} ${styles.stepsDiv} my-3 bg-gray-50 rounded-lg p-2`}
            >
              <IconNumber elNumber={el.id} />
              <div className={`${styles.customCol}`}>
                <span className={`${styles.steps__span}`}>{el.span}</span>
                <p className={`${styles.steps__p}`}> {el.p}</p>
              </div>
            </div>
          ))
        : null}
    </Fragment>
  );
};

export default Steps;
