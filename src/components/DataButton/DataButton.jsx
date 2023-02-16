import React, { useContext } from 'react';
import { DataContext } from '../../utils/context';
import styles from './DataButton.module.scss';

/**
 * Creates a React component.
 * @returns { HTMLElement }
 */
export default function DataButton() {
  const { isMockedData, toggleData } = useContext(DataContext);
  const oppositeDataState = isMockedData === true ? 'réelles' : 'factices';
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          toggleData();
        }}
      >
        Utiliser les données {oppositeDataState}
      </button>
    </div>
  );
}
