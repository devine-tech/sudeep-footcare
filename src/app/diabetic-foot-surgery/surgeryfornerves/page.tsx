import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Nerve Surgery Procedures | Peripheral Nerve Specialist Center',
  description: 'Advanced surgical treatments for nerve compression, injury and dysfunction including nerve release, neurolysis and functional tendon transfers.',
};

const NerveSurgeryPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Nerve Surgery Procedures</h1>
          <p>
            Restoring nerve function and relieving compression through precision surgical techniques
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/treatments">Treatments</Link> &gt; 
        <span>Nerve Procedures</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#entrapment-release">Entrapment Release</a></li>
              <li><a href="#neurolysis">Neurolysis</a></li>
              <li><a href="#tendon-transfers">Tendon Transfers</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Nerve Evaluation</h3>
              <p>Our peripheral nerve specialists provide comprehensive surgical solutions.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Request Nerve Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Peripheral Nerve Surgery</h2>
            <p>
              When nerve compression, injury or dysfunction causes pain, weakness or sensory loss, 
              specialized surgical techniques can restore function and relieve symptoms. 
              Our nerve surgeons utilize the most advanced microsurgical approaches.
            </p>
            <div className={styles.warningBox}>
              <h3>Surgical Timing Critical</h3>
              <p>
                Nerve surgery outcomes depend greatly on timing - early intervention often 
                yields better results. Electrophysiological studies guide decision making.
              </p>
            </div>
          </section>

          {/* Nerve Entrapment Release Section */}
          <section id="entrapment-release" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Nerve Entrapment Release</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Carpal Tunnel Release Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Nerve Compression</h3>
              <p>
                Entrapment neuropathies occur when peripheral nerves become compressed 
                at anatomical tunnels or fibro-osseous passages. Surgical release 
                decompresses the nerve to restore normal function.
              </p>
              
              <h3>Common Release Procedures</h3>
              <div className={styles.techniqueGrid}>
                <div className={styles.techniqueType}>
                  <h4>Carpal Tunnel Release</h4>
                  <ul>
                    <li>Open or endoscopic approach</li>
                    <li>Transverse carpal ligament division</li>
                    <li>90% success rate</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Ulnar Nerve Decompression</h4>
                  <ul>
                    <li>Cubital tunnel release</li>
                    <li>Medial epicondylectomy</li>
                    <li>Submuscular transposition</li>
                  </ul>
                </div>
                <div className={styles.techniqueType}>
                  <h4>Peroneal Nerve Release</h4>
                  <ul>
                    <li>Fibular tunnel decompression</li>
                    <li>Fascial band release</li>
                    <li>Combined with tendon procedures</li>
                  </ul>
                </div>
              </div>
              
              <h3>Surgical Approaches</h3>
              <div className={styles.approachGrid}>
                <div className={styles.approachType}>
                  <h4>Open Release</h4>
                  <ul>
                    <li>Direct visualization</li>
                    <li>Complete decompression</li>
                    <li>Small incision required</li>
                  </ul>
                </div>
                <div className={styles.approachType}>
                  <h4>Endoscopic Release</h4>
                  <ul>
                    <li>Minimally invasive</li>
                    <li>Faster recovery</li>
                    <li>Specialized equipment needed</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Outcome Considerations</h4>
                <p>
                  Success rates depend on duration and severity of compression. 
                  Diabetic patients may have slower recovery. Recurrent symptoms 
                  occur in 3-5% of cases requiring revision surgery.
                </p>
              </div>
            </div>
          </section>

          {/* Neurolysis Section */}
          <section id="neurolysis" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Neurolysis</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Microsurgical Neurolysis Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Nerve Decompression</h3>
              <p>
                Neurolysis involves carefully freeing a nerve from surrounding scar tissue, 
                adhesions or compressive lesions while preserving neural structures. 
                This microsurgical procedure can restore function to damaged nerves.
              </p>
              
              <h3>Neurolysis Types</h3>
              <div className={styles.levelGrid}>
                <div className={styles.levelType}>
                  <h4>External Neurolysis</h4>
                  <ul>
                    <li>Removes extrinsic compression</li>
                    <li>Releases nerve from surrounding tissue</li>
                    <li>Preserves epineurium</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Internal Neurolysis</h4>
                  <ul>
                    <li>Opens epineurium</li>
                    <li>Releases fascicular compression</li>
                    <li>Requires high magnification</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Vascularized Neurolysis</h4>
                  <ul>
                    <li>Preserves vasa nervorum</li>
                    <li>For radiation-induced fibrosis</li>
                    <li>Combines with flap coverage</li>
                  </ul>
                </div>
              </div>
              
              <h3>Clinical Applications</h3>
              <div className={styles.considerationGrid}>
                <div className={styles.considerationType}>
                  <h4>Trauma Cases</h4>
                  <ul>
                    <li>Post-fracture nerve adhesions</li>
                    <li>Crush injury fibrosis</li>
                    <li>Post-surgical scarring</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Chronic Conditions</h4>
                  <ul>
                    <li>Radiation fibrosis</li>
                    <li>Chronic inflammatory conditions</li>
                    <li>Recurrent entrapment</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Intraoperative Details</h4>
                  <ul>
                    <li>Microsurgical technique</li>
                    <li>Nerve stimulation monitoring</li>
                    <li>Adjunctive fat wrapping</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Recovery Expectations</h4>
                <p>
                  Neurolysis typically shows improvement within 3-6 months. 
                  Maximum recovery may take 12-18 months. Physical therapy 
                  is essential for optimal functional return.
                </p>
              </div>
            </div>
          </section>

          {/* Tendon Transfers Section */}
          <section id="tendon-transfers" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Tendon Transfers</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Tendon Transfer Procedure Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>About Functional Restoration</h3>
              <p>
                When nerve damage causes permanent muscle paralysis, tendon transfers 
                can restore function by redirecting working tendons to compensate 
                for lost movements. This complex reconstructive procedure requires 
                meticulous planning.
              </p>
              
              <h3>Common Transfer Procedures</h3>
              <div className={styles.levelGrid}>
                <div className={styles.levelType}>
                  <h4>Radial Nerve Palsy</h4>
                  <ul>
                    <li>Pronator teres to ECRB</li>
                    <li>FCU to EDC</li>
                    <li>PL to EPL</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Ulnar Nerve Palsy</h4>
                  <ul>
                    <li>ECRL to adductor pollicis</li>
                    <li>FDS to interossei</li>
                    <li>Brand transfer</li>
                  </ul>
                </div>
                <div className={styles.levelType}>
                  <h4>Peroneal Nerve Palsy</h4>
                  <ul>
                    <li>Tibialis posterior to dorsum</li>
                    <li>FDL/HL transfers</li>
                    <li>Combined with tendon Achilles lengthening</li>
                  </ul>
                </div>
              </div>
              
              <h3>Surgical Principles</h3>
              <div className={styles.considerationGrid}>
                <div className={styles.considerationType}>
                  <h4>Donor Selection</h4>
                  <ul>
                    <li>Expendable tendons</li>
                    <li>Similar excursion</li>
                    <li>Synergistic function</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Technical Factors</h4>
                  <ul>
                    <li>Proper tensioning</li>
                    <li>Pulley reconstruction</li>
                    <li>Secure fixation methods</li>
                  </ul>
                </div>
                <div className={styles.considerationType}>
                  <h4>Rehabilitation</h4>
                  <ul>
                    <li>Immobilization protocol</li>
                    <li>Gradual mobilization</li>
                    <li>Motor re-education</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.complicationBox}>
                <h4>Outcome Considerations</h4>
                <p>
                  Tendon transfers typically restore 60-80% of normal function. 
                  Results depend on patient compliance with therapy. 
                  Overcorrection and undercorrection are common technical errors.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Comprehensive Nerve Care</h2>
            <p>
              Our peripheral nerve program emphasizes:
            </p>
            <ul className={styles.bulletList}>
              <li>Precise diagnostic localization</li>
              <li>Timely surgical intervention</li>
              <li>Microsurgical expertise</li>
              <li>Multidisciplinary rehabilitation</li>
              <li>Long-term functional outcomes</li>
            </ul>
            <div className={styles.ctaBox}>
              <h3>Need Nerve Evaluation?</h3>
              <p>
                Our nerve specialists can assess your condition and recommend 
                the most appropriate surgical or non-surgical treatment options.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Schedule Nerve Consultation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NerveSurgeryPage;