import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../../Icons';
import styles from '../../../styles/Layout/Footer.module.css';

const SocialMedia = () => {
  const { TfiFacebook, BsInstagram, AiFillYoutube } = icons;
  return (
    <div className={styles.socialMediaFooterContainer}>
      <div className={styles.socialMediaTopInfo}>
        <h3>Síguenos en:</h3>
      </div>
      <ul className={styles.socialMediaNavbarNav}>
        <li>
          <a
            href="https://www.facebook.com/aulenpropiedades/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mb-2 mx-1 bg-gray-500 hover:bg-gray-600 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
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
            className="mb-2 mx-1 bg-gray-500 hover:bg-gray-600 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
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
            className="mb-2 mx-1 bg-gray-500 hover:bg-gray-600 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <AiFillYoutube className="text-xl" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
