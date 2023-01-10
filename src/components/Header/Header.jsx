import { useParams } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const { id } = useParams();
  let firstName;
  switch (id) {
    case '12':
      firstName = 'Karl';
      break;
    case '18':
      firstName = 'Cecilia';
      break;
    default:
      firstName = 'chère(e) inconnu(e)';
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Bonjour <span className={styles.name}>{firstName}</span>
      </h1>
      <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}
