import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Ulcer Healing & Preventive Surgeries | Diabetic Foot Reconstruction Center',
  description: 'Specialized surgical procedures to heal existing ulcers and prevent recurrence through biomechanical correction including tendon procedures, osteotomies, and joint stabilization.',
};

const UlcerSurgeryPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ulcer Healing & Preventive Surgeries</h1>
          <p>
            Biomechanical corrections to heal chronic wounds and prevent recurrence through targeted surgical interventions
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/treatments">Treatments</Link> &gt; 
        <span>Ulcer Prevention Surgery</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#offloading">Surgical Offloading</a></li>
              <li><a href="#tenotomy">Flexor Tenotomy</a></li>
              <li><a href="#toe-correction">Toe Deformity Repair</a></li>
              <li><a href="#osteotomies">Metatarsal Osteotomies</a></li>
              <li><a href="#achilles">Achilles Procedures</a></li>
              <li><a href="#exostectomy">Plantar Exostectomies</a></li>
              <li><a href="#arch">Arch Stabilization</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Biomechanical Evaluation</h3>
              <p>Our foot preservation specialists assess ulcer risk factors.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Request Surgical Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Proactive Ulcer Prevention Surgery</h2>
            <p>
              Chronic diabetic foot ulcers often result from correctable biomechanical abnormalities. 
              Our reconstructive approach addresses the underlying causes through targeted procedures 
              that redistribute pressure and correct deformities before ulcers develop or recur.
            </p>
            <div className={styles.warningBox}>
              <h3>Critical Timing</h3>
              <p>
                Preventive surgeries are most effective when performed before Charcot 
                progression or recurrent ulceration. Gait analysis and pedobarography 
                guide our surgical planning.
              </p>
            </div>
          </section>

          {/* Surgical Offloading Section */}
          <section id="offloading" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Surgical Offloading Techniques</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Pressure Redistribution Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Internal Offloading Principles</h3>
              <p>
                Permanent redistribution of plantar pressures through bone and soft tissue 
                procedures that eliminate focal high-pressure areas without external devices.
              </p>
              
              <div className={styles.techniqueGrid}>
                <div className={styles.techniqueType}>
                  <h4>Internal Splinting</h4>
                  <ul>
                    <li>PIP joint arthrodesis</li>
                    <li>K-wire stabilization</li>
                    <li>Permanent implant options</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Bone Shaving/Removal</h4>
                  <ul>
                    <li>Prominence resection</li>
                    <li>Partial phalangectomy</li>
                    <li>Condylectomy procedures</li>
                  </ul>
                </div>
              </div>
              
              <h3>Biomechanical Outcomes</h3>
              <ul className={styles.bulletList}>
                <li>70-90% reduction in peak pressures</li>
                <li>Healing rates improve by 40-60%</li>
                <li>Recurrence rates drop to 10-15%</li>
              </ul>
            </div>
          </section>

          {/* Flexor Tenotomy Section */}
          <section id="tenotomy" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Flexor Tenotomy</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Percutaneous Tenotomy Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Tendon Release</h3>
              <p>
                Minimally invasive release of flexor tendons to reduce digital contractures 
                causing tip-of-toe ulcers. Performed in-office or operating room.
              </p>
              
              <h3>Technical Approaches</h3>
              <div className={styles.techniqueGrid}>
                <div className={styles.techniqueType}>
                  <h4>Percutaneous</h4>
                  <ul>
                    <li>15-blade technique</li>
                    <li>No formal incision</li>
                    <li>Digital block anesthesia</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Open Release</h4>
                  <ul>
                    <li>For severe contractures</li>
                    <li>Z-lengthening options</li>
                    <li>Combined with joint release</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Clinical Outcomes</h4>
                <p>
                  Heals 85% of distal toe ulcers within 6 weeks. Risk of floating toe 
                  deformity (15-20% cases). Recurrence rates under 10% with proper 
                  postoperative footwear.
                </p>
              </div>
            </div>
          </section>

          {/* Toe Deformity Correction Section */}
          <section id="toe-correction" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Toe Deformity Correction</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Toe Realignment Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Procedures for Digital Ulcer Prevention</h3>
              
              <div className={styles.levelGrid}>
                <div className={styles.levelType}>
                  <h4>Hammertoe Repair</h4>
                  <ul>
                    <li>PIP arthroplasty/arthrodesis</li>
                    <li>Extensor tendon lengthening</li>
                    <li>K-wire vs. internal fixation</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Claw Toe Correction</h4>
                  <ul>
                    <li>Flexor-to-extensor transfer</li>
                    <li>MTP joint release</li>
                    <li>Proximal phalanx resection</li>
                  </ul>
                </div>
              </div>
              
              <h3>Surgical Considerations</h3>
              <div className={styles.considerationGrid}>
                <div className={styles.considerationType}>
                  <h4>Mild Deformities</h4>
                  <ul>
                    <li>Percutaneous techniques</li>
                    <li>Soft tissue balancing</li>
                    <li>Minimal resection</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Severe Deformities</h4>
                  <ul>
                    <li>Joint arthrodesis</li>
                    <li>Bone shortening</li>
                    <li>Combined procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Metatarsal Osteotomies Section */}
          <section id="osteotomies" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Metatarsal Osteotomies</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Metatarsal Realignment Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Forefoot Pressure Redistribution</h3>
              <p>
                Structural realignment of metatarsals to eliminate focal plantar pressures 
                under ulcer-prone areas while maintaining functional weight-bearing.
              </p>
              
              <div className={styles.levelGrid}>
                <div className={styles.levelType}>
                  <h4>Shortening Osteotomies</h4>
                  <ul>
                    <li>Weil osteotomy</li>
                    <li>Helal procedure</li>
                    <li>Distal metatarsal resection</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Elevating Osteotomies</h4>
                  <ul>
                    <li>Dorsal wedge</li>
                    <li>Opening wedge</li>
                    <li>Multiplanar correction</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Healing Considerations</h4>
                <p>
                  Nonunion rates 5-10% in diabetics. Protected weight-bearing for 
                  6-8 weeks essential. Floating toe deformity occurs in 20-30% of 
                  shortening procedures.
                </p>
              </div>
            </div>
          </section>

          {/* Achilles Procedures Section */}
          <section id="achilles" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Achilles Procedures</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Tendon Lengthening Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Equinus Correction</h3>
              <p>
                Addressing gastrocnemius-soleus contracture that increases forefoot 
                pressures and contributes to ulcer formation.
              </p>
              
              <div className={styles.techniqueGrid}>
                <div className={styles.techniqueType}>
                  <h4>Percutaneous TAL</h4>
                  <ul>
                    <li>Triple hemisection</li>
                    <li>Minimally invasive</li>
                    <li>30% strength preservation</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Open Z-lengthening</h4>
                  <ul>
                    <li>Precise length control</li>
                    <li>For severe contractures</li>
                    <li>Stronger repair construct</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Outcome Data</h4>
                <p>
                  Reduces forefoot pressures by 25-40%. Combined with forefoot 
                  procedures reduces ulcer recurrence from 60% to 15% at 2 years. 
                  Over-lengthening risk requires careful tensioning.
                </p>
              </div>
            </div>
          </section>

          {/* Plantar Exostectomies Section */}
          <section id="exostectomy" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Plantar Exostectomies</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Bone Resection Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Plantar Prominence Resection</h3>
              <p>
                Direct removal of bony prominences under chronic or recurrent ulcers 
                through carefully planned approaches that preserve structural integrity.
              </p>
              
              <div className={styles.techniqueGrid}>
                <div className={styles.techniqueType}>
                  <h4>Calcaneal Exostectomy</h4>
                  <ul>
                    <li>Lateral approach</li>
                    <li>Preserves plantar fascia</li>
                    <li>Beveled edges</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Metatarsal Head Resection</h4>
                  <ul>
                    <li>Partial vs complete</li>
                    <li>Distal vs dorsal approach</li>
                    <li>Adjacent joint preservation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Arch Stabilization Section */}
          <section id="arch" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Arch Stabilization</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Midfoot Reconstruction Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Midfoot Reconstruction</h3>
              <p>
                Procedures to correct Charcot collapse and stabilize midfoot deformity 
                that predisposes to medial column ulcers.
              </p>
              
              <div className={styles.levelGrid}>
                <div className={styles.levelType}>
                  <h4>Arthrodesis Techniques</h4>
                  <ul>
                    <li>Beaming fixation</li>
                    <li>Plate constructs</li>
                    <li>Circular frame options</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Tendon Balancing</h4>
                  <ul>
                    <li>Posterior tibial reconstruction</li>
                    <li>Peroneus longus transfer</li>
                    <li>Spring ligament repair</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Healing Protocol</h4>
                <p>
                  Non-weight bearing for 12+ weeks required. Union rates 70-85% in 
                  neuropathic patients. Custom CROW boots essential postoperatively.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Comprehensive Ulcer Prevention</h2>
            <p>
              Our surgical approach combines:
            </p>
            <ul className={styles.bulletList}>
              <li>Biomechanical analysis</li>
              <li>Targeted deformity correction</li>
              <li>Minimally invasive options</li>
              <li>Customized postoperative protocols</li>
              <li>Multidisciplinary follow-up</li>
            </ul>
            <div className={styles.ctaBox}>
              <h3>Need Ulcer Prevention Evaluation?</h3>
              <p>
                Our limb preservation team can assess your risk factors and recommend 
                personalized preventive strategies.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Schedule Biomechanical Assessment
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UlcerSurgeryPage;