import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Other Non-Healing Ulcers | Diabetic Foot Care Center',
  description: 'Learn about various types of chronic ulcers including arterial, venous, pressure, and neuropathic ulcers in diabetic patients.',
};

const NonHealingUlcersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Other Non-Healing Ulcers</h1>
          <p>
            Chronic wound types that resist standard treatment approaches
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/conditions">Conditions</Link> &gt; 
        <span>Non-Healing Ulcers</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#arterial-ulcers">Arterial Ulcers</a></li>
              <li><a href="#venous-ulcers">Venous Ulcers</a></li>
              <li><a href="#pressure-ulcers">Pressure Ulcers</a></li>
              <li><a href="#neuropathic-ulcers">Neuropathic Ulcers</a></li>
              <li><a href="#vasculitic-ulcers">Vasculitic Ulcers</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Wound Care Specialists</h3>
              <p>Our team provides advanced treatments for stubborn ulcers that won't heal.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Get Ulcer Evaluation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Understanding Chronic Ulcers</h2>
            <p>
              Non-healing ulcers represent a significant challenge in diabetic patients, often resulting from 
              multiple underlying factors including poor circulation, nerve damage, and metabolic imbalances. 
              Proper identification of ulcer type is crucial for effective treatment.
            </p>
            <div className={styles.warningBox}>
              <h3>Important Note</h3>
              <p>
                Any ulcer that hasn't shown improvement in 2-4 weeks requires specialized wound care evaluation. 
                Diabetic patients should never attempt self-treatment of persistent wounds.
              </p>
            </div>
          </section>

          {/* Arterial Ulcers Section */}
          <section id="arterial-ulcers" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Arterial (Ischemic) Ulcers</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Arterial Ulcer Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What Causes Arterial Ulcers?</h3>
              <p>
                Caused by inadequate blood supply to the lower extremities due to peripheral artery disease (PAD). 
                Diabetic patients develop these ulcers at younger ages and with more severe presentations due to 
                accelerated atherosclerosis.
              </p>
              
              <h3>Identifying Features</h3>
              <ul className={styles.bulletList}>
                <li>Location: Toes, heels, bony prominences</li>
                <li>Appearance: "Punched out" with pale base</li>
                <li>Pain: Often severe, worse at night/elevation</li>
                <li>Surrounding skin: Shiny, hairless, cool to touch</li>
                <li>Pulses: Diminished or absent</li>
              </ul>
              
              <h3>Management Approach</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Vascular Assessment</h4>
                  <ul>
                    <li>Ankle-brachial index (ABI)</li>
                    <li>Doppler ultrasound</li>
                    <li>Angiography (CT/MR)</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Therapeutic Options</h4>
                  <ul>
                    <li>Revascularization procedures</li>
                    <li>Specialized wound dressings</li>
                    <li>Hyperbaric oxygen therapy</li>
                    <li>Growth factor treatments</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Considerations</h4>
                <p>
                  Arterial ulcers in diabetics often have combined arterial and venous insufficiency. Calcified 
                  arteries may give falsely normal ABIs. Aggressive risk factor modification is essential to 
                  prevent progression.
                </p>
              </div>
            </div>
          </section>

          {/* Venous Ulcers Section */}
          <section id="venous-ulcers" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Venous Stasis Ulcers</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Venous Ulcer Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Venous Ulcers</h3>
              <p>
                Result from chronic venous insufficiency causing blood pooling in the legs. While less common 
                in diabetics than arterial ulcers, they can occur and present unique management challenges.
              </p>
              
              <h3>Characteristic Signs</h3>
              <ul className={styles.bulletList}>
                <li>Location: Medial lower leg (gaiter area)</li>
                <li>Appearance: Irregular shape, red granulation tissue</li>
                <li>Drainage: Moderate to heavy exudate</li>
                <li>Surrounding skin: Edematous, hyperpigmented</li>
                <li>Varicose veins often present</li>
              </ul>
              
              <h3>Treatment Protocol</h3>
              <div className={styles.managementGrid}>
                <div className={styles.managementType}>
                  <h4>Compression Therapy</h4>
                  <ul>
                    <li>Multilayer compression bandaging</li>
                    <li>Graduated compression stockings</li>
                    <li>Intermittent pneumatic compression</li>
                  </ul>
                </div>
                <div className={styles.managementType}>
                  <h4>Advanced Treatments</h4>
                  <ul>
                    <li>Venous ablation procedures</li>
                    <li>Skin grafting for large ulcers</li>
                    <li>Bioengineered skin substitutes</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Challenges</h4>
                <p>
                  Compression must be used cautiously in diabetics with mixed arterial disease. Venous ulcers 
                  in diabetics heal more slowly and have higher recurrence rates without comprehensive management.
                </p>
              </div>
            </div>
          </section>

          {/* Pressure Ulcers Section */}
          <section id="pressure-ulcers" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Pressure Ulcers</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Pressure Ulcer Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What are Pressure Ulcers?</h3>
              <p>
                Localized injuries to skin and underlying tissue caused by prolonged pressure, typically in 
                immobile patients. Diabetics develop pressure ulcers more easily due to microvascular disease.
              </p>
              
              <h3>Staging System</h3>
              <div className={styles.stageTable}>
                <div className={styles.stageRow}>
                  <div className={styles.stageCell}>Stage 1</div>
                  <div className={styles.stageCell}>Non-blanchable erythema</div>
                </div>
                <div className={styles.stageRow}>
                  <div className={styles.stageCell}>Stage 2</div>
                  <div className={styles.stageCell}>Partial thickness skin loss</div>
                </div>
                <div className={styles.stageRow}>
                  <div className={styles.stageCell}>Stage 3</div>
                  <div className={styles.stageCell}>Full thickness tissue loss</div>
                </div>
                <div className={styles.stageRow}>
                  <div className={styles.stageCell}>Stage 4</div>
                  <div className={styles.stageCell}>Exposed bone/tendon</div>
                </div>
              </div>
              
              <h3>Prevention & Treatment</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Prevention</h4>
                  <ul>
                    <li>Frequent position changes</li>
                    <li>Pressure-relieving devices</li>
                    <li>Skin inspection protocols</li>
                    <li>Nutrition optimization</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Treatment</h4>
                  <ul>
                    <li>Pressure offloading</li>
                    <li>Debridement of necrotic tissue</li>
                    <li>Negative pressure wound therapy</li>
                    <li>Surgical reconstruction</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Risks</h4>
                <p>
                  Diabetic patients develop pressure ulcers faster and with less pressure duration. Heel pressure 
                  ulcers are particularly common and challenging to treat due to limited tissue coverage.
                </p>
              </div>
            </div>
          </section>

          {/* Neuropathic Ulcers Section */}
          <section id="neuropathic-ulcers" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Neuropathic Ulcers</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Neuropathic Ulcer Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Neuropathic Ulcers</h3>
              <p>
                Caused by repetitive stress on insensate feet due to diabetic peripheral neuropathy. These are 
                among the most common ulcer types in diabetic patients.
              </p>
              
              <h3>Key Characteristics</h3>
              <ul className={styles.bulletList}>
                <li>Location: Plantar surface under metatarsal heads</li>
                <li>Appearance: Calloused edges, often painless</li>
                <li>Surrounding skin: Calloused, with possible deformity</li>
                <li>Pedal pulses: Typically present</li>
                <li>Probe-to-bone test important for osteomyelitis</li>
              </ul>
              
              <h3>Comprehensive Management</h3>
              <ol className={styles.numberedList}>
                <li>Complete offloading with total contact cast</li>
                <li>Aggressive debridement of callus and necrotic tissue</li>
                <li>Infection control with appropriate antibiotics</li>
                <li>Advanced wound dressings</li>
                <li>Custom therapeutic footwear after healing</li>
              </ol>
              
              <div className={styles.complicationBox}>
                <h4>Recurrence Prevention</h4>
                <p>
                  Without lifelong protective footwear and regular foot care, neuropathic ulcers recur in 
                  nearly 70% of diabetic patients within 5 years. Patient education is critical for 
                  long-term prevention.
                </p>
              </div>
            </div>
          </section>

          {/* Vasculitic Ulcers Section */}
          <section id="vasculitic-ulcers" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Vasculitic Ulcers</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Vasculitic Ulcer Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What are Vasculitic Ulcers?</h3>
              <p>
                Result from inflammation and necrosis of blood vessel walls, seen in various autoimmune 
                conditions that may coexist with diabetes.
              </p>
              
              <h3>Distinctive Features</h3>
              <ul className={styles.bulletList}>
                <li>Location: Distal extremities, often bilateral</li>
                <li>Appearance: "Punched out" with necrotic base</li>
                <li>Pain: Often severe relative to size</li>
                <li>Associated symptoms: Fever, malaise, joint pain</li>
                <li>Other signs: Livedo reticularis, nodules</li>
              </ul>
              
              <h3>Diagnosis & Treatment</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Diagnostic Workup</h4>
                  <ul>
                    <li>Skin biopsy (punch biopsy from edge)</li>
                    <li>ANCA and other autoimmune markers</li>
                    <li>Inflammatory markers (ESR, CRP)</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Therapy</h4>
                  <ul>
                    <li>Immunosuppressants (steroids, DMARDs)</li>
                    <li>Biologic agents in refractory cases</li>
                    <li>Wound care tailored to ulcer characteristics</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Considerations</h4>
                <p>
                  Immunosuppressive treatments for vasculitis require careful coordination with diabetes 
                  management due to impacts on glycemic control. Infection risk is substantially increased.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Comprehensive Ulcer Management</h2>
            <p>
              Effective treatment of chronic ulcers requires addressing both the wound and underlying causes:
            </p>
            <ul className={styles.bulletList}>
              <li>Multidisciplinary wound care team approach</li>
              <li>Accurate classification of ulcer type</li>
              <li>Optimization of blood glucose control</li>
              <li>Appropriate offloading strategies</li>
              <li>Management of comorbidities</li>
              <li>Patient and caregiver education</li>
            </ul>
            <div className={styles.ctaBox}>
              <h3>Specialized Wound Care</h3>
              <p>
                Our wound care center offers advanced treatments including bioengineered skin substitutes, 
                hyperbaric oxygen therapy, and surgical reconstruction for stubborn ulcers.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Schedule Wound Evaluation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NonHealingUlcersPage;