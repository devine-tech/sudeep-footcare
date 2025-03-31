import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | Diabetic Foot Care Center",
  description:
    "Learn about our specialized diabetic foot care center and our mission to provide comprehensive care for diabetic foot conditions.",
};

export default function AboutUs() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>
            Dedicated to providing specialized care for diabetic foot conditions
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.text}>
              At the Diabetic Foot Care Center, our mission is to provide
              comprehensive, specialized care for patients with diabetic foot
              conditions. We are committed to improving outcomes and quality of
              life through a combination of preventive care, early intervention,
              and advanced treatment options.
            </p>
            <p className={styles.text}>
              We believe in a patient-centered approach that addresses not only
              the immediate foot problems but also the underlying factors that
              contribute to diabetic foot complications. Our team works closely
              with each patient to develop personalized treatment plans that
              meet their specific needs and goals.
            </p>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.placeholderImage}>
              <img
                src="/images/clinic.jpg"
                alt="Clinic Image"
                className={styles.clinicImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <div className={styles.placeholderImage}>
              <img
                src="/images/team.jpg"
                alt="Team Image"
                className={styles.clinicImage}
              />
            </div>
          </div>

          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Our Approach</h2>
            <p className={styles.text}>
              Our approach to diabetic foot care is comprehensive and
              multidisciplinary. We combine the latest evidence-based practices
              with innovative techniques to provide the highest standard of care
              for our patients.
            </p>
            <p className={styles.text}>We focus on:</p>
            <ul className={styles.list}>
              <li>Prevention through education and regular check-ups</li>
              <li>Early detection of potential problems</li>
              <li>Prompt and effective treatment of acute conditions</li>
              <li>Long-term management strategies to prevent recurrence</li>
              <li>
                Collaboration with other healthcare providers for holistic care
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Our History</h2>
            <p className={styles.text}>
              The Diabetic Foot Care Center was established in 2010 by Dr.
              Prayas Kumar, with the vision of creating a specialized center
              dedicated to the unique needs of patients with diabetic foot
              conditions. Over the years, we have grown from a small clinic to a
              comprehensive care center, expanding our services and team to meet
              the increasing demand for specialized diabetic foot care.
            </p>
            <p className={styles.text}>
              Throughout our history, we have remained committed to our core
              values of excellence, compassion, and innovation. We continue to
              invest in the latest technologies and techniques to ensure that
              our patients receive the best possible care.
            </p>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.placeholderImage}>
              <img
                src="/images/history.jpg"
                alt="History Image"
                className={styles.clinicImage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
