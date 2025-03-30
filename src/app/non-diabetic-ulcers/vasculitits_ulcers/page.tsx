import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Vasculitic Ulcers | Diabetic Foot Care Center',
  description: 'Learn about vasculitic ulcers, their connection to autoimmune conditions in diabetic patients, and specialized treatment approaches.',
};

const VasculiticUlcersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Vasculitic Ulcers</h1>
          <p>
            Autoimmune-related ulcerations requiring specialized care
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/conditions">Conditions</Link> &gt; 
        <span>Vasculitic Ulcers</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#overview">Disease Overview</a></li>
              <li><a href="#causes">Causes & Types</a></li>
              <li><a href="#symptoms">Symptoms</a></li>
              <li><a href="#diagnosis">Diagnosis</a></li>
              <li><a href="#treatment">Treatment</a></li>
              <li><a href="#diabetic-care">Diabetic Care</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Autoimmune Ulcer Specialists</h3>
              <p>Our rheumatology and wound care team provides comprehensive vasculitis management.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Schedule Evaluation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Understanding Vasculitic Ulcers</h2>
            <p>
              Vasculitic ulcers result from inflammation and damage to blood vessel walls, leading to tissue 
              ischemia and necrosis. These ulcers present unique diagnostic and therapeutic challenges, 
              particularly in diabetic patients where multiple vascular pathologies may coexist.
            </p>
            <div className={styles.warningBox}>
              <h3>Important Note</h3>
              <p>
                Vasculitic ulcers often indicate systemic autoimmune activity. Diabetic patients with 
                these ulcers require prompt rheumatologic evaluation in addition to wound care.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Vasculitis Disease Process</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Vasculitis Mechanism Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Pathophysiology</h3>
              <p>
                Vasculitis involves autoimmune-mediated inflammation of blood vessel walls, causing:
              </p>
              <ul className={styles.bulletList}>
                <li>Narrowing or occlusion of vessel lumens</li>
                <li>Ischemia in supplied tissues</li>
                <li>Vessel wall weakening leading to hemorrhage</li>
                <li>Necrosis of surrounding tissues</li>
              </ul>
              
              <h3>Disease Spectrum</h3>
              <div className={styles.spectrumBox}>
                <div className={styles.spectrumItem}>
                  <h4>Small Vessel</h4>
                  <p>Cutaneous leukocytoclastic vasculitis</p>
                  <p>ANCA-associated vasculitides</p>
                </div>
                <div className={styles.spectrumItem}>
                  <h4>Medium Vessel</h4>
                  <p>Polyarteritis nodosa</p>
                  <p>Kawasaki disease</p>
                </div>
                <div className={styles.spectrumItem}>
                  <h4>Large Vessel</h4>
                  <p>Giant cell arteritis</p>
                  <p>Takayasu arteritis</p>
                </div>
              </div>
            </div>
          </section>

          {/* Causes Section */}
          <section id="causes" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Causes & Classification</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Vasculitis Classification Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Primary Vasculitides</h3>
              <ul className={styles.bulletList}>
                <li><strong>ANCA-associated:</strong> Granulomatosis with polyangiitis, Microscopic polyangiitis</li>
                <li><strong>Immune complex:</strong> IgA vasculitis, Cryoglobulinemic vasculitis</li>
                <li><strong>Other:</strong> Behçet's disease, Polyarteritis nodosa</li>
              </ul>
              
              <h3>Secondary Causes</h3>
              <div className={styles.causeGrid}>
                <div className={styles.causeType}>
                  <h4>Autoimmune</h4>
                  <ul>
                    <li>Rheumatoid arthritis</li>
                    <li>Lupus erythematosus</li>
                    <li>Sjögren's syndrome</li>
                  </ul>
                </div>
                <div className={styles.causeType}>
                  <h4>Infectious</h4>
                  <ul>
                    <li>Hepatitis B/C</li>
                    <li>HIV</li>
                    <li>Chronic bacterial infections</li>
                  </ul>
                </div>
                <div className={styles.causeType}>
                  <h4>Medication-Induced</h4>
                  <ul>
                    <li>Propylthiouracil</li>
                    <li>Hydralazine</li>
                    <li>Allopurinol</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diabetes Connection</h4>
                <p>
                  Diabetes increases risk of certain vasculitides and worsens outcomes. The chronic inflammatory 
                  state of diabetes may trigger or exacerbate vasculitic processes, while vasculitis can 
                  accelerate diabetic microvascular complications.
                </p>
              </div>
            </div>
          </section>

          {/* Symptoms Section */}
          <section id="symptoms" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Clinical Presentation</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Vasculitic Ulcer Symptoms Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Ulcer Characteristics</h3>
              <ul className={styles.bulletList}>
                <li><strong>Location:</strong> Typically distal extremities (legs, feet, fingers)</li>
                <li><strong>Appearance:</strong> "Punched-out" with necrotic base</li>
                <li><strong>Border:</strong> Irregular, violaceous (purplish) edges</li>
                <li><strong>Pain:</strong> Often severe relative to size</li>
                <li><strong>Healing:</strong> Poor without immunosuppression</li>
              </ul>
              
              <h3>Associated Systemic Symptoms</h3>
              <div className={styles.symptomGrid}>
                <div className={styles.symptomType}>
                  <h4>Constitutional</h4>
                  <ul>
                    <li>Fever</li>
                    <li>Weight loss</li>
                    <li>Fatigue</li>
                  </ul>
                </div>
                <div className={styles.symptomType}>
                  <h4>Cutaneous</h4>
                  <ul>
                    <li>Palpable purpura</li>
                    <li>Livedo reticularis</li>
                    <li>Nodules</li>
                  </ul>
                </div>
                <div className={styles.symptomType}>
                  <h4>Organ-Specific</h4>
                  <ul>
                    <li>Renal: Hematuria, proteinuria</li>
                    <li>Pulmonary: Hemoptysis</li>
                    <li>Neurologic: Mononeuritis multiplex</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.warningBox}>
                <h4>Diabetic Atypical Presentations</h4>
                <p>
                  Diabetic patients may have muted inflammatory responses due to immune dysfunction. 
                  Vasculitic ulcers may lack characteristic features or be mistaken for diabetic ulcers, 
                  delaying proper diagnosis.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnosis Section */}
          <section id="diagnosis" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Diagnostic Approach</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Vasculitis Diagnosis Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Key Diagnostic Tests</h3>
              <div className={styles.diagnosticGrid}>
                <div className={styles.diagnosticType}>
                  <h4>Laboratory</h4>
                  <ul>
                    <li>ANCA testing (MPO, PR3)</li>
                    <li>Inflammatory markers (ESR, CRP)</li>
                    <li>Complete blood count</li>
                    <li>Renal function tests</li>
                    <li>Urinalysis</li>
                  </ul>
                </div>
                <div className={styles.diagnosticType}>
                  <h4>Pathology</h4>
                  <ul>
                    <li>Skin biopsy (punch from ulcer edge)</li>
                    <li>Direct immunofluorescence</li>
                    <li>Vessel wall inflammation on histology</li>
                  </ul>
                </div>
                <div className={styles.diagnosticType}>
                  <h4>Imaging</h4>
                  <ul>
                    <li>CT/MR angiography</li>
                    <li>PET-CT for large vessel vasculitis</li>
                    <li>Doppler ultrasound</li>
                  </ul>
                </div>
              </div>
              
              <h3>Diagnostic Criteria</h3>
              <div className={styles.criteriaBox}>
                <p>
                  Diagnosis requires correlation of clinical features, serologic markers, and histopathologic 
                  findings. The 2022 ACR/EULAR classification criteria provide standardized diagnostic 
                  frameworks for specific vasculitides.
                </p>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Diagnostic Challenges in Diabetes</h4>
                <p>
                  Elevated inflammatory markers may be attributed to diabetic complications rather than 
                  vasculitis. Renal involvement may be mistaken for diabetic nephropathy. A high index of 
                  suspicion is needed when ulcers have atypical features or progress despite standard wound care.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section id="treatment" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Comprehensive Treatment</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Vasculitis Treatment Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Immunosuppressive Therapy</h3>
              <div className={styles.medicationGrid}>
                <div className={styles.medicationType}>
                  <h4>Induction</h4>
                  <ul>
                    <li>Glucocorticoids (prednisone 1mg/kg/day)</li>
                    <li>Cyclophosphamide (severe cases)</li>
                    <li>Rituximab (ANCA-associated)</li>
                  </ul>
                </div>
                <div className={styles.medicationType}>
                  <h4>Maintenance</h4>
                  <ul>
                    <li>Methotrexate</li>
                    <li>Azathioprine</li>
                    <li>Mycophenolate mofetil</li>
                  </ul>
                </div>
              </div>
              
              <h3>Ulcer-Specific Care</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Wound Management</h4>
                  <ul>
                    <li>Debridement of necrotic tissue</li>
                    <li>Advanced dressings (collagen, antimicrobial)</li>
                    <li>Negative pressure wound therapy</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Adjunctive Therapies</h4>
                  <ul>
                    <li>Pain control</li>
                    <li>Infection prophylaxis</li>
                    <li>Compression therapy (if no arterial insufficiency)</li>
                  </ul>
                </div>
              </div>
              
              <h3>Monitoring Protocol</h3>
              <ul className={styles.bulletList}>
                <li>Weekly wound measurements</li>
                <li>Serial inflammatory markers</li>
                <li>Medication toxicity monitoring</li>
                <li>Multidisciplinary follow-up</li>
              </ul>
            </div>
          </section>

          {/* Diabetic Care Section */}
          <section id="diabetic-care" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Special Considerations for Diabetics</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Diabetic Vasculitis Care Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Treatment Modifications</h3>
              <div className={styles.modificationGrid}>
                <div className={styles.modificationType}>
                  <h4>Glycemic Control</h4>
                  <ul>
                    <li>More frequent glucose monitoring</li>
                    <li>Insulin adjustments for steroids</li>
                    <li>Avoidance of hyperglycemia exacerbation</li>
                  </ul>
                </div>
                <div className={styles.modificationType}>
                  <h4>Medication Safety</h4>
                  <ul>
                    <li>Renal dose adjustments</li>
                    <li>Infection risk mitigation</li>
                    <li>Drug interaction screening</li>
                  </ul>
                </div>
              </div>
              
              <h3>Integrated Care Approach</h3>
              <div className={styles.careTeamGrid}>
                <div className={styles.careTeamMember}>
                  <h4>Rheumatology</h4>
                  <p>Vasculitis diagnosis and immunosuppression</p>
                </div>
                <div className={styles.careTeamMember}>
                  <h4>Endocrinology</h4>
                  <p>Diabetes management during treatment</p>
                </div>
                <div className={styles.careTeamMember}>
                  <h4>Wound Care</h4>
                  <p>Ulcer-specific therapies</p>
                </div>
                <div className={styles.careTeamMember}>
                  <h4>Vascular Surgery</h4>
                  <p>Circulatory assessment and interventions</p>
                </div>
              </div>
              
              <div className={styles.preventionBox}>
                <h4>Prevention Strategies</h4>
                <ul className={styles.bulletList}>
                  <li>Strict foot care to prevent trauma</li>
                  <li>Early reporting of new skin lesions</li>
                  <li>Regular rheumatologic follow-up</li>
                  <li>Vaccination before immunosuppression</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Comprehensive Vasculitic Ulcer Management</h2>
            <p>
              Effective treatment requires addressing both the autoimmune vasculitis and resulting ulcers, 
              with special attention to diabetic metabolic control. Our multidisciplinary team provides:
            </p>
            <ul className={styles.bulletList}>
              <li>Accurate classification of vasculitis type</li>
              <li>Individualized immunosuppressive regimens</li>
              <li>Advanced wound healing technologies</li>
              <li>Coordinated diabetes management</li>
              <li>Long-term monitoring for recurrence</li>
            </ul>
            <div className={styles.ctaBox}>
              <h3>Concerned About Vasculitic Ulcers?</h3>
              <p>
                Early diagnosis and treatment significantly improve outcomes. Contact our vasculitis 
                specialists for a comprehensive evaluation.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Schedule Specialist Consultation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VasculiticUlcersPage;