import React from 'react';
import { Outlet } from 'react-router-dom';
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav';
import VerticalNav from '../../components/VerticalNav/VerticalNav';
import InnerWrapper from '../../layout/InnerWrapper/InnerWrapper';
import OuterWrapper from '../../layout/OuterWrapper/OuterWrapper';
import styles from './Root.module.css';

export default function Root() {
  return (
    <main className={styles.main}>
      <HorizontalNav />
      <OuterWrapper>
        <VerticalNav />
        <InnerWrapper>
          <Outlet />
        </InnerWrapper>
      </OuterWrapper>
    </main>
  );
}
