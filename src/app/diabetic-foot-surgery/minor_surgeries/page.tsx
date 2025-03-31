import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Minor Foot Surgeries | Diabetic Foot Care Center',
  description: 'Learn about outpatient podiatric procedures including ingrown toenail correction, fungal nail treatment, pincer nail surgery, and corn/callus removal.',
};

const MinorSurgeriesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Minor Foot Surgeries</h1>
          <p>
            Outpatient procedures for common podiatric conditions
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/conditions">Conditions</Link> &gt; 
        <span>Minor Surgeries</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#ingrown-toenail">Ingrown Toenail</a></li>
              <li><a href="#fungal-nail">Fungal Nail</a></li>
              <li><a href="#pincer-nail">Pincer Nail</a></li>
              <li><a href="#corn-callus">Corn & Callus</a></li>
              <li><a href="#excision">Excision Procedures</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Same-Day Procedures</h3>
              <p>Our podiatrists perform these minor surgeries in-office with minimal downtime.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Schedule Procedure
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Outpatient Podiatric Procedures</h2>
            <p>
              Our clinic specializes in minor surgical procedures performed under local anesthesia to address 
              common foot conditions. These minimally invasive treatments typically require minimal downtime 
              and provide significant relief from painful foot problems.
            </p>
            <div className={styles.warningBox}>
              <h3>Important Note for Diabetic Patients</h3>
              <p>
                While these are considered minor procedures, diabetic patients require special preoperative 
                evaluation and postoperative care to ensure proper healing and prevent complications.
              </p>
            </div>
          </section>

          {/* Ingrown Toenail Section */}
          <section id="ingrown-toenail" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Ingrown Toenail Correction</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Ingrown Toenail Procedure</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Ingrown Toenails</h3>
              <p>
                A painful condition where the nail edge grows into the surrounding skin, causing inflammation 
                and potential infection. Our procedures provide permanent solutions to recurrent problems.
              </p>
              
              <h3>Surgical Options</h3>
              <div className={styles.procedureGrid}>
                <div className={styles.procedureType}>
                  <h4>Partial Nail Avulsion</h4>
                  <ul>
                    <li>Removal of affected nail border</li>
                    <li>Local anesthesia</li>
                    <li>10-minute procedure</li>
                  </ul>
                </div>
                <div className={styles.procedureType}>
                  <h4>Permanent Correction</h4>
                  <ul>
                    <li>Phenol or chemical matrixectomy</li>
                    <li>Prevents recurrent ingrowth</li>
                    <li>95% success rate</li>
                  </ul>
                </div>
              </div>
              
              <h3>Recovery Process</h3>
              <ul className={styles.bulletList}>
                <li>Bandage for 24 hours post-op</li>
                <li>Daily antiseptic soaks</li>
                <li>Minimal pain (OTC meds usually sufficient)</li>
                <li>Return to shoes next day</li>
                <li>Complete healing in 2-3 weeks</li>
              </ul>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Considerations</h4>
                <p>
                  Diabetic patients require preoperative vascular assessment. Postoperative monitoring 
                  for infection is crucial. Chemical matrixectomy may be preferred over surgical due to 
                  lower infection risk.
                </p>
              </div>
            </div>
          </section>

          {/* Fungal Nail Section */}
          <section id="fungal-nail" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Fungal Nail Surgery</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Fungal Nail Treatment</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Fungal Nails</h3>
              <p>
                Fungal nail infections (onychomycosis) cause thickening, discoloration, and crumbling of nails. 
                When topical treatments fail, surgical intervention may be recommended.
              </p>
              
              <h3>Surgical Approaches</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Nail Debridement</h4>
                  <ul>
                    <li>Mechanical reduction of infected nail</li>
                    <li>Improves topical medication penetration</li>
                    <li>Performed every 2-3 months</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Complete Nail Removal</h4>
                  <ul>
                    <li>For severe, painful cases</li>
                    <li>With or without matrixectomy</li>
                    <li>Allows direct antifungal treatment</li>
                  </ul>
                </div>
              </div>
              
              <h3>Post-Procedure Care</h3>
              <ul className={styles.bulletList}>
                <li>Antifungal topical applications</li>
                <li>Protective dressings</li>
                <li>Proper nail hygiene education</li>
                <li>Follow-up for new nail growth</li>
              </ul>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Precautions</h4>
                <p>
                  Complete nail removal increases risk of permanent nail dystrophy in diabetics. 
                  Partial debridement is often preferred. Strict sterile technique is essential.
                </p>
              </div>
            </div>
          </section>

          {/* Pincer Nail Section */}
          <section id="pincer-nail" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Pincer Nail Correction</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Pincer Nail Surgery</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Pincer Nails</h3>
              <p>
                A deformity where the nail curves inward excessively, pinching the nail bed and causing 
                pain. Often develops due to genetic factors or improper footwear.
              </p>
              
              <h3>Surgical Techniques</h3>
              <div className={styles.techniqueGrid}>
                <div className={styles.techniqueType}>
                  <h4>Nail Matrix Reshaping</h4>
                  <ul>
                    <li>Permanent width reduction</li>
                    <li>Partial removal of growth center</li>
                    <li>Chemical or surgical approach</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Nail Fold Reconstruction</h4>
                  <ul>
                    <li>For severe recurrent cases</li>
                    <li>Soft tissue correction</li>
                    <li>Combined with matrix work</li>
                  </ul>
                </div>
              </div>
              
              <h3>Recovery Timeline</h3>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>First Week</h4>
                    <p>Bandage changes, limited activity</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>2-4 Weeks</h4>
                    <p>Gradual return to normal footwear</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h4>3-6 Months</h4>
                    <p>Complete nail regrowth observation</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Considerations</h4>
                <p>
                  Pincer nails in diabetics often cause more severe pressure ulcers. Early surgical 
                  correction is recommended to prevent complications. Healing may take longer than 
                  non-diabetic patients.
                </p>
              </div>
            </div>
          </section>

          {/* Corn & Callus Section */}
          <section id="corn-callus" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Corn & Callus Treatment</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Corn Removal Procedure</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Corns & Calluses</h3>
              <p>
                Thickened skin areas that develop from repeated friction/pressure. When conservative 
                treatments fail, surgical removal may be indicated for painful or recurrent lesions.
              </p>
              
              <h3>Conservative Treatments</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Mechanical Reduction</h4>
                  <ul>
                    <li>Professional debridement</li>
                    <li>Custom orthotics</li>
                    <li>Padding techniques</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Medicated Treatments</h4>
                  <ul>
                    <li>Salicylic acid preparations</li>
                    <li>Urea-based creams</li>
                    <li>Antibiotic ointments if infected</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Excision Section */}
          <section id="excision" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Surgical Excision Procedures</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Surgical Excision</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Corn & Callus Excision</h3>
              <p>
                For persistent lesions that don't respond to conservative care, surgical options include:
              </p>
              
              <h3>Surgical Options</h3>
              <div className={styles.procedureGrid}>
                <div className={styles.procedureType}>
                  <h4>Enucleation</h4>
                  <ul>
                    <li>Complete lesion removal</li>
                    <li>Local anesthesia</li>
                    <li>Primary closure if possible</li>
                  </ul>
                </div>
                <div className={styles.procedureType}>
                  <h4>Underlying Bone Correction</h4>
                  <ul>
                    <li>Exostectomy (bump removal)</li>
                    <li>Osteotomy (bone realignment)</li>
                    <li>For recurrent lesions</li>
                  </ul>
                </div>
              </div>
              
              <h3>Postoperative Care</h3>
              <ul className={styles.bulletList}>
                <li>Pressure-offloading footwear</li>
                <li>Daily dressing changes</li>
                <li>Monitoring for infection</li>
                <li>Custom orthotics after healing</li>
              </ul>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Risks</h4>
                <p>
                  Surgical wounds in diabetic patients heal slower and are more prone to infection. 
                  Excision should be conservative. Underlying biomechanical causes must be addressed 
                  to prevent recurrence.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Minimally Invasive Foot Care</h2>
            <p>
              Our podiatrists specialize in these outpatient procedures to relieve pain and improve 
              foot function with minimal downtime. Benefits include:
            </p>
            <ul className={styles.bulletList}>
              <li>Performed under local anesthesia</li>
              <li>Short procedure times (15-30 minutes)</li>
              <li>Immediate weight-bearing in most cases</li>
              <li>Quick return to daily activities</li>
              <li>High success rates</li>
            </ul>
            <div className={styles.ctaBox}>
              <h3>Ready for Relief?</h3>
              <p>
                Contact us to discuss which minor foot procedure might be right for your condition.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Schedule Procedure Consultation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MinorSurgeriesPage;