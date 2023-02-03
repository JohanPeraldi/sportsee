import React from 'react';
import PropTypes from 'prop-types';
import styles from './OuterWrapper.module.css';

export default function OuterWrapper(props) {
  const { children } = props;

  return <div className={styles.wrapper}>{children}</div>;
}

OuterWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};
