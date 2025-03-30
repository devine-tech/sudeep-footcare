import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const MinorSurgeriesPage = () => {
  return (
    <div className={styles.conditionsPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 style={{ color: 'white'}}>Minor Foot Surgeries</h1>
          <p style={{ color: 'white'}}>Outpatient procedures for common podiatric conditions</p>
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
                <li><a href="#ingrown-toenail">Ingrown Toenail</a></li>
                <li><a href="#fungal-nail">Fungal Nail</a></li>
                <li><a href="#pincer-nail">Pincer Nail</a></li>
                <li><a href="#corn-callus">Corn & Callus</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-9">
            <section className={`${styles.infoSection} section-padding`}>
              <div className={styles.sectionHeader}>
                <h2>Outpatient Podiatric Procedures</h2>
                <p>
                  Our clinic specializes in minor surgical procedures performed under local anesthesia to address 
                  common foot conditions. These minimally invasive treatments typically require minimal downtime 
                  and provide significant relief from painful foot problems.
                </p>
              </div>
            </section>

            <section id="ingrown-toenail" className={styles.conditionSection}>
              <h2>Ingrown Toenail Correction</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>👣</div>
                <h3>About Ingrown Toenails</h3>
                <p>
                  An ingrown toenail occurs when the nail edge grows into the surrounding skin, causing pain, 
                  redness, swelling, and sometimes infection. Our procedures provide permanent solutions to 
                  recurrent problems.
                </p>
                <h3>Surgical Options</h3>
                <ul>
                  <li><strong>Partial Nail Avulsion:</strong> Removal of the affected nail border</li>
                  <li><strong>Phenolization:</strong> Chemical treatment to prevent regrowth</li>
                  <li><strong>Wedge Resection:</strong> Narrowing the nail plate</li>
                  <li><strong>Total Nail Removal:</strong> For severe recurrent cases</li>
                </ul>
                <h3>Post-Procedure Care</h3>
                <ul>
                  <li>24-hour post-op bandage</li>
                  <li>Daily antiseptic soaks</li>
                  <li>Antibiotic ointment application</li>
                  <li>Proper nail trimming education</li>
                  <li>Follow-up in 1-2 weeks</li>
                </ul>
              </div>
            </section>

            <section id="fungal-nail" className={styles.conditionSection}>
              <h2>Fungal Nail Correction</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🍄</div>
                <h3>Understanding Fungal Nails</h3>
                <p>
                  Fungal nail infections (onychomycosis) cause thickening, discoloration, and crumbling of nails. 
                  When topical treatments fail, surgical intervention may be recommended.
                </p>
                <h3>Treatment Approaches</h3>
                <ul>
                  <li><strong>Debridement:</strong> Mechanical reduction of infected nail</li>
                  <li><strong>Chemical Nail Removal:</strong> Urea-based treatments</li>
                  <li><strong>Laser Therapy:</strong> Targeted fungal destruction</li>
                  <li><strong>Permanent Nail Removal:</strong> With matrixectomy</li>
                </ul>
                <h3>Prevention Strategies</h3>
                <ul>
                  <li>Antifungal shoe sprays</li>
                  <li>Moisture-wicking socks</li>
                  <li>Proper footwear in public areas</li>
                  <li>Regular nail trimming</li>
                  <li>Early treatment of athlete's foot</li>
                </ul>
              </div>
            </section>

            <section id="pincer-nail" className={styles.conditionSection}>
              <h2>Pincer Nail Correction</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🌀</div>
                <h3>What is Pincer Nail?</h3>
                <p>
                  Pincer nail deformity involves excessive transverse nail curvature that pinches the nail bed, 
                  causing pain and sometimes ulceration. Our corrective procedures relieve this painful condition.
                </p>
                <h3>Surgical Techniques</h3>
                <ul>
                  <li><strong>Nail Matrix Reshaping:</strong> Permanent width reduction</li>
                  <li><strong>Selective Matrixectomy:</strong> Partial removal of growth center</li>
                  <li><strong>Nail Fold Reconstruction:</strong> For severe cases</li>
                  <li><strong>Orthonyxia:</strong> Nail brace techniques</li>
                </ul>
                <h3>Recovery Timeline</h3>
                <ul>
                  <li>2-3 days of mild discomfort</li>
                  <li>Bandage changes every 2 days</li>
                  <li>Return to shoes in 1 week</li>
                  <li>Complete healing in 2-4 weeks</li>
                  <li>Nail regrowth monitoring</li>
                </ul>
              </div>
            </section>

            <section id="corn-callus" className={styles.conditionSection}>
              <h2>Excision of Corn & Callus</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🦶</div>
                <h3>About Corns & Calluses</h3>
                <p>
                  These thickened skin areas develop from repeated friction/pressure. When conservative treatments 
                  fail, surgical removal may be indicated for painful or recurrent lesions.
                </p>
                <h3>Surgical Options</h3>
                <ul>
                  <li><strong>Enucleation:</strong> Complete lesion removal</li>
                  <li><strong>Plantar Excision:</strong> For deep calluses</li>
                  <li><strong>Bone Spur Reduction:</strong> When underlying bony prominence exists</li>
                  <li><strong>Soft Tissue Release:</strong> For recurrent lesions</li>
                </ul>
                <h3>Post-Surgical Care</h3>
                <ul>
                  <li>Pressure-offloading footwear</li>
                  <li>Daily dressing changes</li>
                  <li>Custom orthotics after healing</li>
                  <li>Moisturization regimen</li>
                  <li>Follow-up at 1 and 3 weeks</li>
                </ul>
              </div>
            </section>

            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Relief from Foot Pain</h2>
                <p>
                  These minor procedures can dramatically improve comfort and mobility. Contact Diabetic Foot Care 
                  Center today to discuss which treatment might be right for you with Dr. Prayas Kumar.
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

export default MinorSurgeriesPage;