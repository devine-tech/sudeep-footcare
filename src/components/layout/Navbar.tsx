'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.topRibbon}>
        <div className={styles.container}>
          <div className={styles.topInfo}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📞</span>
                <span>+91 8128259162</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>🚨</span>
                <span>Emergency: 24/7</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>⏰</span>
                <span>Mon-Friday: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
            <div className={styles.mobileSocial}>
                  <a href="#" className={styles.mobileSocialIcon}>
                    <i> Surat | Navsari | Bardoli </i>
                  </a>
                  {/* <a href="#" className={styles.mobileSocialIcon}>
                    <i>📘</i>
                  </a>
                  <a href="#" className={styles.mobileSocialIcon}>
                    <i>📸</i>
                  </a> */}
                </div>
          </div>
        </div>
      </div>

      <div className={styles.mainRibbon}>
        <div className={styles.container}>
          <div className={styles.navContainer}>
            <Link href="/" className={styles.logo}>
              Diabetic Foot Care Center
            </Link>

            <div className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>

            <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`} ref={dropdownRef}>
              <div className={styles.navItem}>
                <Link href="/" className={styles.navLink} onClick={closeMenu}>
                  Home
                </Link>
              </div>

              <div className={styles.navItem}>
                <Link href="/about-us" className={styles.navLink} onClick={closeMenu}>
                  About Us
                </Link>
              </div>

              <div className={`${styles.navItem} ${styles.hasDropdown}`}>
                <div 
                  className={`${styles.navLink} ${activeDropdown === 'services' ? styles.active : ''}`} 
                  onClick={() => toggleDropdown('services')}
                >
                  Services <i className={styles.dropdownIcon}>▼</i>
                </div>
                <div className={`${styles.dropdown} ${activeDropdown === 'services' ? styles.show : ''}`}>
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('footCare')}
                    >
                      Foot Care <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'footCare' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-care" className={styles.submenuLink} onClick={closeMenu}>
                        Diabetic Foot Care
                      </Link>
                      <Link href="/preventive-care" className={styles.submenuLink} onClick={closeMenu}>
                        Preventive Care
                      </Link>
                      <Link href="/foot-conditions" className={styles.submenuLink} onClick={closeMenu}>
                        Foot Conditions
                      </Link>
                    </div>
                  </div>
                  <Link href="/diabetic-foot-surgery" className={styles.dropdownLink} onClick={closeMenu}>
                    Diabetic Foot Surgery
                  </Link>
                  <Link href="/wound-care" className={styles.dropdownLink} onClick={closeMenu}>
                    Wound Care
                  </Link>
                  <Link href="/footwear-services" className={styles.dropdownLink} onClick={closeMenu}>
                    Footwear Services
                  </Link>
                </div>
              </div>

              {/* <div className={styles.navItem}>
                <Link href="/testimonials" className={styles.navLink} onClick={closeMenu}>
                  Testimonials
                </Link>
              </div> */}

              <div className={styles.navItem}>
                <Link href="/blog" className={styles.navLink} onClick={closeMenu}>
                  Blog
                </Link>
              </div>

              <div className={styles.navItem}>
                <Link href="/contact-us" className={styles.navLink} onClick={closeMenu}>
                  Contact Us
                </Link>
              </div>

              <div className={styles.mobileOnly}>
                <div className={styles.mobileContactInfo}>
                  <div className={styles.mobileContactItem}>
                    <span className={styles.icon}>📞</span>
                    <span>+91 8128259162</span>
                  </div>
                  <div className={styles.mobileContactItem}>
                  <span className={styles.icon}>🚨</span>
                  <span>Emergency: 24/7</span>
                  </div>
                  <div className={styles.mobileContactItem}>
                    <span className={styles.icon}>⏰</span>
                    <span>Mon-Friday: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>
                
                <div className={styles.mobileSocial}>
                  <a href="#" className={styles.mobileSocialIcon}>
                    <i> Surat | Navsari | Bardoli </i>
                  </a>
                  {/* <a href="#" className={styles.mobileSocialIcon}>
                    <i>📘</i>
                  </a>
                  <a href="#" className={styles.mobileSocialIcon}>
                    <i>📸</i>
                  </a> */}
                </div>
              </div>
              
              <button className={styles.appointmentButton} onClick={closeMenu}>
                <Link href="/contact-us">Book an Appointment</Link>
              </button>
              
              <button className={styles.mobileCloseButton} onClick={closeMenu}>
                Close Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
