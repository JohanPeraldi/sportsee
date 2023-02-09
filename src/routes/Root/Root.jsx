import React from 'react';
import { Outlet } from 'react-router-dom';
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav';
import VerticalNav from '../../components/VerticalNav/VerticalNav';
import InnerWrapper from '../../layout/InnerWrapper/InnerWrapper';
import OuterWrapper from '../../layout/OuterWrapper/OuterWrapper';
import { DataProvider } from '../../utils/context';

/**
 * Creates a React component.
 * @returns { HTMLElement }
 */
export default function Root() {
  return (
    <main>
      <DataProvider>
        <HorizontalNav />
        <OuterWrapper>
          <VerticalNav />
          <InnerWrapper>
            <Outlet />
          </InnerWrapper>
        </OuterWrapper>
      </DataProvider>
    </main>
  );
}
