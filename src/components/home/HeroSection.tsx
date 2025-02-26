import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Specialized <span className={styles.highlight}>Diabetic</span> Foot Care
          </h1>
          <h2 className={styles.subtitle}>
            Led by <span className={styles.highlight}>Dr. Prayas Kumar</span>, 
            providing comprehensive care for diabetic foot conditions
          </h2>
          <p className={styles.description}>
            Our center offers specialized treatment for diabetic foot complications, 
            focusing on prevention, early intervention, and advanced surgical techniques 
            to improve outcomes and quality of life.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2000+</span>
              <span className={styles.statLabel}>Patients Treated</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link href="/contact-us" className="btn btn-primary btn-lg">
              Book an Appointment
            </Link>
            <Link href="/about-us" className="btn btn-secondary btn-lg">
              Learn More
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            {/* In production, replace with actual image */}
            <div className={styles.placeholderImage}>
              <Image 
                src="/images/gallery-03.jpg" 
                alt="Doctor consulting with diabetic patient" 
                width={600} 
                height={450}
                className={styles.heroImage}
              />
            </div>
            <div className={styles.imageBadge}>
              <div className={styles.badgeContent}>
                <span className={styles.badgeIcon}>⭐</span>
                <span className={styles.badgeText}>Top Rated Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.waveDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
