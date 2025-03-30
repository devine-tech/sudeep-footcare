import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const ReconstructiveSurgeriesPage = () => {
  return (
    <div className={styles.conditionsPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 style={{ color: 'white'}}>Reconstructive Surgeries for Wounds</h1>
          <p style={{ color: 'white'}}>Advanced flap techniques to restore form and function in complex wounds</p>
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
                <li><a href="#flaps">Local/Regional Flaps</a></li>
                <li><a href="#free-flaps">Free Flaps</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-9">
            <section className={`${styles.infoSection} section-padding`}>
              <div className={styles.sectionHeader}>
                <h2>Wound Reconstruction Techniques</h2>
                <p>
                  For complex wounds that cannot heal by primary intention or require specialized coverage, 
                  reconstructive flap surgeries provide vascularized tissue to promote healing, restore function, 
                  and improve cosmetic outcomes. Our microsurgical team specializes in these advanced procedures.
                </p>
              </div>
            </section>

            <section id="flaps" className={styles.conditionSection}>
              <h2>Local & Regional Flaps</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🔄</div>
                <h3>About Pedicled Flaps</h3>
                <p>
                  Flaps are tissue transfers that maintain their own blood supply. Local and regional flaps remain 
                  attached to their original vascular pedicle while being repositioned to cover adjacent defects.
                </p>
                
                <h3>Common Flap Types</h3>
                <div className={styles.flapGrid}>
                  <div className={styles.flapType}>
                    <h4>Rotation Flaps</h4>
                    <p>Semicircular flaps rotated about a pivot point to cover triangular defects</p>
                  </div>
                  <div className={styles.flapType}>
                    <h4>Transposition Flaps</h4>
                    <p>Rectangular flaps moved over intervening tissue to cover adjacent defects</p>
                  </div>
                  <div className={styles.flapType}>
                    <h4>Advancement Flaps</h4>
                    <p>Tissue stretched linearly to cover wounds without rotational movement</p>
                  </div>
                  <div className={styles.flapType}>
                    <h4>Island Pedicle Flaps</h4>
                    <p>Skin island transferred on subcutaneous pedicle through a tunnel</p>
                  </div>
                </div>

                <h3>Clinical Applications</h3>
                <ul>
                  <li>Pressure sore reconstruction</li>
                  <li>Diabetic foot ulcer coverage</li>
                  <li>Traumatic wound coverage</li>
                  <li>Post-cancer excision reconstruction</li>
                  <li>Burn contracture release</li>
                </ul>

                <h3>Advantages</h3>
                <ul>
                  <li>Single-stage procedure</li>
                  <li>Maintains native tissue characteristics</li>
                  <li>Better durability than grafts</li>
                  <li>Can include multiple tissue types (skin, muscle, fascia)</li>
                  <li>Lower technical demands than free flaps</li>
                </ul>
              </div>
            </section>

            <section id="free-flaps" className={styles.conditionSection}>
              <h2>Free Flaps</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>✈️</div>
                <h3>Microsurgical Free Tissue Transfer</h3>
                <p>
                  Free flaps involve completely detaching tissue from its donor site with its vascular pedicle, 
                  and reattaching it to recipient vessels at the wound site using microsurgical techniques.
                </p>

                <h3>Common Free Flap Donor Sites</h3>
                <div className={styles.flapGrid}>
                  <div className={styles.flapType}>
                    <h4>Anterolateral Thigh (ALT)</h4>
                    <p>Versatile fasciocutaneous flap with long vascular pedicle</p>
                  </div>
                  <div className={styles.flapType}>
                    <h4>Radial Forearm</h4>
                    <p>Thin, pliable skin ideal for hand and foot reconstruction</p>
                  </div>
                  <div className={styles.flapType}>
                    <h4>Latissimus Dorsi</h4>
                    <p>Large muscle flap for substantial volume replacement</p>
                  </div>
                  <div className={styles.flapType}>
                    <h4>Fibula</h4>
                    <p>Osseous or osteocutaneous flap for bony reconstruction</p>
                  </div>
                </div>

                <h3>Indications for Free Flaps</h3>
                <ul>
                  <li>Large composite tissue defects</li>
                  <li>Recipient sites with poor vascularity</li>
                  <li>When local tissue is insufficient</li>
                  <li>Three-dimensional reconstruction needs</li>
                  <li>Functional muscle reconstruction</li>
                </ul>

                <h3>Microsurgical Process</h3>
                <ol>
                  <li>Flap harvest with preservation of vascular pedicle</li>
                  <li>Recipient vessel preparation</li>
                  <li>Microvascular anastomosis (artery and vein)</li>
                  <li>Flap inset and contouring</li>
                  <li>Postoperative monitoring protocol</li>
                </ol>

                <h3>Postoperative Monitoring</h3>
                <ul>
                  <li>Hourly flap checks for first 48 hours</li>
                  <li>Clinical assessment of color, temperature, capillary refill</li>
                  <li>Doppler monitoring of anastomosis</li>
                  <li>Maintenance of warm environment</li>
                  <li>Anticoagulation protocol</li>
                </ul>
              </div>
            </section>

            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Comprehensive Wound Reconstruction</h2>
                <p>
                  Our reconstructive surgery team combines expertise in flap selection, microsurgery, and 
                  postoperative care to optimize outcomes for complex wounds. Contact us to discuss 
                  reconstruction options with Dr. Prayas Kumar.
                </p>
                <Link href="/contact-us" className="btn btn-accent">
                  Schedule a Consultation
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReconstructiveSurgeriesPage;