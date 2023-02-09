import React from 'react';
import PropTypes from 'prop-types';
import styles from './InnerWrapper.module.scss';

/**
 * Creates a React component.
 * @param { Object } props
 * @returns { HTMLElement }
 */
export default function InnerWrapper(props) {
  const { children } = props;

  return <div className={styles.wrapper}>{children}</div>;
}

InnerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
