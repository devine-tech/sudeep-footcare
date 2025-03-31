import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Vascular Surgery for Diabetes | Diabetic Limb Salvage Center',
  description: 'Comprehensive surgical and medical treatments for diabetic vascular disease including angioplasty, bypass procedures, and advanced medical therapies.',
};

const VascularSurgeryPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Vascular Surgery for Diabetes</h1>
          <p>
            Restoring blood flow and preventing amputations through advanced vascular interventions
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/treatments">Treatments</Link> &gt; 
        <span>Diabetic Vascular Care</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#angioplasty">Peripheral Angioplasty</a></li>
              <li><a href="#bypass">Vascular Bypass</a></li>
              <li><a href="#medical-management">Medical Management</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Vascular Evaluation</h3>
              <p>Our diabetic limb salvage team specializes in complex vascular cases.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Request Vascular Assessment
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Diabetic Vascular Disease Management</h2>
            <p>
              Diabetes accelerates vascular disease through multiple pathways, often leading to 
              critical limb ischemia. Our multidisciplinary approach combines endovascular, 
              surgical, and medical therapies tailored to each patient's vascular anatomy 
              and overall health status.
            </p>
            <div className={styles.warningBox}>
              <h3>Critical Consideration</h3>
              <p>
                Diabetic patients often have distal, calcified vessels requiring specialized 
                techniques. Wound healing depends on adequate perfusion, infection control, 
                and metabolic management.
              </p>
            </div>
          </section>

          {/* Peripheral Angioplasty Section */}
          <section id="angioplasty" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Peripheral Angioplasty</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Diabetic Angioplasty Procedure Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Endovascular Revascularization</h3>
              <p>
                Minimally invasive angioplasty techniques can restore blood flow in 
                diabetic patients with peripheral arterial disease (PAD), often avoiding 
                open surgery. Specialized approaches address unique diabetic vascular challenges.
              </p>
              
              <h3>Angioplasty Techniques</h3>
              <div className={styles.techniqueGrid}>
                <div className={styles.techniqueType}>
                  <h4>Balloon Angioplasty</h4>
                  <ul>
                    <li>Low-profile balloons</li>
                    <li>Long inflation times</li>
                    <li>Calcium modification</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Atherectomy</h4>
                  <ul>
                    <li>Rotational (Diamondback)</li>
                    <li>Orbital (CSI)</li>
                    <li>Directional (SilverHawk)</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Drug-Eluting Therapies</h4>
                  <ul>
                    <li>Drug-coated balloons</li>
                    <li>Eluting stents</li>
                    <li>Paclitaxel-based</li>
                  </ul>
                </div>
              </div>
              
              <h3>Diabetic-Specific Considerations</h3>
              <div className={styles.approachGrid}>
                <div className={styles.approachType}>
                  <h4>Below-the-Knee</h4>
                  <ul>
                    <li>Tibial artery interventions</li>
                    <li>Pedal loop reconstruction</li>
                    <li>Transmetatarsal access</li>
                  </ul>
                </div>
                <div className={styles.approachType}>
                  <h4>Challenges</h4>
                  <ul>
                    <li>Heavy calcification</li>
                    <li>Long segment occlusions</li>
                    <li>Multi-level disease</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Outcomes Data</h4>
                <p>
                  Diabetic patients have 70-85% technical success rates for tibial interventions. 
                  1-year patency rates range from 50-70%. Wound healing rates improve by 40-60% 
                  with successful revascularization.
                </p>
              </div>
            </div>
          </section>

          {/* Vascular Bypass Section */}
          <section id="bypass" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Vascular Bypass</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Distal Bypass Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Surgical Revascularization</h3>
              <p>
                When endovascular approaches are insufficient, bypass surgery creates 
                new pathways for blood flow using autogenous vein or prosthetic grafts. 
                Diabetic patients often require distal bypass to foot vessels.
              </p>
              
              <h3>Bypass Options</h3>
              <div className={styles.levelGrid}>
                <div className={styles.levelType}>
                  <h4>Conduit Selection</h4>
                  <ul>
                    <li>Great saphenous vein (preferred)</li>
                    <li>Arm vein alternatives</li>
                    <li>Prosthetic with distal vein cuff</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Target Vessels</h4>
                  <ul>
                    <li>Femoral-popliteal</li>
                    <li>Femoral-tibial</li>
                    <li>Pedal or plantar artery</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Hybrid Procedures</h4>
                  <ul>
                    <li>Combined endovascular/open</li>
                    <li>Inflow/outflow optimization</li>
                    <li>Sequential multilevel</li>
                  </ul>
                </div>
              </div>
              
              <h3>Surgical Considerations</h3>
              <div className={styles.considerationGrid}>
                <div className={styles.considerationType}>
                  <h4>Preoperative</h4>
                  <ul>
                    <li>Vein mapping ultrasound</li>
                    <li>Optimize glycemic control</li>
                    <li>Infection control</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Intraoperative</h4>
                  <ul>
                    <li>Microsurgical technique</li>
                    <li>Valve lysis</li>
                    <li>Competitive flow assessment</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Postoperative</h4>
                  <ul>
                    <li>Graft surveillance</li>
                    <li>Wound care</li>
                    <li>Antiplatelet therapy</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Outcomes</h4>
                <p>
                  5-year patency rates: 60-70% for vein grafts, 30-45% for prosthetic. 
                  Limb salvage rates exceed 80% at 3 years when combined with proper 
                  wound care. Mortality rates higher than non-diabetics (5-10% at 1 year).
                </p>
              </div>
            </div>
          </section>

          {/* Medical Management Section */}
          <section id="medical-management" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Medical Management</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Medical Therapy Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Comprehensive Medical Therapy</h3>
              <p>
                Optimal medical management is essential alongside revascularization 
                to improve outcomes and prevent disease progression in diabetic 
                vascular patients. Our protocol addresses multiple risk factors.
              </p>
              
              <h3>Key Treatment Components</h3>
              <div className={styles.levelGrid}>
                <div className={styles.levelType}>
                  <h4>Glycemic Control</h4>
                  <ul>
                    <li>HbA1c targets (individualized)</li>
                    <li>Inpatient insulin protocols</li>
                    <li>Newer agents with CV benefits</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Antiplatelet/Antithrombotic</h4>
                  <ul>
                    <li>Aspirin/clopidogrel</li>
                    <li>Vorapaxar (select cases)</li>
                    <li>Rivaroxaban (vascular dose)</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Risk Factor Modification</h4>
                  <ul>
                    <li>Statin therapy (high intensity)</li>
                    <li>Blood pressure control</li>
                    <li>Smoking cessation</li>
                  </ul>
                </div>
              </div>
              
              <h3>Advanced Medical Therapies</h3>
              <div className={styles.considerationGrid}>
                <div className={styles.considerationType}>
                  <h4>Pharmacologic</h4>
                  <ul>
                    <li>Cilostazol (claudication)</li>
                    <li>Pentoxifylline</li>
                    <li>Prostanoids (critical limb ischemia)</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Lifestyle</h4>
                  <ul>
                    <li>Supervised exercise therapy</li>
                    <li>Nutrition counseling</li>
                    <li>Podiatric care</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Emerging</h4>
                  <ul>
                    <li>SGLT2 inhibitors</li>
                    <li>GLP-1 receptor agonists</li>
                    <li>Stem cell therapy (investigational)</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Clinical Impact</h4>
                <p>
                  Comprehensive medical management reduces cardiovascular events by 25-30% 
                  and amputation risk by 20-25% in diabetic PAD patients. Medication 
                  adherence is critical for long-term success.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Integrated Diabetic Vascular Care</h2>
            <p>
              Our limb salvage program combines:
            </p>
            <ul className={styles.bulletList}>
              <li>Advanced revascularization techniques</li>
              <li>Multidisciplinary wound care</li>
              <li>Aggressive medical optimization</li>
              <li>Individualized rehabilitation</li>
              <li>Long-term surveillance</li>
            </ul>
            <div className={styles.ctaBox}>
              <h3>Need Vascular Assessment?</h3>
              <p>
                Our diabetic vascular specialists can evaluate your circulation 
                and recommend personalized treatment options.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Schedule Vascular Consultation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VascularSurgeryPage;