import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Soft Tissue Infections | Diabetic Foot Care Center',
  description: 'Learn about serious soft tissue infections affecting diabetic patients including Cellulitis, Abscess, Necrotizing Fasciitis, and Gangrene.',
};

const SoftTissueInfectionsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Soft Tissue Infections</h1>
          <p>
            Serious infections affecting skin and underlying tissues in diabetic patients
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/conditions">Conditions</Link> &gt; 
        <span>Soft Tissue Infections</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#cellulitis">Cellulitis</a></li>
              <li><a href="#abscess">Abscess</a></li>
              <li><a href="#necrotizing-fasciitis">Necrotizing Fasciitis</a></li>
              <li><a href="#gangrene">Gangrene</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Emergency Warning</h3>
              <p>Soft tissue infections can become life-threatening quickly. Seek immediate medical care for suspected infections.</p>
              <Link href="/contact-us" className={styles.emergencyButton}>
                Urgent Care Needed
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Understanding Diabetic Soft Tissue Infections</h2>
            <p>
              Diabetic patients are particularly vulnerable to severe soft tissue infections due to compromised 
              immunity, poor circulation, and reduced sensation that delays detection. These infections can 
              progress rapidly and require prompt, aggressive treatment to prevent life-threatening complications.
            </p>
            <div className={styles.warningBox}>
              <h3>Critical Alert for Diabetic Patients</h3>
              <p>
                Any redness, swelling, warmth, or pain in your feet—even if minor—requires immediate medical 
                evaluation. What appears as a small infection can quickly become limb- or life-threatening 
                in diabetic individuals.
              </p>
            </div>
          </section>

          {/* Cellulitis Section */}
          <section id="cellulitis" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Cellulitis</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Cellulitis Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Cellulitis?</h3>
              <p>
                A common but potentially serious bacterial infection of the skin and underlying tissues that 
                can spread rapidly in diabetic patients due to impaired circulation and immune response.
              </p>
              
              <h3>Key Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Red, swollen, tender skin area that expands</li>
                <li>Skin feels warm to touch</li>
                <li>Fever and chills may be present</li>
                <li>Possible red streaks from the area</li>
                <li>In diabetics: may lack pain due to neuropathy</li>
              </ul>
              
              <h3>Treatment Protocol</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Mild Cases</h4>
                  <ul>
                    <li>Oral antibiotics (10-14 day course)</li>
                    <li>Elevation of affected limb</li>
                    <li>Warm compresses</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Severe Cases</h4>
                  <ul>
                    <li>Intravenous antibiotics</li>
                    <li>Hospitalization for monitoring</li>
                    <li>Possible surgical evaluation</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Risks</h4>
                <p>
                  Cellulitis in diabetics often requires longer antibiotic courses and closer monitoring due 
                  to higher treatment failure rates. The infection can quickly progress to abscess formation 
                  or systemic infection without obvious warning signs.
                </p>
              </div>
            </div>
          </section>

          {/* Abscess Section */}
          <section id="abscess" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Abscess</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Abscess Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is an Abscess?</h3>
              <p>
                A localized collection of pus surrounded by inflamed tissue, often developing from untreated 
                cellulitis or minor skin breaks. Diabetic patients are prone to abscesses due to impaired 
                immune function.
              </p>
              
              <h3>Identifying Features</h3>
              <ul className={styles.bulletList}>
                <li>Painful, swollen, firm lump under skin</li>
                <li>Overlying redness and warmth</li>
                <li>Possible fever and malaise</li>
                <li>May have central "pointing" or drainage</li>
                <li>In diabetics: may be deeper than apparent</li>
              </ul>
              
              <h3>Management Approach</h3>
              <div className={styles.managementGrid}>
                <div className={styles.managementType}>
                  <h4>Essential Treatment</h4>
                  <ul>
                    <li>Incision and drainage procedure</li>
                    <li>Culture of pus for bacteria identification</li>
                    <li>Antibiotic therapy (oral or IV)</li>
                    <li>Wound packing if large cavity</li>
                  </ul>
                </div>
                <div className={styles.managementType}>
                  <h4>Follow-up Care</h4>
                  <ul>
                    <li>Daily wound dressing changes</li>
                    <li>Monitoring for systemic infection</li>
                    <li>Evaluation for underlying osteomyelitis</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Concerns</h4>
                <p>
                  Diabetic foot abscesses often have deeper extensions than visible externally. They frequently 
                  communicate with bone, requiring imaging to rule out osteomyelitis. Healing is typically slower 
                  and requires meticulous wound care.
                </p>
              </div>
            </div>
          </section>

          {/* Necrotizing Fasciitis Section */}
          <section id="necrotizing-fasciitis" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Necrotizing Fasciitis</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Necrotizing Fasciitis Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Necrotizing Fasciitis?</h3>
              <p>
                A rare but extremely severe infection that destroys soft tissue at a rapid rate, with mortality 
                rates up to 30%. Diabetic patients are at increased risk for this "flesh-eating" infection.
              </p>
              
              <h3>Critical Warning Signs</h3>
              <ul className={styles.bulletList}>
                <li>Severe pain disproportionate to visible findings</li>
                <li>Rapid progression of redness/swelling</li>
                <li>Skin discoloration (purple, black)</li>
                <li>Fluid-filled blisters with dark fluid</li>
                <li>Systemic toxicity (fever, confusion, shock)</li>
                <li>In diabetics: may have subtle early signs</li>
              </ul>
              
              <h3>Emergency Management</h3>
              <ol className={styles.numberedList}>
                <li>Immediate hospitalization and IV antibiotics</li>
                <li>Urgent surgical debridement of dead tissue</li>
                <li>Possible hyperbaric oxygen therapy</li>
                <li>Intensive care support</li>
                <li>Multiple surgeries often required</li>
              </ol>
              
              <div className={styles.emergencyBox}>
                <h4>Life-Threatening Emergency</h4>
                <p>
                  Necrotizing fasciitis is a true medical emergency where hours matter. Diabetic patients with 
                  any concerning symptoms should go to the emergency department immediately. Delayed treatment 
                  dramatically increases mortality risk.
                </p>
              </div>
            </div>
          </section>

          {/* Gangrene Section */}
          <section id="gangrene" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Gangrene</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Gangrene Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Gangrene?</h3>
              <p>
                Death of body tissue due to lack of blood flow or serious bacterial infection. Diabetic patients 
                are particularly susceptible to both dry (ischemic) and wet (infectious) gangrene types.
              </p>
              
              <h3>Types and Symptoms</h3>
              <div className={styles.typeTable}>
                <div className={styles.typeRow}>
                  <div className={styles.typeCell}>Dry Gangrene</div>
                  <div className={styles.typeCell}>Cold, dry, shriveled skin that changes from blue to black</div>
                </div>
                <div className={styles.typeRow}>
                  <div className={styles.typeCell}>Wet Gangrene</div>
                  <div className={styles.typeCell}>Swollen, blistered, foul-smelling tissue with pus</div>
                </div>
                <div className={styles.typeRow}>
                  <div className={styles.typeCell}>Gas Gangrene</div>
                  <div className={styles.typeCell}>Severe pain, crepitus (bubbling under skin), toxic appearance</div>
                </div>
              </div>
              
              <h3>Treatment Strategies</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Medical</h4>
                  <ul>
                    <li>IV antibiotics</li>
                    <li>Vascular assessment</li>
                    <li>Hyperbaric oxygen therapy</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Surgical</h4>
                  <ul>
                    <li>Debridement of dead tissue</li>
                    <li>Revascularization procedures</li>
                    <li>Possible amputation</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Prognosis</h4>
                <p>
                  Gangrene in diabetic patients often requires more extensive treatment due to widespread vascular 
                  disease. The risk of contralateral limb involvement is high, emphasizing the need for ongoing 
                  preventive care after treatment.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Preventing Soft Tissue Infections in Diabetes</h2>
            <p>
              While not all infections can be prevented, these strategies significantly reduce risks:
            </p>
            <ul className={styles.bulletList}>
              <li>Daily foot inspections for any breaks in skin</li>
              <li>Immediate cleaning and protection of any wounds</li>
              <li>Optimal blood glucose control</li>
              <li>Properly fitted shoes to prevent skin trauma</li>
              <li>Regular professional foot care</li>
              <li>Prompt treatment of fungal infections</li>
              <li>Avoidance of barefoot walking</li>
            </ul>
            <div className={styles.ctaBox}>
              <h3>Infection Concerns?</h3>
              <p>
                Our infectious disease and wound care specialists provide comprehensive evaluation and 
                treatment for all stages of soft tissue infections in diabetic patients.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Seek Immediate Evaluation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SoftTissueInfectionsPage;