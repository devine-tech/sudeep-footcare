import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Corrective Surgeries for Complicated Ulcers | Diabetic Foot Care Center',
  description: 'Learn about surgical interventions for complex ulcers including debridement, fasciotomies, and amputation procedures for diabetic patients.',
};

const CorrectiveSurgeriesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Corrective Surgeries for Complicated Ulcers</h1>
          <p>
            Advanced surgical interventions for non-healing diabetic wounds
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/conditions">Conditions</Link> &gt; 
        <span>Ulcer Surgeries</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#debridement">Debridement</a></li>
              <li><a href="#fasciotomies">Fasciotomies</a></li>
              <li><a href="#amputation">Amputation</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Surgical Evaluation</h3>
              <p>Our wound care surgeons specialize in limb-preserving techniques.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Request Surgical Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Surgical Management of Complex Ulcers</h2>
            <p>
              When diabetic ulcers become complicated by infection, necrosis, or biomechanical factors, 
              surgical intervention may be necessary to prevent systemic infection and preserve function. 
              Our team specializes in these advanced corrective procedures tailored for diabetic patients.
            </p>
            <div className={styles.warningBox}>
              <h3>Important Note</h3>
              <p>
                Surgical decisions for diabetic ulcers require careful evaluation of vascular status, 
                infection control, and healing potential. Early intervention often yields better outcomes.
              </p>
            </div>
          </section>

          {/* Debridement Section */}
          <section id="debridement" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Surgical Debridement</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Debridement Procedure Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Surgical Debridement</h3>
              <p>
                The controlled removal of necrotic, infected, or nonviable tissue to promote wound healing. 
                This is often the first surgical step in managing complex diabetic ulcers.
              </p>
              
              <h3>Debridement Techniques</h3>
              <div className={styles.techniqueGrid}>
                <div className={styles.techniqueType}>
                  <h4>Sharp Debridement</h4>
                  <ul>
                    <li>Scalpel or scissors removal</li>
                    <li>Precise tissue excision</li>
                    <li>Bedside or operating room</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Mechanical Debridement</h4>
                  <ul>
                    <li>Wet-to-dry dressings</li>
                    <li>Pulsed lavage</li>
                    <li>Ultrasound-assisted</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Surgical Debridement</h4>
                  <ul>
                    <li>Extensive necrosis removal</li>
                    <li>Bone involvement</li>
                    <li>Operating room setting</li>
                  </ul>
                </div>
              </div>
              
              <h3>Goals of Debridement</h3>
              <ul className={styles.bulletList}>
                <li>Remove biofilm and bacterial burden</li>
                <li>Convert chronic wound to acute wound</li>
                <li>Stimulate wound edge angiogenesis</li>
                <li>Allow accurate wound assessment</li>
                <li>Prepare wound bed for closure</li>
              </ul>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Considerations</h4>
                <p>
                  Diabetic patients often require more frequent debridements due to impaired healing. 
                  Vascular assessment is critical pre-debridement. Partial debridements may be staged 
                  to avoid creating larger wounds that cannot heal.
                </p>
              </div>
            </div>
          </section>

          {/* Fasciotomies Section */}
          <section id="fasciotomies" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Fasciotomies</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Fasciotomy Procedure Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Fasciotomies</h3>
              <p>
                Surgical release of fascial compartments to relieve pressure caused by severe swelling 
                or infection, preventing tissue necrosis and limb loss.
              </p>
              
              <h3>Indications</h3>
              <div className={styles.indicationGrid}>
                <div className={styles.indicationType}>
                  <h4>Acute Compartment Syndrome</h4>
                  <ul>
                    <li>Trauma-related swelling</li>
                    <li>Severe infection</li>
                    <li>Reperfusion injury</li>
                  </ul>
                </div>
                <div className={styles.indicationType}>
                  <h4>Chronic Complications</h4>
                  <ul>
                    <li>Necrotizing fasciitis</li>
                    <li>Severe cellulitis with swelling</li>
                    <li>Crush injuries</li>
                  </ul>
                </div>
              </div>
              
              <h3>Surgical Approach</h3>
              <div className={styles.approachGrid}>
                <div className={styles.approachType}>
                  <h4>Lower Leg</h4>
                  <ul>
                    <li>Double-incision technique</li>
                    <li>Four-compartment release</li>
                    <li>Fibulectomy in severe cases</li>
                  </ul>
                </div>
                <div className={styles.approachType}>
                  <h4>Foot</h4>
                  <ul>
                    <li>Dorsal incisions for intrinsic muscles</li>
                    <li>Medial approach for calcaneal compartment</li>
                    <li>Minimally invasive when possible</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Challenges</h4>
                <p>
                  Diabetic patients have higher risks of wound complications post-fasciotomy. 
                  Compartment pressures may be elevated at lower thresholds. Neuropathy can mask 
                  typical pain symptoms, delaying diagnosis.
                </p>
              </div>
            </div>
          </section>

          {/* Amputation Section */}
          <section id="amputation" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Amputation</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Amputation Levels Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Amputation</h3>
              <p>
                Surgical removal of a limb or digit when tissue viability cannot be maintained or 
                infection threatens life. Our surgeons perform the most conservative procedure possible 
                while ensuring complete disease removal.
              </p>
              
              <h3>Amputation Levels</h3>
              <div className={styles.levelGrid}>
                <div className={styles.levelType}>
                  <h4>Toe Amputation</h4>
                  <ul>
                    <li>Single or multiple toes</li>
                    <li>Partial or complete</li>
                    <li>Minimal gait impact</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Ray Amputation</h4>
                  <ul>
                    <li>Toe plus metatarsal</li>
                    <li>Better weight distribution</li>
                    <li>Preserves foot structure</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Transmetatarsal</h4>
                  <ul>
                    <li>Partial foot preservation</li>
                    <li>Custom shoe required</li>
                    <li>Good proprioception</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Below-Knee</h4>
                  <ul>
                    <li>Tibia preserved</li>
                    <li>Prosthetic compatible</li>
                    <li>Most common major amputation</li>
                  </ul>
                </div>
              </div>
              
              <h3>Surgical Considerations</h3>
              <div className={styles.considerationGrid}>
                <div className={styles.considerationType}>
                  <h4>Preoperative</h4>
                  <ul>
                    <li>Vascular assessment</li>
                    <li>Infection control</li>
                    <li>Nutritional optimization</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Intraoperative</h4>
                  <ul>
                    <li>Flap design for closure</li>
                    <li>Nerve handling</li>
                    <li>Bone contouring</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Postoperative</h4>
                  <ul>
                    <li>Phantom pain management</li>
                    <li>Early mobilization</li>
                    <li>Prosthetic planning</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetic Outcomes</h4>
                <p>
                  Diabetic patients require careful postoperative monitoring for contralateral 
                  limb complications. Healing times are typically longer. Comprehensive 
                  rehabilitation is essential for optimal functional recovery.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Comprehensive Surgical Care</h2>
            <p>
              Our surgical approach to complicated ulcers focuses on:
            </p>
            <ul className={styles.bulletList}>
              <li>Limb preservation when possible</li>
              <li>Aggressive infection control</li>
              <li>Multidisciplinary rehabilitation</li>
              <li>Prevention of recurrence</li>
              <li>Patient-centered decision making</li>
            </ul>
            <div className={styles.ctaBox}>
              <h3>Need Surgical Evaluation?</h3>
              <p>
                Our wound care surgeons can assess your ulcer and recommend the most appropriate 
                surgical or non-surgical treatment options.
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

export default CorrectiveSurgeriesPage;