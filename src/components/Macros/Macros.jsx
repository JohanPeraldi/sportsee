import caloriesIcon from '../../assets/svg/calories-icon.svg';
import carbsIcon from '../../assets/svg/carbs-icon.svg';
import fatIcon from '../../assets/svg/fat-icon.svg';
import proteinIcon from '../../assets/svg/protein-icon.svg';
import styles from './Macros.module.css';

export default function Macros(props) {
  const calorieCount = props.data.calorieCount;
  const proteinCount = props.data.proteinCount;
  const carbohydrateCount = props.data.carbohydrateCount;
  const lipidCount = props.data.lipidCount;

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
