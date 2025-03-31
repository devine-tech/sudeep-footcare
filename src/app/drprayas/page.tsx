import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: 'About Dr. Prayas Kumar | Plastic & Reconstructive Surgeon',
  description: 'Learn about Dr. Prayas Kumar, M.Ch (Plastic Surgeon) and his expertise in hair transplants, rhinoplasty, body contouring, and diabetic foot treatments.',
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Dr. Prayas Kumar</h1>
          <p className={styles.heroSubtitle}>M.Ch (Plastic Surgeon)</p>
          <p className={styles.heroTagline}>Expertise in Cosmetic & Reconstructive Surgery</p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <span>About Dr. Prayas Kumar</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.profileColumn}>
          <div className={styles.profileCard}>
            <div className={styles.profileImageContainer}>
              <div className={styles.profileImagePlaceholder}>
                <div className={styles.placeholderText}>Dr. Prayas Kumar Photo</div>
              </div>
            </div>
            <div className={styles.profileDetails}>
              <h3 className={styles.profileTitle}>Qualifications</h3>
              <ul className={styles.qualificationsList}>
                <li>M.Ch (Plastic Surgery)</li>
                <li>MS (General Surgery)</li>
                <li>MBBS</li>
              </ul>
              
              <h3 className={styles.profileTitle}>Specializations</h3>
              <ul className={styles.specializationsList}>
                <li>Hair Transplant</li>
                <li>Rhinoplasty</li>
                <li>Body Contouring</li>
                <li>Diabetic Foot Care</li>
                <li>Faciomaxillary Surgery</li>
              </ul>

              <div className={styles.ctaBox}>
                <Link href="/contact" className={styles.consultButton}>
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.aboutSection}>
            <h2 className={styles.sectionTitle}>Professional Journey</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <h3>Education</h3>
                  <p>
                    Dr. Kumar completed his MBBS, MS, and MCh degrees in Plastic Surgery from the prestigious 
                    N.H.L Medical College in Ahmedabad, receiving comprehensive training in both cosmetic and 
                    reconstructive surgical techniques.
                  </p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <h3>Clinical Experience</h3>
                  <p>
                    With over 10 years of hands-on surgical experience, Dr. Kumar has performed thousands of 
                    successful procedures, refining his skills in microsurgery, aesthetic enhancement, and 
                    complex reconstructions.
                  </p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <h3>Leadership</h3>
                  <p>
                    As the Managing Director of Sudeep Plastic and Reconstructive Surgery Center, Dr. Kumar leads 
                    one of the most respected plastic surgery practices in Surat and South Gujarat, setting 
                    standards for patient care and surgical excellence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.expertiseSection}>
            <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>💇</div>
                <h3>Hair Transplant</h3>
                <p>
                  Advanced follicular unit extraction (FUE) techniques for natural-looking hair restoration, 
                  addressing male pattern baldness and other hair loss conditions.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>👃</div>
                <h3>Rhinoplasty</h3>
                <p>
                  Nose reshaping procedures that improve both aesthetic appearance and breathing function, 
                  customized to each patient's facial structure.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>👗</div>
                <h3>Body Contouring</h3>
                <p>
                  Comprehensive solutions including liposuction and tummy tucks to help patients achieve 
                  their desired physique after weight loss or pregnancy.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>🦶</div>
                <h3>Diabetic Foot Care</h3>
                <p>
                  Specialized surgical interventions for diabetic foot ulcers and deformities to prevent 
                  amputations and preserve mobility.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>👄</div>
                <h3>Faciomaxillary Surgery</h3>
                <p>
                  Correction of facial trauma, congenital deformities, and aesthetic enhancements of the 
                  facial structure.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>👔</div>
                <h3>Gynecomastia</h3>
                <p>
                  Male breast reduction procedures to correct enlarged breast tissue and restore a more 
                  masculine chest contour.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.philosophySection}>
            <h2 className={styles.sectionTitle}>Patient Care Philosophy</h2>
            <div className={styles.philosophyContent}>
              <div className={styles.philosophyImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Dr. Kumar with Patient</div>
                </div>
              </div>
              <div className={styles.philosophyText}>
                <h3>Personalized Surgical Care</h3>
                <p>
                  Dr. Kumar believes each patient deserves individualized treatment plans tailored to their 
                  unique anatomy, goals, and medical history. He combines technical precision with an artistic 
                  eye to achieve natural-looking results.
                </p>
                <h3>Safety First Approach</h3>
                <p>
                  Patient safety is paramount in all procedures. Dr. Kumar maintains the highest standards 
                  of surgical sterility and employs evidence-based techniques to minimize risks and optimize 
                  outcomes.
                </p>
                <h3>Comprehensive Consultation</h3>
                <p>
                  Every surgical journey begins with detailed consultations where Dr. Kumar ensures patients 
                  have realistic expectations and complete understanding of their procedure options.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.achievementsSection}>
            <h2 className={styles.sectionTitle}>Professional Achievements</h2>
            <ul className={styles.achievementsList}>
              <li>
                <strong>Pioneering Techniques:</strong> Introduced advanced microsurgical methods for complex 
                reconstructions in South Gujarat region
              </li>
              <li>
                <strong>Academic Contributions:</strong> Published research in peer-reviewed plastic surgery journals
              </li>
              <li>
                <strong>Surgical Training:</strong> Mentored numerous surgical residents and fellows
              </li>
              <li>
                <strong>Hospital Affiliations:</strong> Consultant at leading hospitals in Surat
              </li>
              <li>
                <strong>International Conferences:</strong> Regularly invited to share expertise at national 
                and international plastic surgery conferences
              </li>
            </ul>
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2>Schedule Your Consultation</h2>
              <p>
                Dr. Kumar welcomes patients seeking cosmetic enhancements or reconstructive solutions. 
                Contact our clinic to arrange a personalized consultation and learn how modern plastic 
                surgery can help you achieve your goals.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.primaryButton}>
                  Book an Appointment
                </Link>
                <Link href="/procedures" className={styles.secondaryButton}>
                  Explore Procedures
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;