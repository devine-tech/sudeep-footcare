import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Nail Conditions | Diabetic Foot Care Center',
  description: 'Learn about common nail conditions affecting diabetic patients including fungal nails, brittle nails, nail hematoma, discolored nails, and ingrown toenails.',
};

const NailConditionsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Nail Conditions</h1>
          <p>
            Common nail disorders affecting diabetic patients
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/conditions">Conditions</Link> &gt; 
        <span>Nail Conditions</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#fungal-nails">Fungal Nails</a></li>
              <li><a href="#brittle-nails">Brittle Nails</a></li>
              <li><a href="#nail-hematoma">Nail Hematoma</a></li>
              <li><a href="#discolored-nails">Discolored Nails</a></li>
              <li><a href="#ingrown-toenails">Ingrown Toenails</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Need Nail Care?</h3>
              <p>Our podiatrists specialize in diabetic nail care and treatment.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Schedule an Evaluation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Understanding Diabetic Nail Conditions</h2>
            <p>
              Nail disorders are particularly concerning for people with diabetes. Poor circulation and neuropathy 
              can lead to serious complications from seemingly minor nail problems. Diabetic patients often experience 
              changes in nail texture, color, and growth that require professional attention to prevent infections 
              and other complications.
            </p>
            <div className={styles.warningBox}>
              <h3>Important Note for Diabetic Patients</h3>
              <p>
                Never ignore nail changes or attempt self-treatment of nail problems. What might be a minor issue 
                for others can become a serious infection for diabetics. Seek professional care at the first sign 
                of nail abnormalities.
              </p>
            </div>
          </section>

          {/* Fungal Nails Section */}
          <section id="fungal-nails" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Fungal Nails (Onychomycosis)</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Fungal Nails Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What are Fungal Nails?</h3>
              <p>
                Fungal nail infection occurs when fungi invade the nail bed and plate, causing thickening, 
                discoloration, and crumbling of the nails. Diabetics are more susceptible due to reduced 
                immunity and circulation.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Thickened nails</li>
                <li>Yellow, brown, or white discoloration</li>
                <li>Brittle, crumbly, or ragged nails</li>
                <li>Distorted nail shape</li>
                <li>Slight foul odor</li>
                <li>Separation of nail from nail bed</li>
              </ul>
              
              <h3>Treatment Options</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Topical</h4>
                  <ul>
                    <li>Antifungal nail lacquers (ciclopirox)</li>
                    <li>Medicated nail creams</li>
                    <li>Essential oil formulations</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Oral</h4>
                  <ul>
                    <li>Terbinafine or itraconazole</li>
                    <li>3-6 month treatment courses</li>
                    <li>Requires liver monitoring</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Procedural</h4>
                  <ul>
                    <li>Laser therapy</li>
                    <li>Nail debridement</li>
                    <li>Photodynamic therapy</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Risks</h4>
                <p>
                  Fungal nails can lead to cracks that allow bacterial entry, potentially causing cellulitis 
                  or foot ulcers. Oral antifungals require careful monitoring in diabetics due to potential 
                  drug interactions and side effects. Poor circulation may reduce treatment effectiveness.
                </p>
              </div>
            </div>
          </section>

          {/* Brittle Nails Section */}
          <section id="brittle-nails" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Brittle Nails</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Brittle Nails Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What Causes Brittle Nails?</h3>
              <p>
                Brittle nails that split, peel, or break easily can result from aging, nutritional deficiencies, 
                or diabetes-related factors like poor circulation and nerve damage affecting nail growth.
              </p>
              
              <h3>Common Characteristics</h3>
              <ul className={styles.bulletList}>
                <li>Nails that split vertically</li>
                <li>Peeling at nail tips</li>
                <li>Excessive dryness</li>
                <li>Rough nail surfaces</li>
                <li>Slow nail growth</li>
              </ul>
              
              <h3>Management Strategies</h3>
              <div className={styles.managementGrid}>
                <div className={styles.managementType}>
                  <h4>Lifestyle</h4>
                  <ul>
                    <li>Stay hydrated</li>
                    <li>Wear gloves when cleaning</li>
                    <li>Limit nail polish remover use</li>
                  </ul>
                </div>
                <div className={styles.managementType}>
                  <h4>Nutritional</h4>
                  <ul>
                    <li>Biotin supplements</li>
                    <li>Adequate protein intake</li>
                    <li>Omega-3 fatty acids</li>
                  </ul>
                </div>
                <div className={styles.managementType}>
                  <h4>Topical</h4>
                  <ul>
                    <li>Moisturizing creams</li>
                    <li>Nail hardeners (sparingly)</li>
                    <li>Protective nail coatings</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Considerations</h4>
                <p>
                  Brittle nails in diabetics are more prone to cracking, which can create entry points for 
                  infection. Avoid aggressive filing or cutting. Regular podiatric care helps maintain nail 
                  health and prevent complications.
                </p>
              </div>
            </div>
          </section>

          {/* Nail Hematoma Section */}
          <section id="nail-hematoma" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Nail Hematoma</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Nail Hematoma Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is a Nail Hematoma?</h3>
              <p>
                A collection of blood under the nail plate, usually caused by trauma. In diabetics, it may occur 
                with minimal trauma due to fragile blood vessels.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Dark red, purple, or black discoloration under nail</li>
                <li>Throbbing pain initially</li>
                <li>Pressure sensation</li>
                <li>Possible nail lifting</li>
              </ul>
              
              <h3>Treatment Approaches</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Acute Care</h4>
                  <ul>
                    <li>Ice to reduce swelling</li>
                    <li>Pain relief medication</li>
                    <li>Trephination (draining) if painful</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Long-term</h4>
                  <ul>
                    <li>Protection of the nail</li>
                    <li>Monitoring for infection</li>
                    <li>Possible nail removal if severe</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Risks</h4>
                <p>
                  Hematomas increase infection risk in diabetics. The dark environment under the nail can 
                  promote bacterial growth. Any signs of infection (increased pain, redness, swelling, or 
                  discharge) require immediate medical attention.
                </p>
              </div>
            </div>
          </section>

          {/* Discolored Nails Section */}
          <section id="discolored-nails" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Discolored Nails</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Discolored Nails Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Causes of Nail Discoloration</h3>
              <p>
                Nail color changes can indicate various conditions from fungal infections to systemic diseases. 
                Diabetics may experience unique discoloration patterns related to their condition.
              </p>
              
              <h3>Color Guide</h3>
              <div className={styles.colorTable}>
                <div className={styles.colorRow}>
                  <div className={styles.colorCell} style={{backgroundColor: '#ffff00'}}>Yellow</div>
                  <div className={styles.colorCell}>Fungal infection, psoriasis</div>
                </div>
                <div className={styles.colorRow}>
                  <div className={styles.colorCell} style={{backgroundColor: '#000000'}}>Black</div>
                  <div className={styles.colorCell}>Trauma, melanoma, fungal</div>
                </div>
                <div className={styles.colorRow}>
                  <div className={styles.colorCell} style={{backgroundColor: '#ffffff'}}>White</div>
                  <div className={styles.colorCell}>Fungal, trauma, liver disease</div>
                </div>
                <div className={styles.colorRow}>
                  <div className={styles.colorCell} style={{backgroundColor: '#008000'}}>Green</div>
                  <div className={styles.colorCell}>Bacterial infection</div>
                </div>
                <div className={styles.colorRow}>
                  <div className={styles.colorCell} style={{backgroundColor: '#800080'}}>Purple</div>
                  <div className={styles.colorCell}>Trauma, circulatory issues</div>
                </div>
              </div>
              
              <h3>Evaluation</h3>
              <ul className={styles.bulletList}>
                <li>Medical history review</li>
                <li>Nail clippings for microscopy/culture</li>
                <li>Blood tests for systemic causes</li>
                <li>Possible nail biopsy</li>
              </ul>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Alert</h4>
                <p>
                  Sudden nail color changes in diabetics should never be ignored. They may indicate infection, 
                  poor circulation, or other diabetes-related complications requiring prompt evaluation.
                </p>
              </div>
            </div>
          </section>

          {/* Ingrown Toenails Section */}
          <section id="ingrown-toenails" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Ingrown Toenails</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Ingrown Toenail Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What are Ingrown Toenails?</h3>
              <p>
                A painful condition where the nail grows into the surrounding skin, causing inflammation and 
                potential infection. Diabetics are at higher risk due to possible nail growth abnormalities 
                and reduced ability to feel early warning signs.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Pain and tenderness along nail edges</li>
                <li>Redness and swelling</li>
                <li>Possible drainage or pus</li>
                <li>Overgrowth of skin around nail</li>
                <li>In diabetics: may progress to ulceration</li>
              </ul>
              
              <h3>Treatment Options</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Mild Cases</h4>
                  <ul>
                    <li>Warm soaks with Epsom salts</li>
                    <li>Antibiotic ointments</li>
                    <li>Proper nail trimming guidance</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Severe Cases</h4>
                  <ul>
                    <li>Partial nail removal</li>
                    <li>Permanent nail edge removal</li>
                    <li>Oral antibiotics if infected</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Dangers</h4>
                <p>
                  Ingrown nails can quickly progress to serious infections in diabetics. Due to neuropathy, 
                  pain may not correlate with severity. Any redness, swelling, or drainage requires immediate 
                  professional care to prevent cellulitis or bone infection.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Preventing Nail Problems in Diabetes</h2>
            <p>
              Proper nail care is essential for diabetic foot health. Follow these guidelines:
            </p>
            <ul className={styles.bulletList}>
              <li>Inspect nails daily for changes</li>
              <li>Cut nails straight across, not too short</li>
              <li>Wear properly fitted shoes</li>
              <li>Keep feet clean and dry</li>
              <li>Moisturize around nails (not between)</li>
              <li>Never attempt "bathroom surgery" on nails</li>
              <li>Schedule regular professional nail care</li>
            </ul>
            <div className={styles.ctaBox}>
              <h3>Professional Nail Care Available</h3>
              <p>
                Our diabetic foot specialists provide safe nail care and treatment for all types of nail 
                conditions, with special attention to the unique needs of diabetic patients.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Schedule Nail Care
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NailConditionsPage;