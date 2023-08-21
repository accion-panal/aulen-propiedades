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
          className={`grid grid-cols-1 my-1  bg-gray-200 py-1 px-2 w-[240px] rounded-3xl  md:flex  lg:w-[380px] lg:mx-9 hover:-translate-y-6 transition-all duration-700`}
        >    
          <div className={`${styles.customCol}`}>
            <IconNumber elNumber={el.id} />
            <span className={`${styles.steps__span}`}>{el.span}</span>
            <p className={`${styles.steps__p}`}> {el.p}</p>
          </div>
        </div>
            // <div
            //   key={el.id}
            //   className={`${styles.customRow} ${styles.stepsDiv} my-3 bg-gray-50 rounded-lg p-2`}
            // >
            //   <IconNumber elNumber={el.id} />
            //   <div className={`${styles.customCol}`}>
            //     <span className={`${styles.steps__span}`}>{el.span}</span>
            //     <p className={`${styles.steps__p}`}> {el.p}</p>
            //   </div>
            // </div>
          ))
        : null}
    </Fragment>
  );
};

export default Steps;
