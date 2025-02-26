import Link from 'next/link';
import styles from './ServiceSection.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <Link href={link} className={styles.cardLink}>
        Learn More <span className={styles.arrow}>→</span>
      </Link>
    </div>
  );
};

const ServiceSection = () => {
  const services = [
    {
      title: 'Diabetic Foot Surgery',
      description: 'Specialized surgical interventions for diabetic foot complications including ulcers, infections, and deformities.',
      icon: '🔪',
      link: '/diabetic-foot-surgery'
    },
    {
      title: 'Diabetic Foot Conditions',
      description: 'Comprehensive diagnosis and treatment of various diabetic foot conditions such as neuropathy, ulcers, and Charcot foot.',
      icon: '🦶',
      link: '/diabetic-foot-conditions'
    },
    {
      title: 'Nonsurgical Management',
      description: 'Conservative treatment approaches including wound care, offloading techniques, and infection management.',
      icon: '💊',
      link: '/nonsurgical-management'
    },
    {
      title: 'Footwear Services',
      description: 'Custom diabetic footwear and orthotics designed to prevent complications and promote healing.',
      icon: '👞',
      link: '/footwear-services'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Our Services</span>
          <h2 className={styles.sectionTitle}>Specialized Diabetic Foot Care Services</h2>
          <p className={styles.sectionDescription}>
            We provide comprehensive care for diabetic foot conditions with a focus on prevention, 
            early intervention, and advanced treatment options.
          </p>
        </div>
        
        <div className={styles.cardGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
        
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Need Specialized Care?</h3>
            <p className={styles.ctaDescription}>
              Schedule a consultation with our specialists to discuss your condition and treatment options.
            </p>
          </div>
          <Link href="/contact-us" className="btn btn-primary">
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
