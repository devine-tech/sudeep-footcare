import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const DiabeticFootSurgeryPage = () => {
  return (
    <div className={styles.surgeryPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Diabetic Foot Surgery</h1>
          <p>Advanced surgical solutions for diabetic foot complications</p>
          <Link href="/contact-us" className="btn btn-primary">
            Book an Appointment
          </Link>
        </div>
      </div>

      <div className="container">
        <section className={`${styles.infoSection} section-padding`}>
          <div className={styles.sectionHeader}>
            <h2>When Surgery Becomes Necessary</h2>
            <p>
              For patients with diabetes, foot complications can sometimes progress to a point where surgical intervention becomes necessary. 
              At Diabetic Foot Care Center, we offer specialized surgical procedures performed by experienced surgeons who understand the 
              unique challenges of diabetic foot conditions.
            </p>
          </div>

          <div className={styles.surgeryTypes}>
            <div className={styles.surgeryCard}>
              <div className={styles.surgeryIcon}>🦶</div>
              <h3>Debridement</h3>
              <p>
                Removal of infected or dead tissue to promote healing and prevent the spread of infection. 
                This procedure is often performed for diabetic foot ulcers that haven't responded to non-surgical treatments.
              </p>
            </div>

            <div className={styles.surgeryCard}>
              <div className={styles.surgeryIcon}>🩹</div>
              <h3>Wound Closure</h3>
              <p>
                Various techniques to close chronic wounds, including skin grafts, tissue flaps, and advanced wound closure 
                systems designed specifically for diabetic wounds.
              </p>
            </div>

            <div className={styles.surgeryCard}>
              <div className={styles.surgeryIcon}>🦴</div>
              <h3>Bone Reconstruction</h3>
              <p>
                Surgical correction of foot deformities caused by Charcot's arthropathy or other diabetes-related 
                bone and joint complications.
              </p>
            </div>

            <div className={styles.surgeryCard}>
              <div className={styles.surgeryIcon}>🩸</div>
              <h3>Vascular Surgery</h3>
              <p>
                Procedures to improve blood flow to the feet, which is crucial for healing and preventing complications 
                in diabetic patients with peripheral arterial disease.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.procedureSection} section-padding`}>
          <h2>Our Surgical Approach</h2>
          <div className={styles.procedureContent}>
            <div className={styles.procedureInfo}>
              <h3>Minimally Invasive Techniques</h3>
              <p>
                Whenever possible, we utilize minimally invasive surgical techniques that result in smaller incisions, 
                less pain, and faster recovery times – all crucial factors for diabetic patients.
              </p>
              
              <h3>Comprehensive Pre-Surgical Assessment</h3>
              <p>
                Before any surgical procedure, we conduct thorough evaluations including vascular studies, 
                neurological assessments, and infection screening to ensure the best possible outcome.
              </p>
              
              <h3>Multidisciplinary Team</h3>
              <p>
                Our surgical team works closely with endocrinologists, vascular specialists, and wound care experts 
                to provide comprehensive care before, during, and after surgery.
              </p>
              
              <h3>Advanced Post-Surgical Care</h3>
              <p>
                We provide specialized post-surgical care including wound management, offloading techniques, 
                and regular follow-ups to monitor healing and prevent complications.
              </p>
            </div>
            <div className={styles.procedureImage}>
              {/* Placeholder for an image */}
              <div className={styles.imagePlaceholder}>
                <span>Surgical Procedure Image</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.faqSection} section-padding`}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>How do I know if I need foot surgery?</h3>
              <p>
                Surgery is typically considered when non-surgical treatments haven't been effective, when there's significant 
                infection, when there's a risk of limb loss, or when deformities are causing ongoing problems. Dr. Prayas Kumar will 
                thoroughly evaluate your condition and discuss all treatment options with you.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>What is the recovery time after diabetic foot surgery?</h3>
              <p>
                Recovery time varies depending on the type of surgery, the extent of the condition, and individual factors 
                like blood sugar control and overall health. Generally, recovery can take anywhere from a few weeks to several 
                months. Dr. Prayas Kumar will provide you with specific expectations based on your situation.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Will I be able to walk normally after surgery?</h3>
              <p>
                The goal of surgery is to improve function and prevent complications. Many patients experience improved mobility 
                after recovery, but this depends on the specific condition being treated and other factors. We'll work with you 
                to maximize your mobility through proper post-surgical care and rehabilitation.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>How can I prepare for diabetic foot surgery?</h3>
              <p>
                Preparation includes optimizing blood sugar control, following pre-surgical instructions regarding medications, 
                arranging for post-surgical assistance at home, and preparing your living space for a safe recovery. Our team will 
                provide detailed guidance specific to your procedure.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Take the First Step Towards Healing</h2>
            <p>
              If you're experiencing diabetic foot complications that may require surgical intervention, 
              don't wait until the condition worsens. Contact us today to schedule a consultation with Dr. Prayas Kumar.
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

export default DiabeticFootSurgeryPage;
