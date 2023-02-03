import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalNav from '../HorizontalNav/HorizontalNav';
import InnerWrapper from '../../layout/InnerWrapper/InnerWrapper';
import OuterWrapper from '../../layout/OuterWrapper/OuterWrapper';
import VerticalNav from '../VerticalNav/VerticalNav';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  return (
    <main className={styles.main}>
      <HorizontalNav />
      <OuterWrapper>
        <VerticalNav />
        <InnerWrapper>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Oulala!</h1>
            <p className={styles.message}>
              `Désolé, cette page n&apos;existe pas.`
            </p>
            <p>
              <Link to="/">Retour à la page principale</Link>
            </p>
          </div>
        </InnerWrapper>
      </OuterWrapper>
    </main>
  );
}
