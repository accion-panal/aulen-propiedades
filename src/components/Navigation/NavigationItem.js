import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from '../../styles/Layout/NavigationItem.module.css';

/** Bootstrap components */
import Dropdown from 'react-bootstrap/Dropdown';

const NavigationItem = ({ navItem }) => {
  const { pathname } = useLocation();
  const { name, url, submenu } = navItem;
  const hasdropDownData = navItem?.submenu;

  return hasdropDownData?.length > 0 ? (
    <Dropdown className={styles.dropdown}>
      <Dropdown.Toggle
        id="dropdown-basic"
        className={`${styles.dropdownToggle}`}
      >
        {name}
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dropdownMenu}>
        {submenu &&
          submenu.map((item, idx) => (
            <Link
              to={item?.url}
              key={idx}
              className={
                pathname === item.url
                  ? styles.dropdownItemActived
                  : styles.dropdownItem
              }
            >
              {item?.name}
            </Link>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <Link
      to={url}
      className={pathname === url ? styles.navItemActive : styles.navItem}
      target={url === 'http://www.kiteprop.com' ? '_blank' : ''}
    >
      {name}
    </Link>
  );
};

export default NavigationItem;
