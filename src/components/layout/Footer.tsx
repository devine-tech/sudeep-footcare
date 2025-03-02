import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Diabetic Foot Care Center</h3>
            <p className={styles.footerText}>
              Specialized care for diabetic foot conditions with a focus on prevention, 
              treatment, and management to improve quality of life for our patients.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>FB</a>
              <a href="#" className={styles.socialIcon}>TW</a>
              <a href="#" className={styles.socialIcon}>IG</a>
              <a href="#" className={styles.socialIcon}>YT</a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/" className={styles.footerLink}>Home</Link></li>
              <li><Link href="/about-us" className={styles.footerLink}>About Us</Link></li>
              <li><Link href="/team" className={styles.footerLink}>Our Team</Link></li>
              <li><Link href="/dr-Prayas Kumar-Prayas Kumar" className={styles.footerLink}>Dr. Prayas Kumar</Link></li>
              <li><Link href="/contact-us" className={styles.footerLink}>Contact Us</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Services</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/diabetic-foot-surgery" className={styles.footerLink}>Diabetic Foot Surgery</Link></li>
              <li><Link href="/diabetic-foot-conditions" className={styles.footerLink}>Diabetic Foot Conditions</Link></li>
              <li><Link href="/nonsurgical-management" className={styles.footerLink}>Nonsurgical Management</Link></li>
              <li><Link href="/footwear-services" className={styles.footerLink}>Footwear Services</Link></li>
              <li><Link href="/nondiabetic-ulcers" className={styles.footerLink}>Nondiabetic Ulcers</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact Information</h3>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Sudeep Hospital, Prasham Building, Opp. Lavanya Mall,<br /> Near Ashok Pan House, Citilight Road, Surat</span>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                +91 81282591620
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactIcon}>🚨</span>
                Emergency: 24/7
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactIcon}>🕒</span>
                Mon-Fri: 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Diabetic Foot Care Center. All Rights Reserved.
          </p>
          <div className={styles.footerBottomLinks}>
            <Link href="/privacy-policy" className={styles.footerBottomLink}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.footerBottomLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
