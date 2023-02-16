import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RootNavigation.module.scss';

/**
 * Creates a React component.
 * @returns { HTMLElement }
 */
export default function RootNavigation() {
  const isMockedData = Boolean(process.env.REACT_APP_MOCKEDDATA);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sélectionnez un profil utilisateur</h1>
      {!isMockedData && (
        <>
          <h2>Utilisateurs réels</h2>
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
        </>
      )}
      {isMockedData && (
        <>
          <h2>Utilisateurs factices</h2>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to="/accueil/user/12">Annie</Link>
              </li>
              <li>
                <Link to="/accueil/user/18">Oscar</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
