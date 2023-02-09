import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

/**
 * Creates a React component.
 * @param { Object } props
 * @returns { HTMLElement }
 */
export default function Header(props) {
  const { firstName } = props;

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Bonjour <span className={styles.name}>{firstName}</span>
      </h1>
      <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
};
