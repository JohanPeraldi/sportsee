import React from 'react';
import PropTypes from 'prop-types';
import styles from './InnerWrapper.module.scss';

export default function InnerWrapper(props) {
  const { children } = props;

  return <div className={styles.wrapper}>{children}</div>;
}

InnerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
