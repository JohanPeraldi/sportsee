import React from 'react';
import PropTypes from 'prop-types';
import caloriesIcon from '../../assets/svg/calories-icon.svg';
import carbsIcon from '../../assets/svg/carbs-icon.svg';
import fatIcon from '../../assets/svg/fat-icon.svg';
import proteinIcon from '../../assets/svg/protein-icon.svg';
import styles from './Macros.module.scss';

/**
 * Creates a React component.
 * @param { Object } props
 * @returns { HTMLElement }
 */
export default function Macros(props) {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    // eslint-disable-next-line react/destructuring-assignment
    props.data;

  return (
    <article className={styles.macros}>
      <section className={styles.macro}>
        <div className={styles.logo}>
          <img src={caloriesIcon} alt="Calories Icon" />
        </div>
        <div className={styles.text}>
          <b className={styles.amount}>{calorieCount}kCal</b>
          <span className={styles.indicator}>Calories</span>
        </div>
      </section>
      <section className={styles.macro}>
        <div className={styles.logo}>
          <img src={proteinIcon} alt="Protein Icon" />
        </div>
        <div className={styles.text}>
          <b className={styles.amount}>{proteinCount}g</b>
          <span className={styles.indicator}>Protéines</span>
        </div>
      </section>
      <section className={styles.macro}>
        <div className={styles.logo}>
          <img src={carbsIcon} alt="Carbs Icon" />
        </div>
        <div className={styles.text}>
          <b className={styles.amount}>{carbohydrateCount}g</b>
          <span className={styles.indicator}>Glucides</span>
        </div>
      </section>
      <section className={styles.macro}>
        <div className={styles.logo}>
          <img src={fatIcon} alt="Fat Icon" />
        </div>
        <div className={styles.text}>
          <b className={styles.amount}>{lipidCount}g</b>
          <span className={styles.indicator}>Lipides</span>
        </div>
      </section>
    </article>
  );
}

Macros.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }).isRequired,
};
