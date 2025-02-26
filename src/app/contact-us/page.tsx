import React from 'react';
import styles from './page.module.css';
import ContactForm from '@/components/contact/ContactForm';

const ContactUsPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Contact Us</h1>
          <p>We're here to help with all your diabetic foot care needs</p>
        </div>
      </div>

      <div className="container">
        <div className={`${styles.contactSection} section-padding`}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <p>
                Whether you have questions about our services, want to schedule an appointment, 
                or need more information about diabetic foot care, our team is ready to assist you.
              </p>
              
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div className={styles.infoContent}>
                    <h3>Visit Us</h3>
                    <p>123 Healthcare Avenue, Mumbai, India</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📞</div>
                  <div className={styles.infoContent}>
                    <h3>Call Us</h3>
                    <p>+91 1234567890</p>
                    <p>Monday to Saturday: 9am - 6pm</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>✉️</div>
                  <div className={styles.infoContent}>
                    <h3>Email Us</h3>
                    <p>dhshah15532@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.mapContainer}>
                <div className={styles.mapPlaceholder}>
                  <span>Google Map Location</span>
                </div>
              </div>
            </div>
            
            <div className={styles.formContainer}>
              <div className={styles.formWrapper}>
                <h2>Book an Appointment</h2>
                <p>
                  Fill out the form below and our team will get back to you as soon as possible 
                  to confirm your appointment.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        
        <div className={`${styles.faqSection} section-padding`}>
          <h2 className="text-center">Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>What should I bring to my first appointment?</h3>
              <p>
                Please bring your medical records, a list of current medications, your insurance information, 
                and any previous foot X-rays or test results if available.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Do I need a referral to see Dr. Prayas Kumar?</h3>
              <p>
                While many patients come to us through referrals from their primary care physicians or endocrinologists, 
                a referral is not always required. Please contact our office to discuss your specific situation.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>How quickly can I get an appointment?</h3>
              <p>
                We understand the urgency of diabetic foot issues and strive to accommodate patients as quickly as possible. 
                Urgent cases can often be seen within 24-48 hours.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>What insurance plans do you accept?</h3>
              <p>
                We accept most major insurance plans. Please contact our office with your specific insurance information, 
                and we'll be happy to verify your coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
