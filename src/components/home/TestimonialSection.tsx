'use client';

import { useState } from 'react';
import styles from './TestimonialSection.module.css';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

const Testimonial = ({ quote, name, title }: TestimonialProps) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.quoteIcon}>"</div>
      <p className={styles.quote}>{quote}</p>
      <div className={styles.author}>
        <div className={styles.avatarPlaceholder}></div>
        <div className={styles.authorInfo}>
          <h4 className={styles.authorName}>{name}</h4>
          <p className={styles.authorTitle}>{title}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Dr. Prayas Kumar's expertise in diabetic foot care has been life-changing for me. After struggling with recurring foot ulcers for years, his comprehensive treatment approach has kept me ulcer-free for over a year now.",
      name: "Rajesh Sharma",
      title: "Patient"
    },
    {
      quote: "The personalized care and attention I received at the Diabetic Foot Care Center was exceptional. The team took the time to educate me about proper foot care, which has made a significant difference in managing my diabetes.",
      name: "Priya Patel",
      title: "Patient"
    },
    {
      quote: "I was facing the possibility of amputation due to a severe diabetic foot infection. Dr. Prayas Kumar's surgical intervention and follow-up care saved my foot. I'm forever grateful for his expertise and compassion.",
      name: "Amit Desai",
      title: "Patient"
    },
    {
      quote: "The custom footwear provided by the center has been a game-changer for me. For the first time in years, I can walk comfortably without fear of developing pressure points or ulcers.",
      name: "Sunita Verma",
      title: "Patient"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Our Patients Say</h2>
          <p className={styles.sectionDescription}>
            Hear from our patients about their experiences and treatment outcomes at the 
            Diabetic Foot Care Center.
          </p>
        </div>
        
        <div className={styles.testimonialContainer}>
          <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrev}>
            &#8249;
          </button>
          
          <div className={styles.testimonialWrapper}>
            <Testimonial
              quote={testimonials[currentIndex].quote}
              name={testimonials[currentIndex].name}
              title={testimonials[currentIndex].title}
            />
          </div>
          
          <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNext}>
            &#8250;
          </button>
        </div>
        
        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
