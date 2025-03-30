import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Bone Conditions | Diabetic Foot Care Center',
  description: 'Learn about bone conditions affecting diabetic feet including Bunions, Osteoma, Charcot Foot, and Osteomyelitis.',
};

const BoneConditionsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bone Conditions</h1>
          <p>
            Common bone disorders affecting the foot in diabetic patients
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/conditions">Conditions</Link> &gt; 
        <span>Bone Conditions</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#bunions">Bunions</a></li>
              <li><a href="#osteoma">Osteoma</a></li>
              <li><a href="#charcot-foot">Charcot's Foot</a></li>
              <li><a href="#osteomyelitis">Osteomyelitis</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Need Expert Advice?</h3>
              <p>Our specialists can help diagnose and treat bone conditions in diabetic feet.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Understanding Diabetic Bone Conditions</h2>
            <p>
              Diabetes can significantly impact bone health in the feet through multiple mechanisms including 
              neuropathy, poor circulation, and altered bone metabolism. These changes make diabetic patients 
              more susceptible to various bone disorders that require specialized care and management.
            </p>
            <div className={styles.warningBox}>
              <h3>Important Note for Diabetic Patients</h3>
              <p>
                If you have diabetes and notice any foot deformities, unexplained swelling, or non-healing wounds 
                over bony areas, seek immediate medical evaluation. Early intervention can prevent serious 
                complications including bone destruction and amputation.
              </p>
            </div>
          </section>

          {/* Bunions Section */}
          <section id="bunions" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Bunions</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Bunion Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What are Bunions?</h3>
              <p>
                Bunions (hallux valgus) are bony bumps that form at the base of the big toe where it joins the foot. 
                They develop when the big toe pushes against the next toe, forcing the joint of the big toe to enlarge 
                and stick out. In diabetic patients, bunions pose special risks due to neuropathy and pressure points.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>A bulging bump on the outside of the big toe joint</li>
                <li>Swelling, redness or soreness around the joint</li>
                <li>Corn or callus development where toes overlap</li>
                <li>Persistent or intermittent pain</li>
                <li>Restricted movement of the big toe</li>
                <li>In diabetic patients: possible ulceration over the prominence</li>
              </ul>
              
              <h3>Treatment Options</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Conservative</h4>
                  <ul>
                    <li>Properly fitted shoes with wide toe box</li>
                    <li>Bunion pads or splints</li>
                    <li>Custom orthotics</li>
                    <li>Padding and taping</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Surgical</h4>
                  <ul>
                    <li>Bunionectomy (removal of swollen tissue)</li>
                    <li>Osteotomy (realignment of bones)</li>
                    <li>Arthrodesis (joint fusion for severe cases)</li>
                    <li>Resection arthroplasty</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Considerations</h4>
                <p>
                  For diabetic patients, bunions require careful monitoring as they can lead to ulcer formation 
                  over the prominence. Due to neuropathy, pain may be absent even with significant deformity. 
                  Surgical correction requires careful evaluation of vascular status and healing potential.
                </p>
              </div>
            </div>
          </section>

          {/* Osteoma Section */}
          <section id="osteoma" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Osteoma</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Osteoma Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is an Osteoma?</h3>
              <p>
                An osteoma is a benign, slow-growing bone tumor that typically forms on the surface of bones. 
                When occurring in the foot, it can cause localized pain, difficulty with footwear, and in diabetic 
                patients, may create pressure points leading to skin breakdown.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Hard, immovable lump on a bone</li>
                <li>Localized pain or tenderness</li>
                <li>Difficulty wearing shoes</li>
                <li>Visible deformity in some cases</li>
                <li>In diabetic patients: possible ulceration over the growth</li>
              </ul>
              
              <h3>Treatment Approaches</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Non-Surgical</h4>
                  <ul>
                    <li>Observation if asymptomatic</li>
                    <li>Footwear modifications</li>
                    <li>Padding to relieve pressure</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Surgical</h4>
                  <ul>
                    <li>Complete surgical excision</li>
                    <li>Bone contouring</li>
                    <li>Cryosurgery in some cases</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Considerations</h4>
                <p>
                  In diabetic patients, osteomas require careful evaluation due to increased risk of ulceration 
                  over the prominence. Surgical removal must be weighed against healing potential, and postoperative 
                  monitoring is crucial to prevent complications like infection or delayed healing.
                </p>
              </div>
            </div>
          </section>

          {/* Charcot's Foot Section */}
          <section id="charcot-foot" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Charcot's Foot</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Charcot Foot Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Charcot's Foot?</h3>
              <p>
                Charcot neuropathic osteoarthropathy (Charcot foot) is a progressive condition characterized by 
                joint dislocation, fractures, and deformities that occur with minimal or no trauma in people with 
                peripheral neuropathy, most commonly due to diabetes.
              </p>
              
              <h3>Symptoms by Stage</h3>
              <div className={styles.stageTable}>
                <div className={styles.stageRow}>
                  <div className={styles.stageCell}>Stage 0 (Acute)</div>
                  <div className={styles.stageCell}>Warmth, swelling, redness</div>
                </div>
                <div className={styles.stageRow}>
                  <div className={styles.stageCell}>Stage 1 (Fragmentation)</div>
                  <div className={styles.stageCell}>Bone destruction, joint dislocation</div>
                </div>
                <div className={styles.stageRow}>
                  <div className={styles.stageCell}>Stage 2 (Coalescence)</div>
                  <div className={styles.stageCell}>Decreased swelling, bone healing</div>
                </div>
                <div className={styles.stageRow}>
                  <div className={styles.stageCell}>Stage 3 (Consolidation)</div>
                  <div className={styles.stageCell}>Stable deformity, possible ulcers</div>
                </div>
              </div>
              
              <h3>Treatment Protocol</h3>
              <ol className={styles.numberedList}>
                <li>Immediate immobilization with total contact cast</li>
                <li>Strict non-weight bearing during acute phase</li>
                <li>Custom bracing during consolidation</li>
                <li>Therapeutic footwear for long-term management</li>
                <li>Surgical reconstruction in select cases</li>
              </ol>
              
              <div className={styles.complicationBox}>
                <h4>Critical Warning</h4>
                <p>
                  Charcot foot is often misdiagnosed as infection due to similar presentation. Diabetic patients 
                  with a warm, swollen foot without open wounds should be evaluated for Charcot immediately. 
                  Continued weight-bearing can lead to catastrophic foot collapse and deformity.
                </p>
              </div>
            </div>
          </section>

          {/* Osteomyelitis Section */}
          <section id="osteomyelitis" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Osteomyelitis</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Osteomyelitis Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Osteomyelitis?</h3>
              <p>
                Osteomyelitis is a bone infection that can occur when bacteria from a nearby wound or ulcer spread 
                to the bone. In diabetic patients, it's often a complication of foot ulcers that penetrate to bone.
              </p>
              
              <h3>Diagnostic Approach</h3>
              <div className={styles.diagnosticGrid}>
                <div className={styles.diagnosticType}>
                  <h4>Clinical Signs</h4>
                  <ul>
                    <li>Non-healing ulcer over bone</li>
                    <li>Probe-to-bone test positive</li>
                    <li>Systemic signs of infection</li>
                  </ul>
                </div>
                <div className={styles.diagnosticType}>
                  <h4>Imaging</h4>
                  <ul>
                    <li>X-ray (late changes)</li>
                    <li>MRI (gold standard)</li>
                    <li>Bone scan</li>
                  </ul>
                </div>
                <div className={styles.diagnosticType}>
                  <h4>Lab Tests</h4>
                  <ul>
                    <li>Elevated ESR/CRP</li>
                    <li>Bone biopsy for culture</li>
                    <li>Blood cultures</li>
                  </ul>
                </div>
              </div>
              
              <h3>Treatment Strategy</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Medical</h4>
                  <ul>
                    <li>Culture-directed antibiotics (6+ weeks)</li>
                    <li>Glycemic control</li>
                    <li>Nutritional support</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Surgical</h4>
                  <ul>
                    <li>Debridement of infected bone</li>
                    <li>Resection of necrotic tissue</li>
                    <li>Reconstructive procedures</li>
                    <li>Amputation in severe cases</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Challenges</h4>
                <p>
                  Diabetic patients face higher treatment failure rates due to impaired immunity, poor antibiotic 
                  penetration from vascular disease, and difficulty with offloading. Multidisciplinary care 
                  involving infectious disease, vascular surgery, and wound care is essential for optimal outcomes.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Preventing Bone Complications in Diabetes</h2>
            <p>
              While some bone conditions are unavoidable, these strategies can help reduce risks:
            </p>
            <ul className={styles.bulletList}>
              <li>Maintain optimal blood glucose control to preserve bone health</li>
              <li>Regular foot inspections for early signs of deformity or injury</li>
              <li>Proper footwear to distribute pressure evenly</li>
              <li>Prompt treatment of any foot wounds</li>
              <li>Regular exercise to maintain bone density</li>
              <li>Adequate calcium and vitamin D intake</li>
              <li>Annual comprehensive foot exams by a specialist</li>
            </ul>
            <div className={styles.ctaBox}>
              <h3>Concerned About Foot Bones?</h3>
              <p>
                Our team specializes in diagnosing and treating diabetic bone conditions with both conservative 
                and surgical approaches tailored to each patient's needs and healing potential.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Schedule a Bone Health Evaluation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BoneConditionsPage;