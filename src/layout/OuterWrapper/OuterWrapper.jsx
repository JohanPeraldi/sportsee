import React from 'react';
import PropTypes from 'prop-types';
import styles from './OuterWrapper.module.scss';

/**
 * Creates a React component.
 * @param { Object } props
 * @returns { HTMLElement }
 */
export default function OuterWrapper(props) {
  const { children } = props;

  return <div className={styles.wrapper}>{children}</div>;
}

OuterWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};
