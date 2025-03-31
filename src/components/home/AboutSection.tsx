import Link from 'next/link';
import Image from 'next/image';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              {/* In production, replace with actual image */}
              <div className={styles.placeholderImage}>
                <Image 
                  src="/images/prayas_photo.png" 
                  alt="Dr. Prayas Kumar consulting with a patient" 
                  width={300} 
                  height={300}
                  className={styles.aboutImage}
                />
              </div>
              <div className={styles.experienceBadge}>
                <span className={styles.badgeNumber}>15+</span>
                <span className={styles.badgeText}>Years Experience</span>
              </div>
            </div>
            {/* <div className={styles.imageDecoration}></div> */}
          </div>
          
          <div className={styles.content}>
            <span className={styles.sectionTag}>About Us</span>
            <h2 className={styles.title}>About Dr. Prayas Kumar</h2>
            <div className={styles.subtitle}>Specialized Diabetic Foot Care Expert</div>
            
            <div className={styles.divider}></div>
            
            <p className={styles.description}>
              Dr. Prayas Kumar is a renowned specialist in diabetic foot care with over 15 years of 
              experience in treating complex diabetic foot conditions. He has dedicated his career to 
              improving outcomes for patients with diabetic foot complications through innovative 
              surgical and non-surgical approaches.
            </p>
            <p className={styles.description}>
              With advanced training in diabetic foot surgery and wound management, Dr. Prayas Kumar provides 
              comprehensive care that addresses not only the immediate foot problems but also the 
              underlying factors that contribute to diabetic foot complications.
            </p>
            
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>✓</div>
                <div className={styles.highlightText}>Specialized in Diabetic Foot Surgery</div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>✓</div>
                <div className={styles.highlightText}>Advanced Wound Care Management</div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>✓</div>
                <div className={styles.highlightText}>Comprehensive Diabetic Foot Assessment</div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>✓</div>
                <div className={styles.highlightText}>Personalized Treatment Plans</div>
              </div>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Surgeries</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5000+</span>
                <span className={styles.statLabel}>Patients</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
            </div>
            
            <Link href="/drprayas" className="btn btn-primary">
              Learn More About Dr. Prayas Kumar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
