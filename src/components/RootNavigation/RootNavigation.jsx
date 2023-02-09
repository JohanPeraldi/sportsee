// import { React, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RootNavigation.module.scss';

export default function RootNavigation() {
  // const [mockedData, setMockedData] = useState(true);
  const mockedData = true;
  // const mockedData = false;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sélectionnez un profil utilisateur</h1>
      {/* <button type="button" onClick={setMockedData(false)}>
        Profils réels
      </button>
      <button type="button" onClick={setMockedData(true)}>
        Profils factices
      </button> */}
      {!mockedData && (
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
      {mockedData && (
        <>
          <h2>Utilisateurs factices</h2>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to="/accueil/user/500">Annie</Link>
              </li>
              <li>
                <Link to="/accueil/user/501">Oscar</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
