import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const UlcerSurgeriesPage = () => {
  return (
    <div className={styles.conditionsPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 style={{ color: 'white'}}>Ulcer Healing & Preventive Surgeries</h1>
          <p style={{ color: 'white'}}>Surgical solutions to heal existing ulcers and prevent recurrence</p>
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
                <li><a href="#offloading">Surgical Offloading</a></li>
                <li><a href="#splinting">Internal Splinting</a></li>
                <li><a href="#tenotomy">Flexor Tenotomy</a></li>
                <li><a href="#hammertoe">Hammertoe Repair</a></li>
                <li><a href="#clawtoe">Claw Toe Correction</a></li>
                <li><a href="#boneshaving">Bone Shaving/Removal</a></li>
                <li><a href="#osteotomy">Metatarsal Osteotomies</a></li>
                <li><a href="#achilles">Achilles Procedures</a></li>
                <li><a href="#exostectomy">Plantar Exostectomies</a></li>
                <li><a href="#arch">Arch Stabilization</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-9">
            <section className={`${styles.infoSection} section-padding`}>
              <div className={styles.sectionHeader}>
                <h2>Comprehensive Ulcer Management</h2>
                <p>
                  For patients with chronic or recurrent foot ulcers, especially those with diabetes, 
                  these surgical procedures address both active wounds and underlying biomechanical 
                  causes to promote healing and prevent future complications.
                </p>
              </div>
            </section>

            {/* Surgical OffLoading */}
            <section id="offloading" className={styles.conditionSection}>
              <h2>Surgical Offloading</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>⏬</div>
                <h3>About Surgical Offloading</h3>
                <p>
                  Permanent redistribution of pressure away from ulcer-prone areas through bone 
                  modifications or joint procedures.
                </p>
                <h3>Techniques</h3>
                <ul>
                  <li><strong>Metatarsal head resection:</strong> For recurrent forefoot ulcers</li>
                  <li><strong>Calcaneal osteotomy:</strong> For heel ulcer offloading</li>
                  <li><strong>Joint arthroplasty:</strong> To reduce bony prominences</li>
                </ul>
              </div>
            </section>

            {/* Internal Splinting */}
            <section id="splinting" className={styles.conditionSection}>
              <h2>Internal Splinting</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🩹</div>
                <h3>About Internal Splinting</h3>
                <p>
                  Internal fixation devices to maintain corrected positions and reduce pressure on healing ulcers.
                </p>
                <h3>Options</h3>
                <ul>
                  <li>K-wire fixation for temporary stabilization</li>
                  <li>Permanent intramedullary implants</li>
                  <li>Absorbable fixation systems</li>
                </ul>
              </div>
            </section>

            {/* Flexor Tenotomy */}
            <section id="tenotomy" className={styles.conditionSection}>
              <h2>Flexor Tenotomy</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>✂️</div>
                <h3>About Flexor Tenotomy</h3>
                <p>
                  Release of tight flexor tendons to reduce toe pressure on shoe uppers or tips.
                </p>
                <h3>Procedure Details</h3>
                <ul>
                  <li>Percutaneous or open approach</li>
                  <li>Typically performed on digits 2-5</li>
                  <li>Minimal incision technique</li>
                </ul>
              </div>
            </section>

            {/* Hammertoe Repair */}
            <section id="hammertoe" className={styles.conditionSection}>
              <h2>Hammertoe Repair</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>👣</div>
                <h3>About Hammertoe Correction</h3>
                <p>
                  Correction of dorsiflexed PIP joint deformities causing dorsal ulcers.
                </p>
                <h3>Surgical Options</h3>
                <ul>
                  <li>PIP joint arthroplasty</li>
                  <li>PIP joint fusion</li>
                  <li>Extensor tendon lengthening</li>
                </ul>
              </div>
            </section>

            {/* Claw Toe Correction */}
            <section id="clawtoe" className={styles.conditionSection}>
              <h2>Claw Toe Correction</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🦞</div>
                <h3>About Claw Toe Surgery</h3>
                <p>
                  Addressing MTP hyperextension and PIP/PDP flexion deformities.
                </p>
                <h3>Techniques</h3>
                <ul>
                  <li>Flexor-to-extensor transfer</li>
                  <li>MTP joint release</li>
                  <li>Plantar plate repair</li>
                </ul>
              </div>
            </section>

            {/* Bone Shaving/Removal */}
            <section id="boneshaving" className={styles.conditionSection}>
              <h2>Bone Shaving/Removal</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>⚒️</div>
                <h3>About Bone Resection</h3>
                <p>
                  Removal of bony prominences causing skin breakdown.
                </p>
                <h3>Common Resections</h3>
                <ul>
                  <li>Prominent metatarsal heads</li>
                  <li>Calcaneal spurs</li>
                  <li>Phalangeal condyles</li>
                </ul>
              </div>
            </section>

            {/* Metatarsal Osteotomies */}
            <section id="osteotomy" className={styles.conditionSection}>
              <h2>Metatarsal Osteotomies</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🦴</div>
                <h3>About Metatarsal Surgery</h3>
                <p>
                  Realignment procedures to redistribute plantar pressures.
                </p>
                <h3>Types</h3>
                <ul>
                  <li>Weil osteotomy (shortening)</li>
                  <li>Dorsiflexion osteotomy</li>
                  <li>Offset osteotomy</li>
                </ul>
              </div>
            </section>

            {/* Achilles Procedures */}
            <section id="achilles" className={styles.conditionSection}>
              <h2>Achilles Tendon Procedures</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🏃</div>
                <h3>Tendon Lengthening</h3>
                <p>
                  Gastrocnemius recession or percutaneous lengthening for equinus deformity.
                </p>
                <h3>Reconstruction</h3>
                <p>
                  For chronic tendinopathy or rupture with ulcer risk.
                </p>
              </div>
            </section>

            {/* Plantar Exostectomies */}
            <section id="exostectomy" className={styles.conditionSection}>
              <h2>Plantar Exostectomies</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🔪</div>
                <h3>About Exostectomies</h3>
                <p>
                  Removal of bony growths from plantar surfaces.
                </p>
                <h3>Common Sites</h3>
                <ul>
                  <li>Plantar medial tubercle</li>
                  <li>Calcaneal exostoses</li>
                  <li>Accessory navicular</li>
                </ul>
              </div>
            </section>

            {/* Arch Stabilization */}
            <section id="arch" className={styles.conditionSection}>
              <h2>Arch Stabilization</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🏗️</div>
                <h3>About Arch Procedures</h3>
                <p>
                  Reconstructive techniques for Charcot foot and severe flatfoot.
                </p>
                <h3>Options</h3>
                <ul>
                  <li>Midfoot arthrodesis</li>
                  <li>Subtalar fusion</li>
                  <li>Lateral column lengthening</li>
                </ul>
              </div>
            </section>

            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Comprehensive Ulcer Surgery Solutions</h2>
                <p>
                  Our surgical team specializes in both healing active ulcers and preventing recurrence through 
                  biomechanical corrections. Contact us to discuss which procedure may be right for you.
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

export default UlcerSurgeriesPage;