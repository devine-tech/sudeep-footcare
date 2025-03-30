import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const CorrectiveSurgeriesPage = () => {
  return (
    <div className={styles.conditionsPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 style={{ color: 'white'}}>Corrective Surgeries for Complicated Ulcers</h1>
          <p style={{ color: 'white'}}>Specialized surgical interventions for advanced diabetic foot ulcers</p>
          <Link href="/contact-us" className="btn btn-primary">
            Book an Appointment
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className={styles.navigationMenu}>
              <h3>Quick Navigation</h3>
              <ul className={styles.navigationList}>
                <li><a href="#debridement">Debridement</a></li>
                <li><a href="#fasciotomies">Fasciotomies</a></li>
                <li><a href="#amputation">Amputation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-9">
            <section className={`${styles.infoSection} section-padding`}>
              <div className={styles.sectionHeader}>
                <h2>Surgical Solutions for Complex Ulcers</h2>
                <p>
                  When diabetic foot ulcers become complicated by infection, necrosis, or compromised circulation, 
                  surgical intervention may be necessary to prevent systemic infection and preserve function. 
                  Our team specializes in these advanced corrective procedures tailored for diabetic patients.
                </p>
              </div>
            </section>

            <section id="debridement" className={styles.conditionSection}>
              <h2>Debridement</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🩺</div>
                <h3>What is Debridement?</h3>
                <p>
                  Debridement is the medical removal of dead, damaged, or infected tissue to improve the healing 
                  potential of the remaining healthy tissue. In diabetic ulcers, it's often the first surgical step 
                  to control infection and assess wound extent.
                </p>
                <h3>Types of Debridement</h3>
                <p>
                  We employ several debridement techniques based on ulcer characteristics:
                </p>
                <ul>
                  <li><strong>Surgical/sharp debridement:</strong> Precise removal with scalpel or scissors</li>
                  <li><strong>Mechanical debridement:</strong> Wet-to-dry dressings or irrigation</li>
                  <li><strong>Enzymatic debridement:</strong> Topical enzyme applications</li>
                  <li><strong>Autolytic debridement:</strong> Using the body's own enzymes with occlusive dressings</li>
                  <li><strong>Biological debridement:</strong> Medical maggot therapy for selective necrosis removal</li>
                </ul>
                <h3>Post-Debridement Care</h3>
                <p>
                  After debridement, critical steps include:
                </p>
                <ul>
                  <li>Appropriate wound dressing selection</li>
                  <li>Offloading pressure from the area</li>
                  <li>Antibiotic therapy if infection present</li>
                  <li>Regular follow-up for repeated debridement if needed</li>
                  <li>Nutritional optimization for healing</li>
                </ul>
              </div>
            </section>

            <section id="fasciotomies" className={styles.conditionSection}>
              <h2>Fasciotomies</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🔪</div>
                <h3>Understanding Fasciotomies</h3>
                <p>
                  A fasciotomy is a surgical procedure where the fascia is cut to relieve tension or pressure, 
                  commonly performed for compartment syndrome in diabetic foot infections or severe edema that 
                  compromises circulation.
                </p>
                <h3>When Fasciotomies Are Needed</h3>
                <p>
                  Indications for diabetic patients include:
                </p>
                <ul>
                  <li>Compartment pressure 30 mmHg</li>
                  <li>Severe infection causing tissue swelling</li>
                  <li>Crush injuries with significant edema</li>
                  <li>Ischemic changes despite vascular intervention</li>
                  <li>Progressive neurological deficits</li>
                </ul>
                <h3>Surgical Approach</h3>
                <p>
                  Our surgical techniques focus on:
                </p>
                <ul>
                  <li>Dorsal foot incisions for superficial compartments</li>
                  <li>Medial foot incisions for deep compartments</li>
                  <li>Minimally invasive approaches when possible</li>
                  <li>Concurrent debridement of necrotic tissue</li>
                  <li>Intraoperative pressure monitoring</li>
                </ul>
                <h3>Recovery Process</h3>
                <p>
                  Post-operative management includes:
                </p>
                <ul>
                  <li>Open wound management until swelling resolves</li>
                  <li>Delayed primary closure or skin grafting</li>
                  <li>Aggressive infection control</li>
                  <li>Physical therapy to maintain mobility</li>
                  <li>Long-term biomechanical assessment</li>
                </ul>
              </div>
            </section>

            <section id="amputation" className={styles.conditionSection}>
              <h2>Amputation</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🦵</div>
                <h3>Amputation as Last Resort</h3>
                <p>
                  When ulcers lead to irreversible tissue damage, uncontrolled infection, or gangrene, amputation 
                  may be necessary to preserve life and remaining function. We prioritize limb-sparing approaches 
                  and perform the most conservative procedure possible.
                </p>
                <h3>Amputation Levels</h3>
                <p>
                  Our surgical options include:
                </p>
                <ul>
                  <li><strong>Toe amputation:</strong> Single or multiple toes</li>
                  <li><strong>Ray amputation:</strong> Toe plus part of metatarsal</li>
                  <li><strong>Transmetatarsal:</strong> Partial foot preservation</li>
                  <li><strong>Lisfranc:</strong> Tarsometatarsal disarticulation</li>
                  <li><strong>Below-knee (BKA):</strong> Tibia/fibula preservation</li>
                  <li><strong>Above-knee (AKA):</strong> For proximal infections</li>
                </ul>
                <h3>Pre-Surgical Evaluation</h3>
                <p>
                  Comprehensive assessment includes:
                </p>
                <ul>
                  <li>Vascular studies to determine healing potential</li>
                  <li>Infection mapping with advanced imaging</li>
                  <li>Nutritional status optimization</li>
                  <li>Pre-prosthetic evaluation when applicable</li>
                  <li>Psychological counseling</li>
                </ul>
                <h3>Rehabilitation Focus</h3>
                <p>
                  Our post-amputation program features:
                </p>
                <ul>
                  <li>Multidisciplinary wound care team</li>
                  <li>Early physical therapy mobilization</li>
                  <li>Prosthetic fitting when appropriate</li>
                  <li>Diabetes management intensification</li>
                  <li>Long-term follow-up to prevent contralateral ulcers</li>
                </ul>
              </div>
            </section>

            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Expert Surgical Care for Diabetic Ulcers</h2>
                <p>
                  If you're facing complex ulcer complications, our surgical team can develop a personalized 
                  treatment plan. Early intervention improves outcomes. Contact Diabetic Foot Care Center today 
                  to schedule a consultation with Dr. Prayas Kumar.
                </p>
                <Link href="/contact-us" className="btn btn-accent">
                  Schedule an Appointment
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorrectiveSurgeriesPage;