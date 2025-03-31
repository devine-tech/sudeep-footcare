import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Reconstructive Surgeries for Wounds | Advanced Wound Care Center',
  description: 'Expert surgical reconstruction using flap techniques to restore form and function after complex wounds, trauma, or surgical defects.',
};

const ReconstructiveSurgeriesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Reconstructive Surgeries for Wounds</h1>
          <p>
            Restoring anatomy and function through advanced flap techniques
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/treatments">Treatments</Link> &gt; 
        <span>Reconstructive Surgeries</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#flaps">Local & Regional Flaps</a></li>
              <li><a href="#free-flaps">Free Flaps</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Surgical Consultation</h3>
              <p>Our reconstructive surgeons specialize in complex wound restoration.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Request Surgical Evaluation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Advanced Wound Reconstruction</h2>
            <p>
              When wounds are too large to close primarily or involve significant tissue loss, 
              reconstructive flap surgeries provide the biological coverage needed for healing 
              while preserving function and aesthetics. Our microsurgeons tailor each approach 
              to the patient's unique defect requirements.
            </p>
            <div className={styles.warningBox}>
              <h3>Critical Consideration</h3>
              <p>
                Flap selection depends on wound characteristics, patient comorbidities, 
                and functional goals. Vascular assessment is mandatory preoperatively.
              </p>
            </div>
          </section>

          {/* Flaps Section */}
          <section id="flaps" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Local & Regional Flaps</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Flap Types Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Tissue Flaps</h3>
              <p>
                Flaps transfer living tissue with its own blood supply to reconstruct defects. 
                Local and regional flaps utilize nearby tissue, minimizing donor site morbidity 
                while providing like-with-like reconstruction.
              </p>
              
              <h3>Common Flap Types</h3>
              <div className={styles.techniqueGrid}>
                <div className={styles.techniqueType}>
                  <h4>Rotation/Advancement</h4>
                  <ul>
                    <li>Adjacent tissue rearrangement</li>
                    <li>Simple geometric designs</li>
                    <li>Minimal donor morbidity</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Pedicle Flaps</h4>
                  <ul>
                    <li>Axial pattern blood supply</li>
                    <li>Greater arc of rotation</li>
                    <li>Examples: Groin, DP flaps</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Island Flaps</h4>
                  <ul>
                    <li>Skin island on vascular pedicle</li>
                    <li>Improved mobility</li>
                    <li>Examples: Nasolabial, Hatchet flaps</li>
                  </ul>
                </div>
              </div>
              
              <h3>Clinical Applications</h3>
              <div className={styles.approachGrid}>
                <div className={styles.approachType}>
                  <h4>Lower Extremity</h4>
                  <ul>
                    <li>Reverse sural artery flap</li>
                    <li>Saphenous flap</li>
                    <li>Peroneus brevis flap</li>
                  </ul>
                </div>
                <div className={styles.approachType}>
                  <h4>Upper Extremity</h4>
                  <ul>
                    <li>Radial forearm flap</li>
                    <li>Posterior interosseous flap</li>
                    <li>Groin flap</li>
                  </ul>
                </div>
                <div className={styles.approachType}>
                  <h4>Head & Neck</h4>
                  <ul>
                    <li>Pectoralis major flap</li>
                    <li>Deltopectoral flap</li>
                    <li>Forehead flap</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Surgical Considerations</h4>
                <p>
                  Flap design must account for angiosomes and perforator locations. 
                  Diabetic and irradiated tissues require special planning. 
                  Venous congestion is the most common early complication.
                </p>
              </div>
            </div>
          </section>

          {/* Free Flaps Section */}
          <section id="free-flaps" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Free Flaps</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Microsurgery Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Microvascular Free Flaps</h3>
              <p>
                Free tissue transfer involves completely detaching tissue with its 
                vascular pedicle and reattaching it to recipient vessels at the defect site. 
                This allows reconstruction of complex three-dimensional defects with 
                optimal tissue match.
              </p>
              
              <h3>Common Free Flap Choices</h3>
              <div className={styles.levelGrid}>
                <div className={styles.levelType}>
                  <h4>Anterolateral Thigh (ALT)</h4>
                  <ul>
                    <li>Versatile soft tissue</li>
                    <li>Long vascular pedicle</li>
                    <li>Minimal donor morbidity</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Deep Inferior Epigastric Perforator (DIEP)</h4>
                  <ul>
                    <li>Abdominal skin and fat</li>
                    <li>Breast reconstruction</li>
                    <li>Preserves rectus muscle</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Fibula Osteocutaneous</h4>
                  <ul>
                    <li>Vascularized bone</li>
                    <li>Mandible reconstruction</li>
                    <li>Up to 25cm bone length</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Radial Forearm</h4>
                  <ul>
                    <li>Thin pliable tissue</li>
                    <li>Oral cavity reconstruction</li>
                    <li>Sensory potential</li>
                  </ul>
                </div>
              </div>
              
              <h3>Microsurgical Process</h3>
              <div className={styles.considerationGrid}>
                <div className={styles.considerationType}>
                  <h4>Preoperative</h4>
                  <ul>
                    <li>Angiography/CT angiography</li>
                    <li>Recipient vessel identification</li>
                    <li>Flap design planning</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Intraoperative</h4>
                  <ul>
                    <li>Flap harvest under magnification</li>
                    <li>Microvascular anastomosis</li>
                    <li>Insetting and perfusion check</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Postoperative</h4>
                  <ul>
                    <li>Frequent flap monitoring</li>
                    <li>Anticoagulation protocol</li>
                    <li>Early complication management</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Technical Considerations</h4>
                <p>
                  Free flaps have 95-98% success rates in experienced centers. 
                  Venous thrombosis accounts for 75% of failures. 
                  Second salvage attempts succeed in 50-60% of cases. 
                  Patient selection and surgeon experience significantly impact outcomes.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Comprehensive Reconstructive Approach</h2>
            <p>
              Our surgical philosophy emphasizes:
            </p>
            <ul className={styles.bulletList}>
              <li>Defect-driven flap selection</li>
              <li>Functional restoration priority</li>
              <li>Microsurgical expertise</li>
              <li>Multidisciplinary planning</li>
              <li>Long-term outcome tracking</li>
            </ul>
            <div className={styles.ctaBox}>
              <h3>Need Wound Reconstruction?</h3>
              <p>
                Our reconstructive surgeons can evaluate your wound and recommend 
                the most appropriate flap technique for optimal recovery.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Schedule Surgical Consultation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReconstructiveSurgeriesPage;