import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RootNavigation.module.scss';

export default function RootNavigation() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sélectionnez un profil utilisateur</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/accueil/user/18">Cecilia</Link>
          </li>
          <li>
            <Link to="/accueil/user/12">Karl</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
