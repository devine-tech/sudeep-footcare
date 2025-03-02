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
            <p className={styles.icon}>📞</p>
            <span>+91 81282591620</span>
          </div>
          <div className={styles.contactItem}>
            <p className={styles.icon}>🚨</p>
            <span>Emergency: 24/7</span>
          </div>
          <div className={styles.contactItem}>
            <p className={styles.icon}>📍</p>
            <span>Sudeep Hospital, Prasham Building, Opp. Lavanya Mall,<br /> Near Ashok Pan House, Citilight Road, Surat</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
