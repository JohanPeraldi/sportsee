import styles from './Header.module.css';

export default function Header(props) {
  const firstName = props.firstName;
  console.log(firstName);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Bonjour <span className={styles.name}>{firstName}</span>
      </h1>
      <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}
