import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const VascularSurgeryPage = () => {
  return (
    <div className={styles.conditionsPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 style={{ color: 'white'}}>Vascular Surgery for Diabetes</h1>
          <p style={{ color: 'white'}}>Advanced interventions for diabetic vascular complications</p>
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
                <li><a href="#angioplasty">Peripheral Angioplasty</a></li>
                <li><a href="#bypass">Vascular Bypass</a></li>
                <li><a href="#medical-management">Medical Management</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-9">
            <section className={`${styles.infoSection} section-padding`}>
              <div className={styles.sectionHeader}>
                <h2>Diabetic Vascular Interventions</h2>
                <p>
                  Diabetes can cause significant damage to blood vessels, particularly in the legs and feet. 
                  Our vascular specialists provide comprehensive surgical and medical treatments to restore 
                  circulation and prevent complications like non-healing wounds and amputations.
                </p>
              </div>
            </section>

            <section id="angioplasty" className={styles.conditionSection}>
              <h2>Peripheral Angioplasty</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>💉</div>
                <h3>About Peripheral Angioplasty</h3>
                <p>
                  A minimally invasive procedure to open narrowed or blocked arteries in the legs, improving 
                  blood flow to the feet. This is often the first-line surgical intervention for diabetic 
                  peripheral artery disease (PAD).
                </p>
                
                <h3>Procedure Details</h3>
                <div className={styles.procedureGrid}>
                  <div className={styles.procedureType}>
                    <h4>Balloon Angioplasty</h4>
                    <p>Inflation of a small balloon to compress plaque against artery walls</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Stent Placement</h4>
                    <p>Permanent mesh scaffold to keep artery open</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Atherectomy</h4>
                    <p>Plaque removal using specialized devices</p>
                  </div>
                </div>

                <h3>Benefits for Diabetic Patients</h3>
                <ul>
                  <li>Minimal incision (usually through a small needle puncture)</li>
                  <li>Local anesthesia option for high-risk patients</li>
                  <li>Same-day discharge in most cases</li>
                  <li>Faster recovery than open surgery</li>
                  <li>Can be repeated if needed</li>
                </ul>

                <h3>Recovery Expectations</h3>
                <ul>
                  <li>1-2 days of limited activity post-procedure</li>
                  <li>Regular foot checks for improved circulation signs</li>
                  <li>Medication regimen to prevent re-narrowing</li>
                  <li>Follow-up vascular studies in 3-6 months</li>
                </ul>
              </div>
            </section>

            <section id="bypass" className={styles.conditionSection}>
              <h2>Vascular Bypass</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🔄</div>
                <h3>About Vascular Bypass Surgery</h3>
                <p>
                  When arteries are too damaged for angioplasty, bypass surgery creates a new pathway for blood 
                  flow using either a synthetic graft or the patient's own vein. This is typically recommended 
                  for extensive blockages in diabetic patients.
                </p>

                <h3>Common Bypass Procedures</h3>
                <div className={styles.procedureGrid}>
                  <div className={styles.procedureType}>
                    <h4>Femoral-Popliteal Bypass</h4>
                    <p>Above-knee or below-knee bypass for thigh blockages</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Tibial Bypass</h4>
                    <p>Direct flow restoration to foot arteries</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Pedal Bypass</h4>
                    <p>Microsurgical bypass to foot vessels</p>
                  </div>
                </div>

                <h3>Surgical Considerations</h3>
                <ul>
                  <li>Preoperative vein mapping if using autologous vein</li>
                  <li>Choice between general or regional anesthesia</li>
                  <li>Intraoperative angiography to confirm patency</li>
                  <li>Combined with wound care procedures when needed</li>
                </ul>

                <h3>Recovery Process</h3>
                <ol>
                  <li>3-5 day hospital stay for monitoring</li>
                  <li>Incision care for 2-3 weeks</li>
                  <li>Gradual increase in walking distance</li>
                  <li>Lifelong anticoagulation management</li>
                  <li>Regular vascular checkups</li>
                </ol>
              </div>
            </section>

            <section id="medical-management" className={styles.conditionSection}>
              <h2>Medical Management of Blood Vessel Disease</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>💊</div>
                <h3>Comprehensive Medical Therapy</h3>
                <p>
                  Alongside surgical options, optimal medical management is crucial for slowing progression 
                  of diabetic vascular disease and maintaining surgical results.
                </p>

                <h3>Key Treatment Components</h3>
                <div className={styles.procedureGrid}>
                  <div className={styles.procedureType}>
                    <h4>Glycemic Control</h4>
                    <p>HbA1c targets tailored to individual risk factors</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Antiplatelet Therapy</h4>
                    <p>Aspirin or clopidogrel to prevent clots</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Lipid Management</h4>
                    <p>Statins to stabilize plaque and reduce inflammation</p>
                  </div>
                </div>

                <h3>Advanced Medical Therapies</h3>
                <ul>
                  <li><strong>Vasodilators:</strong> Cilostazol for improved walking distance</li>
                  <li><strong>Blood pressure control:</strong> ACE inhibitors preferred</li>
                  <li><strong>Wound healing adjuncts:</strong> Pentoxifylline for microcirculation</li>
                  <li><strong>Novel agents:</strong> SGLT2 inhibitors with cardiovascular benefits</li>
                </ul>

                <h3>Monitoring Protocol</h3>
                <ul>
                  <li>Regular ankle-brachial index (ABI) measurements</li>
                  <li>Annual vascular ultrasound studies</li>
                  <li>Foot perfusion assessment with TcPO2 or skin perfusion pressure</li>
                  <li>Continuous glucose monitoring optimization</li>
                </ul>
              </div>
            </section>

            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Comprehensive Vascular Care</h2>
                <p>
                  Our team combines surgical expertise with advanced medical management to provide complete 
                  vascular care for diabetic patients. Early intervention can prevent complications and 
                  preserve limb function.
                </p>
                <Link href="/contact-us" className="btn btn-accent">
                  Schedule a Vascular Assessment
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VascularSurgeryPage;