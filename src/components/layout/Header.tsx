import Link from 'next/link';
import styles from './Header.module.css';
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
        <Link href="/">
            <Image
              src="/images/Supreme-logo.svg"
              alt="Diabetic Care Center Logo"
              width={150} 
              height={50} 
              className={styles.logo}
            />
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
