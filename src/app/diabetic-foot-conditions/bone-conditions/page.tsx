import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const BoneConditionsPage = () => {
  return (
    <div className={styles.conditionsPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 style={{ color: 'white'}}>Bone Conditions</h1>
          <p style={{ color: 'white'}}>Understanding and treating diabetic bone conditions of the foot</p>
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
                <li><a href="#bunions">Bunions</a></li>
                <li><a href="#osteoma">Osteoma</a></li>
                <li><a href="#charcots-foot">Charcot's Foot</a></li>
                <li><a href="#osteomyelitis">Osteomyelitis</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-9">
            <section className={`${styles.infoSection} section-padding`}>
              <div className={styles.sectionHeader}>
                <h2>Diabetic Bone Conditions</h2>
                <p>
                  Diabetes can significantly impact bone health in the feet, leading to various conditions that require 
                  specialized care. At Diabetic Foot Care Center, we provide comprehensive diagnosis and treatment for 
                  all types of diabetic bone conditions.
                </p>
              </div>
            </section>

            <section id="bunions" className={styles.conditionSection}>
              <h2>Bunions</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🦴</div>
                <h3>What are Bunions?</h3>
                <p>
                  Bunions (hallux valgus) are bony bumps that form at the base of the big toe where it joins the foot. 
                  They develop when the big toe pushes against the next toe, forcing the joint of the big toe to enlarge 
                  and stick out. The skin over the bunion might be red and sore.
                </p>
                <h3>How Diabetes Affects Bunions</h3>
                <p>
                  People with diabetes are at higher risk for developing bunions due to nerve damage (neuropathy) and 
                  poor circulation. These factors can lead to altered foot mechanics and increased pressure on certain 
                  areas of the foot, contributing to bunion formation.
                </p>
                <h3>Treatment Options</h3>
                <p>
                  Treatment for bunions in diabetic patients may include:
                </p>
                <ul>
                  <li>Custom orthotic devices to help distribute pressure evenly</li>
                  <li>Properly fitted shoes with adequate toe room</li>
                  <li>Padding and taping to reduce pressure on the bunion</li>
                  <li>Physical therapy exercises to maintain joint mobility</li>
                  <li>Anti-inflammatory medications to reduce pain and swelling</li>
                  <li>Surgical intervention in severe cases (bunionectomy)</li>
                </ul>
              </div>
            </section>

            <section id="osteoma" className={styles.conditionSection}>
              <h2>Osteoma</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🦴</div>
                <h3>What is Osteoma?</h3>
                <p>
                  An osteoma is a benign (non-cancerous) growth of new bone tissue that typically develops on existing 
                  bone. When it occurs in the foot, it can cause pain, discomfort, and difficulty walking, especially 
                  for diabetic patients who already have compromised foot health.
                </p>
                <h3>Diabetic Complications with Osteoma</h3>
                <p>
                  For people with diabetes, osteomas in the foot present additional challenges:
                </p>
                <ul>
                  <li>Increased risk of ulceration if the growth creates pressure points</li>
                  <li>Difficulty in detecting pain due to diabetic neuropathy</li>
                  <li>Slower healing after any surgical intervention</li>
                  <li>Higher risk of infection if the skin breaks down over the growth</li>
                </ul>
                <h3>Treatment Approaches</h3>
                <p>
                  Treatment for foot osteomas in diabetic patients may include:
                </p>
                <ul>
                  <li>Regular monitoring to prevent complications</li>
                  <li>Specialized footwear to accommodate the growth and reduce pressure</li>
                  <li>Surgical removal if the osteoma causes significant pain or increases ulceration risk</li>
                  <li>Comprehensive foot care to prevent skin breakdown</li>
                </ul>
              </div>
            </section>

            <section id="charcots-foot" className={styles.conditionSection}>
              <h2>Charcot's Foot</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🦴</div>
                <h3>Understanding Charcot's Foot</h3>
                <p>
                  Charcot's foot (Charcot arthropathy) is a serious condition that affects the bones, joints, and soft 
                  tissues of the foot and ankle. It is characterized by joint dislocation, fractures, and deformities 
                  that occur with minimal or no trauma in people with peripheral neuropathy, most commonly due to diabetes.
                </p>
                <h3>Causes and Risk Factors</h3>
                <p>
                  Charcot's foot develops as a result of neuropathy, which decreases sensation and the ability to feel 
                  temperature, pain, or trauma. Key factors include:
                </p>
                <ul>
                  <li>Long-standing diabetes with poor glucose control</li>
                  <li>Peripheral neuropathy causing loss of protective sensation</li>
                  <li>Altered blood flow to the extremities</li>
                  <li>Previous foot surgery or trauma</li>
                  <li>Obesity, which increases pressure on the feet</li>
                </ul>
                <h3>Symptoms and Diagnosis</h3>
                <p>
                  Early signs of Charcot's foot include:
                </p>
                <ul>
                  <li>Warmth and redness in the affected foot</li>
                  <li>Swelling without an obvious cause</li>
                  <li>Pain or discomfort (though may be absent due to neuropathy)</li>
                  <li>Visible deformity as the condition progresses</li>
                </ul>
                <h3>Treatment and Management</h3>
                <p>
                  Treatment for Charcot's foot focuses on preventing further deformity and may include:
                </p>
                <ul>
                  <li>Immobilization with casting or bracing</li>
                  <li>Non-weight bearing to allow bones to heal</li>
                  <li>Custom footwear and orthotics once acute phase resolves</li>
                  <li>Surgical intervention for severe deformities</li>
                  <li>Regular monitoring and follow-up care</li>
                </ul>
              </div>
            </section>

            <section id="osteomyelitis" className={styles.conditionSection}>
              <h2>Osteomyelitis</h2>
              <div className={styles.conditionCard}>
                <div className={styles.conditionIcon}>🦴</div>
                <h3>What is Osteomyelitis?</h3>
                <p>
                  Osteomyelitis is a serious bone infection that can occur when bacteria from the bloodstream or 
                  surrounding tissues spread to the bone. In diabetic patients, it often develops as a complication 
                  of foot ulcers, where infection penetrates to the underlying bone.
                </p>
                <h3>Why Diabetic Patients Are at Risk</h3>
                <p>
                  People with diabetes have a significantly higher risk of developing osteomyelitis due to:
                </p>
                <ul>
                  <li>Impaired immune response, making it harder to fight infections</li>
                  <li>Poor circulation, limiting the delivery of antibiotics and immune cells</li>
                  <li>Neuropathy, which may prevent early detection of wounds or infections</li>
                  <li>Higher incidence of foot ulcers that can serve as entry points for bacteria</li>
                </ul>
                <h3>Diagnosis and Treatment</h3>
                <p>
                  Diagnosing and treating osteomyelitis in diabetic patients involves:
                </p>
                <ul>
                  <li>Imaging studies (X-rays, MRI, bone scans) to confirm bone involvement</li>
                  <li>Bone biopsy to identify the specific bacteria causing the infection</li>
                  <li>Long-term antibiotic therapy, often for 4-6 weeks or longer</li>
                  <li>Surgical debridement to remove infected and dead bone tissue</li>
                  <li>Wound care and offloading to promote healing</li>
                  <li>In severe cases, amputation may be necessary to prevent the spread of infection</li>
                </ul>
                <h3>Prevention Strategies</h3>
                <p>
                  Preventing osteomyelitis is crucial for diabetic patients and includes:
                </p>
                <ul>
                  <li>Daily foot inspections to detect wounds early</li>
                  <li>Proper foot hygiene and moisture control</li>
                  <li>Well-fitted shoes to prevent pressure points and ulcers</li>
                  <li>Prompt treatment of any foot injuries or infections</li>
                  <li>Regular podiatric check-ups</li>
                  <li>Maintaining good blood glucose control</li>
                </ul>
              </div>
            </section>

            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Expert Care for Diabetic Bone Conditions</h2>
                <p>
                  If you're experiencing symptoms of any bone condition in your feet, early intervention is crucial, 
                  especially for diabetic patients. Contact Diabetic Foot Care Center today to schedule a consultation 
                  with Dr. Prayas Kumar.
                </p>
                <Link href="/contact-us" className="btn btn-accent">
                  Schedule an Appointment
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoneConditionsPage;
