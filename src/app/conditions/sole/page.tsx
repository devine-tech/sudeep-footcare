import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './sole.module.css';

export const metadata = {
  title: 'Conditions On Sole | Diabetic Foot Care Center',
  description: 'Learn about various conditions affecting the sole of diabetic feet, including dry skin, blisters, flat foot, calluses, corns, and more.',
};

const SoleConditionsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Conditions On Sole</h1>
          <p>
            Common conditions affecting the sole of the foot in diabetic patients
          </p>
        </div>
      </div>

      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/conditions">Conditions</Link> &gt; 
        <span>Conditions On Sole</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavSticky}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#dry-skin">Dry Skin</a></li>
              <li><a href="#blisters">Blisters</a></li>
              <li><a href="#flat-foot">Flat Foot</a></li>
              <li><a href="#night-pain">Night Pain</a></li>
              <li><a href="#calluses">Calluses</a></li>
              <li><a href="#corn">Corn</a></li>
              <li><a href="#rest-pain">Rest Pain</a></li>
              <li><a href="#athletes-foot">Athlete's Foot</a></li>
              <li><a href="#high-arch-foot">High Arch Foot</a></li>
            </ul>
            <div className={styles.consultationCard}>
              <h3>Need Expert Advice?</h3>
              <p>Our specialists can help you manage foot conditions and prevent complications.</p>
              <Link href="/contact-us" className={styles.consultButton}>
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introduction}>
            <h2>Understanding Conditions of the Sole</h2>
            <p>
              The sole of the foot is particularly vulnerable to various conditions, especially in people with diabetes. 
              Diabetic neuropathy can reduce sensation in the feet, making it difficult to notice injuries or pressure points. 
              Additionally, poor circulation can slow healing and increase the risk of infections.
            </p>
            <p>
              Regular foot examinations and proper foot care are essential for preventing and managing these conditions. 
              This page provides information about common conditions that affect the sole of the foot in diabetic patients.
            </p>
            <div className={styles.warningBox}>
              <h3>Important Note for Diabetic Patients</h3>
              <p>
                If you have diabetes and notice any changes in your feet, consult with a healthcare provider promptly. 
                Never attempt to self-treat foot conditions, as this can lead to serious complications.
              </p>
            </div>
          </section>

          {/* Dry Skin Section */}
          <section id="dry-skin" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Dry Skin</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Dry Skin Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Dry Skin?</h3>
              <p>
                Dry skin (xerosis) on the feet is a common condition in diabetic patients. It occurs when the skin 
                loses moisture and becomes rough, flaky, and sometimes cracked. In diabetes, dry skin can be caused 
                by reduced sweating due to autonomic neuropathy, poor circulation, and elevated blood glucose levels.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Rough, flaky, or scaly skin</li>
                <li>Itching or burning sensation</li>
                <li>Cracks or fissures in the skin</li>
                <li>Redness or inflammation</li>
                <li>Peeling skin, especially on the heels</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Managing dry skin involves regular moisturizing with diabetes-friendly foot creams, avoiding harsh soaps, 
                and maintaining good blood glucose control. Never soak feet for extended periods, as this can further 
                dry out the skin. Apply moisturizer after bathing, but avoid applying between toes where moisture can 
                promote fungal infections.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  If left untreated, dry skin can crack, creating entry points for bacteria and leading to infections. 
                  For diabetic patients, even minor skin breaks can develop into serious infections due to compromised 
                  immune function and poor circulation.
                </p>
              </div>
            </div>
          </section>

          {/* Blisters Section */}
          <section id="blisters" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Blisters</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Blister Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What are Blisters?</h3>
              <p>
                Blisters are fluid-filled pockets that form between the upper layers of skin. They typically develop 
                due to friction, pressure, or burns. For diabetic patients, blisters can also form without an obvious 
                cause (diabetic bullae) and may be related to neuropathy.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Raised area of skin filled with clear fluid</li>
                <li>Pain or tenderness around the blister</li>
                <li>Redness or inflammation</li>
                <li>In diabetic patients, blisters may be painless due to neuropathy</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Never pop a blister if you have diabetes. Keep the area clean and covered with a sterile bandage. 
                Wear properly fitting shoes and moisture-wicking socks to prevent friction. If a blister forms, 
                consult with a healthcare provider for proper treatment.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  Popped or broken blisters can become infected, leading to cellulitis or deeper infections. 
                  Due to compromised immune function and poor circulation in diabetic patients, these infections 
                  can progress rapidly and may lead to serious complications if not treated promptly.
                </p>
              </div>
            </div>
          </section>

          {/* Flat Foot Section */}
          <section id="flat-foot" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Flat Foot</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Flat Foot Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Flat Foot?</h3>
              <p>
                Flat foot (pes planus) is a condition where the arch of the foot collapses, causing the entire sole 
                to come into contact with the ground. In diabetic patients, this can be caused by weakened foot muscles, 
                ligaments, and tendons due to neuropathy, or as a complication of Charcot's foot.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Visible flattening of the foot arch</li>
                <li>Foot pain, especially in the heel or arch area</li>
                <li>Swelling along the inside of the ankle</li>
                <li>Uneven shoe wear</li>
                <li>Difficulty with certain physical activities</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Treatment may include custom orthotic devices, supportive shoes, physical therapy, and in some cases, 
                surgery. For diabetic patients, proper foot support is crucial to prevent pressure ulcers and other 
                complications related to altered foot mechanics.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  Flat feet can lead to abnormal pressure distribution, increasing the risk of calluses, corns, 
                  and pressure ulcers. The altered biomechanics can also cause pain in the ankles, knees, hips, 
                  and lower back. For diabetic patients, these issues can significantly impact mobility and quality of life.
                </p>
              </div>
            </div>
          </section>

          {/* Night Pain Section */}
          <section id="night-pain" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Night Pain</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Night Pain Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Night Pain?</h3>
              <p>
                Night pain in the feet is a common symptom in diabetic patients, often related to peripheral neuropathy. 
                The pain typically worsens at night when there are fewer distractions and may be described as burning, 
                tingling, or shooting pain.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Burning or tingling sensation in the feet</li>
                <li>Sharp, shooting, or stabbing pain</li>
                <li>Pain that worsens at night or when resting</li>
                <li>Hypersensitivity to touch</li>
                <li>Difficulty sleeping due to foot discomfort</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Treatment focuses on managing the underlying cause, typically diabetic neuropathy. This includes 
                maintaining good blood glucose control, taking prescribed medications for neuropathic pain, and 
                using techniques such as gentle massage or warm foot baths before bed. Some patients find relief 
                with special bed cradles that keep sheets off sensitive feet.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>When to Seek Medical Attention</h4>
                <p>
                  If night pain is severe, persistent, or accompanied by other symptoms such as swelling, redness, 
                  or changes in skin color, consult with a healthcare provider promptly. These could indicate more 
                  serious conditions such as peripheral artery disease or infection.
                </p>
              </div>
            </div>
          </section>

          {/* Calluses Section */}
          <section id="calluses" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Calluses</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Callus Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What are Calluses?</h3>
              <p>
                Calluses are thickened, hardened layers of skin that develop when your skin tries to protect itself 
                against friction and pressure. They most often develop on the feet, especially on the heels, soles, 
                and areas that bear weight when walking.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>A thick, hardened, raised area of skin</li>
                <li>A rough, waxy, or dry appearance</li>
                <li>Skin that may be flaky or dry</li>
                <li>Pain or tenderness under the skin</li>
                <li>Less sensitivity to touch than surrounding skin</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                For diabetic patients, professional treatment by a podiatrist is recommended. This may include 
                debridement (removal of thickened skin), custom orthotics to redistribute pressure, and proper 
                footwear. Never attempt to cut or shave calluses yourself if you have diabetes.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  If left untreated, calluses can crack or break down, leading to open sores or ulcers. For diabetic 
                  patients, these ulcers can become infected and may lead to serious complications, including tissue 
                  death and, in extreme cases, amputation.
                </p>
              </div>
              
              <Link href="/conditions/sole/calluses" className={styles.readMoreLink}>
                Read more about Calluses
              </Link>
            </div>
          </section>

          {/* Corn Section */}
          <section id="corn" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Corn</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Corn Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What are Corns?</h3>
              <p>
                Corns are small, concentrated areas of hard skin with a distinct center, usually found on the tops and 
                sides of toes or on the soles of the feet. Unlike calluses, which are larger and more diffuse, corns 
                have a hard center surrounded by inflamed skin and can be quite painful when pressed.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>A hard, raised bump of thickened skin</li>
                <li>A central core that may be hard or soft, depending on the type of corn</li>
                <li>Pain when pressure is applied to the area</li>
                <li>Tenderness around the hardened area</li>
                <li>Flaky, dry, or waxy skin</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                For diabetic patients, professional treatment by a podiatrist is recommended. This may include 
                debridement, padding to relieve pressure, and proper footwear. Never attempt to cut or use 
                over-the-counter corn removal products if you have diabetes.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  If left untreated, corns can become increasingly painful and may lead to changes in gait, which 
                  can cause other foot problems. For diabetic patients, corns can break down and lead to ulcers, 
                  which may become infected and lead to serious complications.
                </p>
              </div>
              
              <Link href="/conditions/sole/corn" className={styles.readMoreLink}>
                Read more about Corns
              </Link>
            </div>
          </section>

          {/* Rest Pain Section */}
          <section id="rest-pain" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Rest Pain</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Rest Pain Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Rest Pain?</h3>
              <p>
                Rest pain refers to foot pain that occurs when resting or lying down, often waking the person from sleep. 
                In diabetic patients, it is commonly associated with peripheral artery disease (PAD), where narrowed 
                arteries reduce blood flow to the limbs.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Pain in the feet or legs that occurs during rest, especially at night</li>
                <li>Pain that improves when standing or dangling the legs over the bed</li>
                <li>Burning or aching sensation</li>
                <li>Cold feet</li>
                <li>Decreased or absent pulses in the feet</li>
                <li>Pale or bluish skin color</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Treatment focuses on improving blood flow to the feet. This may include medications to improve circulation, 
                lifestyle changes such as quitting smoking and increasing physical activity, and in severe cases, 
                procedures to restore blood flow such as angioplasty or bypass surgery.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>When to Seek Medical Attention</h4>
                <p>
                  Rest pain is a serious symptom that may indicate critical limb ischemia, a severe form of PAD. 
                  If you experience rest pain, seek medical attention promptly. Without treatment, it can lead to 
                  tissue death and may require amputation.
                </p>
              </div>
            </div>
          </section>

          {/* Athlete's Foot Section */}
          <section id="athletes-foot" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>Athlete's Foot</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>Athlete's Foot Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is Athlete's Foot?</h3>
              <p>
                Athlete's foot (tinea pedis) is a fungal infection that typically begins between the toes. It can cause 
                a scaly rash that may itch, sting, or burn. For diabetic patients, fungal infections can be more severe 
                and harder to treat due to compromised immune function and poor circulation.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Itchy, scaly rash between the toes or on the soles</li>
                <li>Redness and inflammation</li>
                <li>Blisters that may ooze fluid</li>
                <li>Dry, flaky skin on the soles or sides of the feet</li>
                <li>Cracking and peeling skin</li>
                <li>Burning or stinging sensation</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Treatment typically involves antifungal medications, which may be topical or oral depending on the 
                severity of the infection. For diabetic patients, prompt treatment is essential to prevent complications. 
                Prevention includes keeping feet clean and dry, changing socks regularly, wearing breathable footwear, 
                and avoiding walking barefoot in public areas.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  If left untreated, athlete's foot can spread to the toenails, causing fungal nail infections that 
                  are difficult to treat. The infection can also create cracks in the skin, providing entry points 
                  for bacteria and leading to secondary bacterial infections, which can be serious in diabetic patients.
                </p>
              </div>
            </div>
          </section>

          {/* High Arch Foot Section */}
          <section id="high-arch-foot" className={styles.conditionSection}>
            <div className={styles.conditionHeader}>
              <h2>High Arch Foot</h2>
              <div className={styles.conditionImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>High Arch Foot Illustration</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionContent}>
              <h3>What is High Arch Foot?</h3>
              <p>
                High arch foot (pes cavus) is a condition where the arch of the foot is abnormally high. This can 
                lead to excessive pressure on the heel and ball of the foot, as well as instability. In diabetic 
                patients, this condition can increase the risk of pressure ulcers and other foot complications.
              </p>
              
              <h3>Symptoms</h3>
              <ul className={styles.bulletList}>
                <li>Visibly high arch that doesn't flatten when standing</li>
                <li>Pain in the arch, heel, or ball of the foot</li>
                <li>Calluses on the heel, ball, or side of the foot</li>
                <li>Claw toes or hammertoes</li>
                <li>Foot instability or frequent ankle sprains</li>
                <li>Difficulty finding shoes that fit properly</li>
              </ul>
              
              <h3>Treatment and Prevention</h3>
              <p>
                Treatment typically involves custom orthotic devices to provide support and redistribute pressure, 
                as well as proper footwear with cushioning and arch support. Physical therapy may help strengthen 
                foot muscles and improve flexibility. In severe cases, surgery may be necessary to correct the 
                foot structure.
              </p>
              
              <div className={styles.complicationBox}>
                <h4>Potential Complications</h4>
                <p>
                  High arch feet can lead to abnormal pressure distribution, increasing the risk of calluses, 
                  corns, and pressure ulcers, particularly in diabetic patients. The condition can also cause 
                  pain and instability, affecting mobility and quality of life. Without proper support, it may 
                  lead to stress fractures and other foot injuries.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Preventive Care for Diabetic Feet</h2>
            <p>
              Proper foot care is essential for preventing and managing conditions of the sole in diabetic patients. 
              Here are some general recommendations:
            </p>
            <ul className={styles.bulletList}>
              <li>Inspect your feet daily for any changes, cuts, blisters, redness, or swelling</li>
              <li>Wash your feet daily with warm (not hot) water and mild soap</li>
              <li>Dry your feet thoroughly, especially between the toes</li>
              <li>Moisturize your feet, but not between the toes</li>
              <li>Wear clean, dry socks made of moisture-wicking materials</li>
              <li>Wear properly fitting shoes that provide adequate support</li>
              <li>Never walk barefoot, even indoors</li>
              <li>Have regular foot examinations by a healthcare provider</li>
              <li>Maintain good blood glucose control</li>
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

export default SoleConditionsPage;
