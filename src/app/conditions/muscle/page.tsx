import React from 'react';
import Link from 'next/link';
//import Image from 'next/image';
import styles from './muscle.module.css';

export const metadata = {
  title: 'Muscle-Tendon Conditions | Diabetic Foot Care Center',
  description: 'Learn about various muscle and tendon conditions affecting diabetic feet, including Tendoachilis Rupture, Claw Toe, Foot Drop, Tendonitis, Plantar Fasciitis, and Foot Pain Treatments.',
};

const MuscleTendonConditionsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Muscle-Tendon Conditions</h1>
          <p>
            Common muscle and tendon conditions affecting the foot in diabetic patients
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/conditions">Conditions</Link> &gt; 
        <span>Muscle-Tendon Conditions</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#tendoachilis-rupture">Tendoachilis Rupture</a></li>
              <li><a href="#claw-toe">Claw Toe</a></li>
              <li><a href="#foot-drop">Foot Drop</a></li>
              <li><a href="#tendonitis">Tendonitis</a></li>
              <li><a href="#plantar-fasciitis">Plantar Fasciitis</a></li>
              <li><a href="#foot-pain-treatments">Foot Pain Treatments</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Need Expert Advice?</h3>
              <p>Our specialists can help you manage muscle and tendon conditions and prevent complications.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Understanding Muscle and Tendon Conditions</h2>
            <p>
              Muscle and tendon conditions of the foot are particularly concerning for people with diabetes. 
              Diabetic neuropathy can reduce sensation and affect muscle function, while poor circulation can 
              slow healing and increase the risk of complications when injuries occur.
            </p>
            <p>
              Additionally, long-term elevated blood glucose levels can cause glycation of tendons and ligaments, 
              making them less flexible and more prone to injury. Regular foot examinations and proper foot care 
              are essential for preventing and managing these conditions.
            </p>
            <div className={styles.warningBox}>
              <h3>Important Note for Diabetic Patients</h3>
              <p>
                If you have diabetes and notice any changes in your foot function, mobility, or experience pain, 
                consult with a healthcare provider promptly. Never attempt to self-treat muscle or tendon conditions, 
                as this can lead to serious complications.
              </p>
            </div>
          </section>

          {/* Tendoachilis Rupture Section */}
          <section id="tendoachilis-rupture" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Tendoachilis Rupture</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Tendoachilis Rupture Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Tendoachilis Rupture?</h3>
              <p>
                Tendoachilis rupture, also known as Achilles tendon rupture, is a complete or partial tear of the 
                tendon that connects the calf muscles to the heel bone. This condition can occur suddenly during 
                physical activity or develop gradually due to tendon degeneration. In diabetic patients, chronic 
                high blood sugar can weaken tendons, making them more susceptible to rupture.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Sudden, sharp pain in the back of the ankle or calf</li>
                <li>A popping or snapping sound at the time of injury</li>
                <li>Swelling and bruising in the calf area</li>
                <li>Difficulty walking or standing on tiptoes</li>
                <li>Weakness in the affected leg</li>
                <li>A gap or indentation in the tendon just above the heel</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Treatment depends on the severity of the rupture and may include non-surgical approaches such as 
                immobilization with a cast or boot, or surgical repair for complete tears. For diabetic patients, 
                careful monitoring during recovery is essential due to increased risk of complications. Prevention 
                includes maintaining good blood glucose control, regular stretching, appropriate footwear, and 
                avoiding sudden increases in physical activity.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  For diabetic patients, complications from Achilles tendon rupture can include delayed healing, 
                  infection following surgery, and re-rupture. Poor circulation can significantly impact recovery 
                  time and outcomes. Additionally, prolonged immobilization can lead to muscle atrophy and joint 
                  stiffness, which may be more pronounced in diabetic patients.
                </p>
              </div>
            </div>
          </section>

          {/* Claw Toe Section */}
          <section id="claw-toe" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Claw Toe</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Claw Toe Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Claw Toe?</h3>
              <p>
                Claw toe is a deformity where the toes bend upward at the joint where the toes meet the foot 
                (metatarsophalangeal joint), and downward at the middle and end joints, resembling a claw. 
                This condition is common in diabetic patients due to muscle imbalances caused by nerve damage 
                (diabetic neuropathy).
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Toes bent in a claw-like position</li>
                <li>Pain in the toes, ball of the foot, or front of the foot</li>
                <li>Calluses or corns on the top of the toe joints or at the tip of the toes</li>
                <li>Difficulty finding comfortable shoes</li>
                <li>Reduced ability to flex the toes</li>
                <li>Open sores in severe cases, particularly in diabetic patients</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Treatment options include wearing shoes with a wide, deep toe box, using cushioned shoe inserts or 
                custom orthotics, toe exercises to strengthen and stretch the muscles, and in severe cases, surgery. 
                For diabetic patients, regular foot examinations are crucial to detect claw toes early. Prevention 
                includes maintaining good blood glucose control to minimize nerve damage, wearing properly fitted 
                shoes, and performing regular foot exercises.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  For diabetic patients, claw toes can create pressure points that lead to calluses, corns, and 
                  eventually ulcers. Due to reduced sensation from neuropathy, these ulcers may go unnoticed until 
                  they become infected. Infections in diabetic patients can progress rapidly and may lead to serious 
                  complications, including the need for amputation if not treated promptly.
                </p>
              </div>
            </div>
          </section>

          {/* Foot Drop Section */}
          <section id="foot-drop" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Foot Drop</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Foot Drop Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Foot Drop?</h3>
              <p>
                Foot drop is a condition characterized by difficulty lifting the front part of the foot, causing 
                the toes to drag on the ground while walking. It's not a disease itself but a symptom of an 
                underlying neurological, muscular, or anatomical problem. In diabetic patients, it's often caused 
                by peripheral neuropathy affecting the nerves that control the muscles in the foot and ankle.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Inability to lift the front part of the foot</li>
                <li>Dragging of the toes when walking</li>
                <li>High steppage gait (lifting the knee higher than normal to avoid dragging the toes)</li>
                <li>Numbness in the top of the foot and toes</li>
                <li>Weakness in the foot and ankle</li>
                <li>Decreased mobility and increased risk of falls</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Treatment depends on the underlying cause and may include braces or ankle-foot orthoses (AFOs) to 
                hold the foot in a normal position, physical therapy to strengthen foot and leg muscles, nerve 
                stimulation, and in some cases, surgery. For diabetic patients, maintaining good blood glucose 
                control is essential to prevent or slow the progression of neuropathy. Regular foot examinations 
                and prompt treatment of any foot problems can help prevent complications.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  Foot drop can significantly impact mobility and increase the risk of falls. The altered gait 
                  pattern can also lead to other musculoskeletal problems, including knee, hip, and back pain. 
                  For diabetic patients, the combination of foot drop and reduced sensation can increase the risk 
                  of foot injuries, ulcers, and infections, which may lead to serious complications if not treated promptly.
                </p>
              </div>
            </div>
          </section>

          {/* Tendonitis Section */}
          <section id="tendonitis" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Tendonitis</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Tendonitis Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Tendonitis?</h3>
              <p>
                Tendonitis (also spelled tendinitis) is inflammation or irritation of a tendon, the thick fibrous 
                cords that attach muscles to bones. In the foot, it commonly affects the Achilles tendon, posterior 
                tibial tendon, or peroneal tendons. Diabetic patients are more susceptible to tendonitis due to 
                reduced blood flow and changes in tendon structure caused by elevated blood glucose levels.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Pain and tenderness along the affected tendon</li>
                <li>Pain that worsens with movement or activity</li>
                <li>Swelling around the tendon</li>
                <li>Warmth and redness over the affected area</li>
                <li>Crackling or grating sensation when moving the tendon</li>
                <li>Reduced range of motion in the affected joint</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Treatment typically includes rest, ice, compression, and elevation (RICE), non-steroidal 
                anti-inflammatory drugs (NSAIDs), physical therapy, and in some cases, corticosteroid injections. 
                For diabetic patients, careful monitoring during recovery is essential. Prevention includes 
                maintaining good blood glucose control, proper warm-up before exercise, appropriate footwear with 
                good support, and avoiding sudden increases in physical activity.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  If left untreated, tendonitis can lead to chronic pain, tendon rupture, and permanent damage to 
                  the tendon. For diabetic patients, the healing process may be slower due to reduced blood flow, 
                  and there's an increased risk of infection if open wounds develop. Additionally, altered gait 
                  patterns due to tendonitis pain can create pressure points that may lead to ulcers in patients 
                  with diabetic neuropathy.
                </p>
              </div>
            </div>
          </section>

          {/* Plantar Fasciitis Section */}
          <section id="plantar-fasciitis" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Plantar Fasciitis</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Plantar Fasciitis Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Plantar Fasciitis?</h3>
              <p>
                Plantar fasciitis is inflammation of the plantar fascia, a thick band of tissue that runs across 
                the bottom of the foot, connecting the heel bone to the toes. It's one of the most common causes 
                of heel pain. Diabetic patients are at increased risk due to changes in foot structure, reduced 
                flexibility of the plantar fascia due to glycation, and altered biomechanics related to neuropathy.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Stabbing pain in the bottom of the foot near the heel</li>
                <li>Pain that is usually worst with the first steps after awakening</li>
                <li>Pain that increases after prolonged standing or when getting up after sitting</li>
                <li>Pain after exercise, not usually during exercise</li>
                <li>Heel tenderness</li>
                <li>Limited ankle mobility due to tight calf muscles</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Treatment options include rest, ice, stretching exercises, physical therapy, night splints, custom 
                orthotics, supportive shoes, and in some cases, corticosteroid injections. For diabetic patients, 
                non-invasive treatments are preferred due to the increased risk of complications with injections or 
                surgery. Prevention includes maintaining a healthy weight, wearing supportive shoes, gradually 
                increasing physical activity, and regular stretching of the calf muscles and plantar fascia.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  Chronic plantar fasciitis can lead to changes in walking pattern to avoid heel pain, which may 
                  cause knee, hip, or back problems. For diabetic patients, altered gait can create pressure points 
                  that may lead to calluses, corns, or ulcers, particularly if neuropathy is present. Additionally, 
                  chronic inflammation can lead to plantar fascia rupture or heel spurs.
                </p>
              </div>
              
              <Link href="/conditions/muscle/plantar-fasciitis" className={styles.readMoreLink}>
                Read more about Plantar Fasciitis
              </Link>
            </div>
          </section>

          {/* Foot Pain Treatments Section */}
          <section id="foot-pain-treatments" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Foot Pain Treatments</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Foot Pain Treatments Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>Comprehensive Approach to Foot Pain</h3>
              <p>
                Foot pain in diabetic patients requires a comprehensive approach that addresses both the immediate 
                pain and the underlying causes. Treatment must take into account the unique challenges faced by 
                diabetic patients, including neuropathy, poor circulation, and increased risk of infection.
              </p>
              
              <h3>Conservative Treatments</h3>
              <ul className={styles.bulletList}>
                <li><strong>Rest and Activity Modification:</strong> Reducing activities that exacerbate pain</li>
                <li><strong>Ice and Heat Therapy:</strong> To reduce inflammation and improve circulation</li>
                <li><strong>Physical Therapy:</strong> Exercises to strengthen foot muscles and improve flexibility</li>
                <li><strong>Footwear Modifications:</strong> Properly fitted shoes with good support</li>
                <li><strong>Custom Orthotics:</strong> To redistribute pressure and provide support</li>
                <li><strong>Padding and Taping:</strong> To protect sensitive areas and provide support</li>
                <li><strong>Pain Medications:</strong> NSAIDs or other pain relievers as appropriate</li>
              </ul>
              
              <h3>Advanced Treatments</h3>
              <ul className={styles.bulletList}>
                <li><strong>Corticosteroid Injections:</strong> For severe inflammation (used cautiously in diabetic patients)</li>
                <li><strong>Extracorporeal Shock Wave Therapy (ESWT):</strong> For chronic plantar fasciitis and tendonitis</li>
                <li><strong>Platelet-Rich Plasma (PRP) Injections:</strong> To promote healing in tendons and ligaments</li>
                <li><strong>Nerve Blocks:</strong> For severe neuropathic pain</li>
                <li><strong>Surgical Interventions:</strong> For structural deformities or conditions that don't respond to conservative treatment</li>
              </ul>
              
              <h3>Diabetic-Specific Considerations</h3>
              <p>
                For diabetic patients, foot pain treatment must include careful blood glucose management, as elevated 
                levels can slow healing and exacerbate neuropathy. Regular foot examinations are essential to detect 
                and address problems early. Any open wounds or infections require prompt medical attention to prevent 
                serious complications.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>When to Seek Immediate Medical Attention</h4>
                <p>
                  Diabetic patients should seek immediate medical attention for foot pain if it is accompanied by 
                  signs of infection (redness, warmth, swelling, discharge), open wounds, changes in skin color, 
                  sudden increase in pain, or fever. Prompt treatment can prevent serious complications, including 
                  tissue death and the need for amputation.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Preventive Care for Muscle and Tendon Health</h2>
            <p>
              Proper foot care is essential for preventing and managing muscle and tendon conditions in diabetic patients. 
              Here are some general recommendations:
            </p>
            <ul className={styles.bulletList}>
              <li>Maintain good blood glucose control to minimize nerve and tissue damage</li>
              <li>Perform regular foot exercises to strengthen muscles and improve flexibility</li>
              <li>Wear properly fitted shoes with good support</li>
              <li>Use custom orthotics if recommended by your healthcare provider</li>
              <li>Gradually increase physical activity to avoid overuse injuries</li>
              <li>Perform proper warm-up before exercise</li>
              <li>Maintain a healthy weight to reduce stress on foot structures</li>
              <li>Have regular foot examinations by a healthcare provider</li>
              <li>Address foot pain promptly to prevent compensatory gait changes</li>
            </ul>
            <p>
              By following these recommendations and seeking prompt medical attention for any foot concerns, 
              you can reduce the risk of serious complications and maintain foot health.
            </p>
            <div className={styles.ctaBox}>
              <h3>Need Professional Foot Care?</h3>
              <p>
                Our team of specialists is dedicated to providing comprehensive care for diabetic foot conditions. 
                We offer preventive care, treatment for existing conditions, and education to help you maintain 
                foot health and prevent complications.
              </p>
              <Link href="/contact-us" className={styles.ctaButton}>
                Schedule an Appointment
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MuscleTendonConditionsPage;
