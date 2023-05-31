import React from 'react';
import { icons } from '../Icons';
import styles from '../../styles/DropdownSocialMedia/DropdownSocialMedia.module.css';

const DropDownSocialMedia = ({ isModalOpen, setIsModalOpen }) => {
  const { BsTelephoneFill, AiOutlineWhatsApp, BsPlusLg } = icons;

  return (
    <span className={styles.dropdownIconToggle}>
      <div className={styles.msNavContainer}>
        <ul className={styles.msNav}>
          <input
            type="checkbox"
            id="ms-menu"
            className={styles.msMenuToggle}
            name="ms-menu-toggle"
          />
          <div className={styles.bgChange}></div>

          <li className={`${styles.msLi} ${styles.msLi2} `}>
            <a href="https://www.whatsapp.com/?lang=es" target="_blank">
              <span className="fa fa-flask">
                <AiOutlineWhatsApp 
                  style={{
                    fontSize: '1.8rem',
                    position: 'relative',
                    top: '.25rem',
                    left: '.10rem',
                    right: '.80rem',
                  }}
                />
              </span>
            </a>
          </li>
          <li
            className={`${styles.msLi} ${styles.msLi1}`}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <a
              href="#"
              onClick={(ev) => {
                ev.preventDefault();
              }}
            >
              <span className="fa fa-fort-awesome">
                <BsTelephoneFill
                   style={{
                    fontSize: '1.9rem',
                    position: 'center',
                    top: '.15rem',
                    left: '.10rem',
                    right: '.10rem',
                  }}
                 />
              </span>
            </a>
          </li>
          <li className={styles.msMain}>
            <a href="#">
              <label className="ms-menu-toggle-lbl" htmlFor="ms-menu">
                <BsPlusLg
                  style={{
                    fontSize: '1.9rem',
                    color: '#fff',
                    position: 'relative',
                    top: '.90rem',
                    left: '.90rem',
                  }}
                />
              </label>
            </a>
          </li>
        </ul>
      </div>
    </span>
  );
};

export default DropDownSocialMedia;
