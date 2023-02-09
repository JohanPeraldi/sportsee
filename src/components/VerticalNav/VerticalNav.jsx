import React from 'react';
import cyclingIcon from '../../assets/svg/cycling-icon.svg';
import meditatingIcon from '../../assets/svg/meditating-icon.svg';
import swimmingIcon from '../../assets/svg/swimming-icon.svg';
import weightIcon from '../../assets/svg/weight-icon.svg';
import styles from './VerticalNav.module.scss';

/**
 * Creates a React component.
 * @returns { HTMLElement }
 */
export default function VerticalNav() {
  const year = new Date().getFullYear();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li>
          <img src={meditatingIcon} alt="Meditating Icon" />
        </li>
        <li>
          <img src={swimmingIcon} alt="Swimming Icon" />
        </li>
        <li>
          <img src={cyclingIcon} alt="Cycling Icon" />
        </li>
        <li>
          <img src={weightIcon} alt="Weight Icon" />
        </li>
      </ul>
      <p className={styles.copyright}>Copyright, SportSee {year}</p>
    </nav>
  );
}
