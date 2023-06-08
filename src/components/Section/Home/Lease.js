import React from 'react';
import { Fade } from 'react-awesome-reveal';
import HeaderSection from '../../Section/HeaderSection';
import styles from '../../../styles/Section/Inicio/CardLease.module.css';
import { leaseData } from '../../../data/lease';

const Lease = () => {
  return (
    <Fade duration={400} delay={100} direction="top">
      <div className="">
        <HeaderSection titleSection="¡Nos encargamos de tu arriendo por ti!" />

        <div className={styles.container}>
          {leaseData?.length > 0
            ? leaseData.map((item) => (
                <div key={item.id} className={styles.card}>
                  <div className={styles.cardImage}>
                    <img className={styles.img} src={item.src} alt="" />
                  </div>
                  <div className={styles.cardDescription}>
                    <p className={styles.textTitle}>{item.title}</p>
                    <div className={styles.textBody}>
                      <ul className={styles.leaseUl}>
                        {item?.itemsList?.length > 0
                          ? item?.itemsList?.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))
                          : null}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </Fade>
  );
};

export default Lease;
