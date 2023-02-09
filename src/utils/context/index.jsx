import { React, useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const DataContext = createContext();

/**
 * Creates a React component.
 * @param { Object } children
 * @returns { HTMLElement }
 */
export function DataProvider({ children }) {
  const [isMockedData, setIsMockedData] = useState(false);
  const toggleData = () => {
    setIsMockedData(isMockedData === false);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataContext.Provider value={{ isMockedData, toggleData }}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
