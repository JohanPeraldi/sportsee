import PropTypes from 'prop-types';
import styles from './InnerWrapper.module.css';

export default function InnerWrapper(props) {
  return <div className={styles.wrapper}>{props.children}</div>;
}

InnerWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};
