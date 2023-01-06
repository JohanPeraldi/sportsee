import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Bonjour <span className={styles.name}>Thomas</span></h1>
      <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}