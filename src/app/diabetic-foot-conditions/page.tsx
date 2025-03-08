import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const DiabeticFootConditionsPage = () => {
  return (
    <div className={styles.conditionsPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 style={{ color: 'white'}}>Diabetic Foot Conditions</h1>
          <p style={{ color: 'white'}}>Understanding and treating common diabetic foot conditions</p>
          <Link href="/contact-us" className="btn btn-primary">
            Book an Appointment
          </Link>
        </div>
      </div>

      <div className="container">
        <section className={`${styles.infoSection} section-padding`}>
          <div className={styles.sectionHeader}>
            <h2>Comprehensive Care for Diabetic Foot Conditions</h2>
            <p>
              At Diabetic Foot Care Center, we specialize in diagnosing and treating a wide range of foot conditions 
              that affect patients with diabetes. Our expert team provides personalized care to address your specific 
              needs and help you maintain optimal foot health.
            </p>
          </div>

          <div className={styles.conditionCategories}>
            <div className={styles.conditionCard}>
              <div className={styles.conditionIcon}>🦴</div>
              <h3>Bone Conditions</h3>
              <p>
                Diabetes can affect the bones in your feet, leading to conditions like bunions, Charcot's foot, 
                and osteomyelitis. Early diagnosis and treatment are essential to prevent serious complications.
              </p>
              <Link href="/diabetic-foot-conditions/bone-conditions" className="btn btn-outline">
                Learn More
              </Link>
            </div>

            <div className={styles.conditionCard}>
              <div className={styles.conditionIcon}>👣</div>
              <h3>Conditions On Sole</h3>
              <p>
                The soles of your feet are particularly vulnerable to diabetic complications, including dry skin, 
                calluses, corns, and athlete's foot. Proper care can help prevent these conditions from worsening.
              </p>
              <Link href="/diabetic-foot-conditions/conditions-on-sole" className="btn btn-outline">
                Learn More
              </Link>
            </div>

            <div className={styles.conditionCard}>
              <div className={styles.conditionIcon}>💪</div>
              <h3>Muscle-Tendon Conditions</h3>
              <p>
                Diabetes can affect the muscles and tendons in your feet, causing conditions like tendoachilis rupture, 
                claw toe, foot drop, and plantar fasciitis. Specialized treatments can help manage these conditions.
              </p>
              <Link href="/diabetic-foot-conditions/muscle-tendon-conditions" className="btn btn-outline">
                Learn More
              </Link>
            </div>

            <div className={styles.conditionCard}>
              <div className={styles.conditionIcon}>💅</div>
              <h3>Nail Conditions</h3>
              <p>
                Diabetic patients often experience nail conditions such as fungal infections, brittle nails, 
                discoloration, and ingrown toenails. Professional care is important to prevent complications.
              </p>
              <Link href="/diabetic-foot-conditions/nail-conditions" className="btn btn-outline">
                Learn More
              </Link>
            </div>

            <div className={styles.conditionCard}>
              <div className={styles.conditionIcon}>🔬</div>
              <h3>Soft Tissue Infections</h3>
              <p>
                Diabetes increases the risk of soft tissue infections like cellulitis, abscesses, 
                necrotizing fasciitis, and gangrene. Prompt treatment is crucial to prevent serious complications.
              </p>
              <Link href="/diabetic-foot-conditions/soft-tissue-infections" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Expert Care for Your Foot Health</h2>
            <p>
              If you're experiencing any diabetic foot conditions or want to learn more about preventive care, 
              our team is here to help. Contact us today to schedule a consultation with Dr. Prayas Kumar.
            </p>
            <Link href="/contact-us" className="btn btn-accent">
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiabeticFootConditionsPage;
