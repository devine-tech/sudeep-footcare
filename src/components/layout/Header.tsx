import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Diabetic Foot Care Center</span>
          </Link>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <i className={styles.icon}>📞</i>
            <span>+91 1234567890</span>
          </div>
          <div className={styles.contactItem}>
            <i className={styles.icon}>✉️</i>
            <span>dhshah15532@gmail.com</span>
          </div>
          <div className={styles.contactItem}>
            <i className={styles.icon}>📍</i>
            <span>123 Healthcare Avenue, Mumbai, India</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
