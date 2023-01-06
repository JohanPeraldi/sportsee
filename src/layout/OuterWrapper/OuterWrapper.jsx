import PropTypes from 'prop-types';
import styles from './OuterWrapper.module.css';

export default function OuterWrapper(props) {
  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  );
}

OuterWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};
