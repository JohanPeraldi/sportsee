import logo from '../../assets/svg/logo.svg';
import styles from './HorizontalNav.module.css';

export default function HorizontalNav() {
  return (
    <nav className={styles.nav}>
      <img src={logo} className={styles.logo} alt='SportSee Logo' />
      <ul className={styles.navlist}>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
}
