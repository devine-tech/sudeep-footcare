import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Varicose Veins | Diabetic Foot Care Center',
  description: 'Learn about varicose veins, their complications in diabetic patients, and advanced treatment options available at our center.',
};

const VaricoseVeinsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Varicose Veins</h1>
          <p>
            Understanding and treating abnormal vein dilation in diabetic patients
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/conditions">Conditions</Link> &gt; 
        <span>Varicose Veins</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#symptoms">Symptoms</a></li>
              <li><a href="#complications">Complications</a></li>
              <li><a href="#treatments">Treatment Options</a></li>
              <li><a href="#diabetic-care">Diabetic Care</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Vein Specialist Evaluation</h3>
              <p>Our vascular team specializes in diabetic-friendly vein treatments.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Schedule Vein Assessment
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Understanding Varicose Veins</h2>
            <p>
              Varicose veins are enlarged, twisted veins that typically occur in the legs when valves become weak 
              or damaged, allowing blood to pool. For diabetic patients, varicose veins present unique challenges 
              due to circulatory and healing complications.
            </p>
            <div className={styles.warningBox}>
              <h3>Important Note for Diabetic Patients</h3>
              <p>
                Varicose veins in diabetics can lead to serious skin changes and ulceration more quickly than 
                in non-diabetic individuals. Early evaluation and treatment are recommended to prevent complications.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>What Causes Varicose Veins?</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Vein Anatomy Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Vein Valve Dysfunction</h3>
              <p>
                Healthy leg veins contain one-way valves that keep blood flowing toward the heart. When these valves 
                weaken or fail, blood flows backward and pools in the veins, causing them to stretch and twist.
              </p>
              
              <h3>Risk Factors</h3>
              <ul className={styles.bulletList}>
                <li><strong>Age:</strong> Risk increases over time</li>
                <li><strong>Gender:</strong> More common in women</li>
                <li><strong>Pregnancy:</strong> Increased blood volume and hormones</li>
                <li><strong>Obesity:</strong> Added pressure on veins</li>
                <li><strong>Prolonged standing:</strong> Occupational hazard</li>
                <li><strong>Diabetes:</strong> Accelerates venous disease progression</li>
              </ul>
              
              <div className={styles.anatomyBox}>
                <h4>Vein Classification</h4>
                <div className={styles.veinTypeGrid}>
                  <div className={styles.veinType}>
                    <h5>Spider Veins</h5>
                    <p>Small, web-like reddish veins near skin surface</p>
                  </div>
                  <div className={styles.veinType}>
                    <h5>Reticular Veins</h5>
                    <p>Blue-green veins slightly deeper than spider veins</p>
                  </div>
                  <div className={styles.veinType}>
                    <h5>Varicose Veins</h5>
                    <p>Large, rope-like bulging veins 3mm diameter</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Symptoms Section */}
          <section id="symptoms" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Symptoms and Signs</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Varicose Vein Symptoms Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Common Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Visible bulging, twisted blue or purple veins</li>
                <li>Aching, heavy feeling in legs</li>
                <li>Throbbing or cramping pain</li>
                <li>Worsened discomfort after prolonged sitting/standing</li>
                <li>Itching around veins</li>
                <li>Skin discoloration near affected veins</li>
              </ul>
              
              <h3>Diabetic-Specific Concerns</h3>
              <ul className={styles.bulletList}>
                <li>Neuropathy may mask typical pain symptoms</li>
                <li>Skin changes develop more rapidly</li>
                <li>Higher risk of asymptomatic progression</li>
                <li>Earlier onset of complications</li>
              </ul>
              
              <div className={styles.progressionBox}>
                <h4>Disease Progression</h4>
                <ol className={styles.numberedList}>
                  <li>Early: Cosmetic concerns only</li>
                  <li>Moderate: Aching, swelling after standing</li>
                  <li>Advanced: Skin changes, discoloration</li>
                  <li>Severe: Ulceration, thrombophlebitis</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Complications Section */}
          <section id="complications" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Potential Complications</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Vein Complications Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Common Complications</h3>
              <div className={styles.complicationGrid}>
                <div className={styles.complicationType}>
                  <h4>Superficial Thrombophlebitis</h4>
                  <p>Painful inflammation and blood clots in surface veins</p>
                </div>
                <div className={styles.complicationType}>
                  <h4>Venous Stasis Dermatitis</h4>
                  <p>Skin inflammation from chronic blood pooling</p>
                </div>
                <div className={styles.complicationType}>
                  <h4>Venous Ulcers</h4>
                  <p>Non-healing wounds from severe venous insufficiency</p>
                </div>
              </div>
              
              <h3>Diabetic-Specific Risks</h3>
              <ul className={styles.bulletList}>
                <li>Ulcers develop 3x faster than non-diabetics</li>
                <li>Higher rate of ulcer recurrence</li>
                <li>Increased infection risk from minor skin breaks</li>
                <li>Poorer response to standard treatments</li>
              </ul>
              
              <div className={styles.emergencyBox}>
                <h4>When to Seek Immediate Care</h4>
                <ul className={styles.bulletList}>
                  <li>Sudden painful swelling in leg</li>
                  <li>Skin ulceration or open sores</li>
                  <li>Signs of infection (redness, warmth, fever)</li>
                  <li>Bleeding from varicose vein</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Treatments Section */}
          <section id="treatments" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Treatment Options</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Vein Treatments Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Conservative Management</h3>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentType}>
                  <h4>Compression Therapy</h4>
                  <ul>
                    <li>Graduated compression stockings (20-30 mmHg)</li>
                    <li>Proper fitting essential for diabetics</li>
                    <li>Daily wear recommended</li>
                  </ul>
                </div>
                <div className={styles.treatmentType}>
                  <h4>Lifestyle Modifications</h4>
                  <ul>
                    <li>Regular walking exercise</li>
                    <li>Leg elevation when resting</li>
                    <li>Weight management</li>
                    <li>Avoid prolonged standing/sitting</li>
                  </ul>
                </div>
              </div>
              
              <h3>Minimally Invasive Procedures</h3>
              <div className={styles.procedureGrid}>
                <div className={styles.procedureType}>
                  <h4>Sclerotherapy</h4>
                  <p>Injection of solution to collapse small veins</p>
                </div>
                <div className={styles.procedureType}>
                  <h4>Endovenous Ablation</h4>
                  <p>Laser or radiofrequency closure of faulty veins</p>
                </div>
                <div className={styles.procedureType}>
                  <h4>Microphlebectomy</h4>
                  <p>Tiny incisions to remove surface varicose veins</p>
                </div>
              </div>
              
              <h3>Surgical Options</h3>
              <ul className={styles.bulletList}>
                <li><strong>Vein stripping:</strong> Removal of large saphenous vein</li>
                <li><strong>Ambulatory phlebectomy:</strong> Outpatient vein removal</li>
                <li><strong>Bypass surgery:</strong> For severe venous obstruction</li>
              </ul>
            </div>
          </section>

          {/* Diabetic Care Section */}
          <section id="diabetic-care" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Special Considerations for Diabetics</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Diabetic Vein Care Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Modified Treatment Approaches</h3>
              <ul className={styles.bulletList}>
                <li>More frequent follow-up visits</li>
                <li>Lower threshold for early intervention</li>
                <li>Aggressive wound prevention strategies</li>
                <li>Careful compression therapy monitoring</li>
              </ul>
              
              <h3>Integrated Care Plan</h3>
              <div className={styles.carePlanGrid}>
                <div className={styles.carePlanItem}>
                  <h4>Vascular Assessment</h4>
                  <p>Regular arterial and venous evaluations</p>
                </div>
                <div className={styles.carePlanItem}>
                  <h4>Glycemic Control</h4>
                  <p>Optimized to support healing</p>
                </div>
                <div className={styles.carePlanItem}>
                  <h4>Foot Protection</h4>
                  <p>Custom footwear to prevent trauma</p>
                </div>
                <div className={styles.carePlanItem}>
                  <h4>Multidisciplinary Team</h4>
                  <p>Endocrinology, podiatry, vascular coordination</p>
                </div>
              </div>
              
              <div className={styles.preventionBox}>
                <h4>Prevention Strategies</h4>
                <ul className={styles.bulletList}>
                  <li>Daily leg elevation exercises</li>
                  <li>Moisturize skin to prevent cracking</li>
                  <li>Inspect legs daily for changes</li>
                  <li>Never cross legs when sitting</li>
                  <li>Avoid high-heeled shoes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Comprehensive Vein Care for Diabetic Patients</h2>
            <p>
              Our vascular specialists understand the unique challenges varicose veins present for diabetic 
              patients. We offer a full spectrum of evidence-based treatments tailored to your individual 
              needs and healing capacity.
            </p>
            <div className={styles.ctaBox}>
              <h3>Take the First Step Toward Healthier Legs</h3>
              <p>
                Early intervention can prevent serious complications. Contact us today to schedule a 
                comprehensive vein evaluation with our diabetic vascular specialists.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Schedule Vein Consultation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VaricoseVeinsPage;