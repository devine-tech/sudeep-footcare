import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const NerveSurgeriesPage = () => {
  return (
    <div className={styles.conditionsPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 style={{ color: 'white'}}>Nerve Surgery Procedures</h1>
          <p style={{ color: 'white'}}>Specialized surgical interventions for nerve compression, damage, and functional restoration</p>
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
                <li><a href="#entrapment-release">Nerve Entrapment Release</a></li>
                <li><a href="#neurolysis">Neurolysis</a></li>
                <li><a href="#tendon-transfers">Tendon Transfers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-9">
            <section className={`${styles.infoSection} section-padding`}>
              <div className={styles.sectionHeader}>
                <h2>Peripheral Nerve Surgery</h2>
                <p>
                  Our surgical team specializes in procedures to relieve nerve compression, repair damaged nerves, 
                  and restore function through advanced microsurgical techniques. These interventions can significantly 
                  improve pain, sensation, and motor function in patients with nerve-related conditions.
                </p>
              </div>
            </section>

            <section id="entrapment-release" className={styles.conditionSection}>
              <h2>Nerve Entrapment Release</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🔓</div>
                <h3>About Nerve Entrapment</h3>
                <p>
                  Nerve entrapment occurs when peripheral nerves become compressed at anatomical tunnels or fibrous bands, 
                  causing pain, tingling, weakness, and loss of function. Surgical release involves decompressing the 
                  nerve at the site of compression.
                </p>
                
                <h3>Common Release Procedures</h3>
                <div className={styles.procedureGrid}>
                  <div className={styles.procedureType}>
                    <h4>Carpal Tunnel Release</h4>
                    <p>Transverse carpal ligament division for median nerve decompression</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Cubital Tunnel Release</h4>
                    <p>Ulnar nerve decompression at the elbow</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Tarsal Tunnel Release</h4>
                    <p>Posterior tibial nerve decompression in the foot</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Peroneal Nerve Release</h4>
                    <p>Fibular nerve decompression at the knee</p>
                  </div>
                </div>

                <h3>Surgical Approaches</h3>
                <ul>
                  <li><strong>Open technique:</strong> Direct visualization through small incision</li>
                  <li><strong>Endoscopic:</strong> Minimally invasive with camera guidance</li>
                  <li><strong>Submuscular transposition:</strong> For recurrent or severe cases</li>
                </ul>

                <h3>Recovery Expectations</h3>
                <ul>
                  <li>Immediate relief of tingling/numbness in many cases</li>
                  <li>2-6 weeks for wound healing</li>
                  <li>3-6 months for full nerve recovery</li>
                  <li>Gradual return of muscle strength</li>
                  <li>Possible night splinting during recovery</li>
                </ul>
              </div>
            </section>

            <section id="neurolysis" className={styles.conditionSection}>
              <h2>Neurolysis</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🔍</div>
                <h3>Understanding Neurolysis</h3>
                <p>
                  Neurolysis is the surgical freeing of a nerve from surrounding scar tissue or adhesions that 
                  restrict its movement or compress its fibers. This procedure can restore nerve function when 
                  non-surgical treatments fail.
                </p>

                <h3>Types of Neurolysis</h3>
                <div className={styles.procedureGrid}>
                  <div className={styles.procedureType}>
                    <h4>External Neurolysis</h4>
                    <p>Removal of scar tissue surrounding the nerve</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Internal Neurolysis</h4>
                    <p>Microsurgical dissection within the nerve's epineurium</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Adhesiolysis</h4>
                    <p>Release of nerve from adjacent structures</p>
                  </div>
                </div>

                <h3>Indications</h3>
                <ul>
                  <li>Post-traumatic nerve adhesions</li>
                  <li>Postsurgical scar entrapment</li>
                  <li>Chronic nerve compression</li>
                  <li>Radiation fibrosis</li>
                  <li>Failed previous decompression</li>
                </ul>

                <h3>Surgical Technique</h3>
                <ol>
                  <li>Nerve identification and exposure</li>
                  <li>Microscopic evaluation of nerve integrity</li>
                  <li>Careful circumferential dissection</li>
                  <li>Use of nerve stimulator when needed</li>
                  <li>Placement in healthy tissue bed</li>
                </ol>

                <h3>Postoperative Care</h3>
                <ul>
                  <li>Early protected motion to prevent re-adhesion</li>
                  <li>Nerve gliding exercises</li>
                  <li>Serial clinical evaluations</li>
                  <li>Possible use of anti-adhesion barriers</li>
                </ul>
              </div>
            </section>

            <section id="tendon-transfers" className={styles.conditionSection}>
              <h2>Tendon Transfers</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🔄</div>
                <h3>About Tendon Transfers</h3>
                <p>
                  When nerve damage causes irreversible muscle paralysis, tendon transfers can restore function 
                  by redirecting working tendons to take over the lost function. This complex procedure requires 
                  meticulous planning and execution.
                </p>

                <h3>Common Transfer Procedures</h3>
                <div className={styles.procedureGrid}>
                  <div className={styles.procedureType}>
                    <h4>Radial Nerve Palsy</h4>
                    <p>PT to ECRB, FCR to EDC, PL to EPL transfers</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Ulnar Nerve Palsy</h4>
                    <p>ECRB to ADM, FDS to interossei transfers</p>
                  </div>
                  <div className={styles.procedureType}>
                    <h4>Peroneal Nerve Palsy</h4>
                    <p>Posterior tibialis transfer for foot drop</p>
                  </div>
                </div>

                <h3>Surgical Principles</h3>
                <ul>
                  <li>Donor muscle must have adequate strength</li>
                  <li>Straight line of pull from origin to insertion</li>
                  <li>Single function per transferred tendon</li>
                  <li>Proper tensioning during fixation</li>
                  <li>Synergistic actions preferred</li>
                </ul>

                <h3>Rehabilitation Protocol</h3>
                <ol>
                  <li>Immobilization for 3-4 weeks post-op</li>
                  <li>Gradual protected motion</li>
                  <li>Strengthening at 6-8 weeks</li>
                  <li>Functional retraining</li>
                  <li>Full recovery may take 6-12 months</li>
                </ol>
              </div>
            </section>

            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Restoring Nerve Function</h2>
                <p>
                  Our peripheral nerve specialists can evaluate your condition and recommend the most appropriate 
                  surgical solution. Early intervention often leads to better outcomes. Contact us to schedule 
                  a consultation with Dr. Prayas Kumar.
                </p>
                <Link href="/contact-us" className="btn btn-accent">
                  Schedule a Consultation
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NerveSurgeriesPage;