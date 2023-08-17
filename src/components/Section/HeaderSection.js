import React from 'react';
import styles from '../../styles/Section/HeaderSection.module.css';

const HeaderSection = ({ titleSection, fontSize }) => {
  return (
    <div className={`${styles.containerSection} text-xl xl:text-5xl`}>
      <h2 className={''}>
        {titleSection || ''}
      </h2>
    </div>
  );
};

export default HeaderSection;
