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

              <div className={`${styles.navItem} ${styles.hasDropdown}`}>
                <div 
                  className={`${styles.navLink} ${activeDropdown === 'diabeticFootConditions' ? styles.active : ''}`} 
                  onClick={() => toggleDropdown('diabeticFootConditions')}
                >
                  Diabetic Foot Conditions <i className={styles.dropdownIcon}>▼</i>
                </div>
                <div className={`${styles.dropdown} ${activeDropdown === 'diabeticFootConditions' ? styles.show : ''}`}>
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('boneConditions')}
                    >
                      Bone Conditions <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'boneConditions' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-conditions/bone-conditions#bunions" className={styles.submenuLink} onClick={closeMenu}>
                        Bunions
                      </Link>
                      <Link href="/diabetic-foot-conditions/bone-conditions#osteoma" className={styles.submenuLink} onClick={closeMenu}>
                        Osteoma
                      </Link>
                      <Link href="/diabetic-foot-conditions/bone-conditions#charcots-foot" className={styles.submenuLink} onClick={closeMenu}>
                        Charcot's Foot
                      </Link>
                      <Link href="/diabetic-foot-conditions/bone-conditions#osteomyelitis" className={styles.submenuLink} onClick={closeMenu}>
                        Osteomyelitis
                      </Link>
                    </div>
                  </div>
                  
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('conditionsOnSole')}
                    >
                      Conditions On Sole <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'conditionsOnSole' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-conditions/conditions-on-sole#dry-skin" className={styles.submenuLink} onClick={closeMenu}>
                        Dry Skin
                      </Link>
                      <Link href="/diabetic-foot-conditions/conditions-on-sole#blisters" className={styles.submenuLink} onClick={closeMenu}>
                        Blisters
                      </Link>
                      <Link href="/diabetic-foot-conditions/conditions-on-sole#flat-foot" className={styles.submenuLink} onClick={closeMenu}>
                        Flat Foot
                      </Link>
                      <Link href="/diabetic-foot-conditions/conditions-on-sole#night-pain" className={styles.submenuLink} onClick={closeMenu}>
                        Night Pain
                      </Link>
                      <Link href="/diabetic-foot-conditions/conditions-on-sole#calluses" className={styles.submenuLink} onClick={closeMenu}>
                        Calluses
                      </Link>
                      <Link href="/diabetic-foot-conditions/conditions-on-sole#corn" className={styles.submenuLink} onClick={closeMenu}>
                        Corn
                      </Link>
                      <Link href="/diabetic-foot-conditions/conditions-on-sole#rest-pain" className={styles.submenuLink} onClick={closeMenu}>
                        Rest Pain
                      </Link>
                      <Link href="/diabetic-foot-conditions/conditions-on-sole#athletes-foot" className={styles.submenuLink} onClick={closeMenu}>
                        Athlete's Foot
                      </Link>
                      <Link href="/diabetic-foot-conditions/conditions-on-sole#high-arch-foot" className={styles.submenuLink} onClick={closeMenu}>
                        High Arch Foot
                      </Link>
                    </div>
                  </div>
                  
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('muscleTendonConditions')}
                    >
                      Muscle-Tendon Conditions <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'muscleTendonConditions' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-conditions/muscle-tendon-conditions#tendoachilis-rupture" className={styles.submenuLink} onClick={closeMenu}>
                        Tendoachilis Rupture
                      </Link>
                      <Link href="/diabetic-foot-conditions/muscle-tendon-conditions#claw-toe" className={styles.submenuLink} onClick={closeMenu}>
                        Claw Toe
                      </Link>
                      <Link href="/diabetic-foot-conditions/muscle-tendon-conditions#foot-drop" className={styles.submenuLink} onClick={closeMenu}>
                        Foot Drop
                      </Link>
                      <Link href="/diabetic-foot-conditions/muscle-tendon-conditions#tendonitis" className={styles.submenuLink} onClick={closeMenu}>
                        Tendonitis
                      </Link>
                      <Link href="/diabetic-foot-conditions/muscle-tendon-conditions#plantar-fasciitis" className={styles.submenuLink} onClick={closeMenu}>
                        Plantar Fasciitis
                      </Link>
                      <Link href="/diabetic-foot-conditions/muscle-tendon-conditions#foot-pain-treatments" className={styles.submenuLink} onClick={closeMenu}>
                        Foot Pain Treatments
                      </Link>
                    </div>
                  </div>
                  
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('nailConditions')}
                    >
                      Nail Conditions <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'nailConditions' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-conditions/nail-conditions#fungal-nails" className={styles.submenuLink} onClick={closeMenu}>
                        Fungal Nails
                      </Link>
                      <Link href="/diabetic-foot-conditions/nail-conditions#brittle-nails" className={styles.submenuLink} onClick={closeMenu}>
                        Brittle Nails
                      </Link>
                      <Link href="/diabetic-foot-conditions/nail-conditions#nail-hematoma" className={styles.submenuLink} onClick={closeMenu}>
                        Nail Hematoma
                      </Link>
                      <Link href="/diabetic-foot-conditions/nail-conditions#discoloured-nails" className={styles.submenuLink} onClick={closeMenu}>
                        Discoloured Nails
                      </Link>
                      <Link href="/diabetic-foot-conditions/nail-conditions#ingrown-toenails" className={styles.submenuLink} onClick={closeMenu}>
                        Ingrown Toenails
                      </Link>
                    </div>
                  </div>
                  
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('softTissueInfections')}
                    >
                      Soft Tissue Infections <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'softTissueInfections' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-conditions/soft-tissue-infections#cellulitis" className={styles.submenuLink} onClick={closeMenu}>
                        Cellulitis
                      </Link>
                      <Link href="/diabetic-foot-conditions/soft-tissue-infections#abscess" className={styles.submenuLink} onClick={closeMenu}>
                        Abscess
                      </Link>
                      <Link href="/diabetic-foot-conditions/soft-tissue-infections#necrotizing-fasciitis" className={styles.submenuLink} onClick={closeMenu}>
                        Necrotizing Fasciitis
                      </Link>
                      <Link href="/diabetic-foot-conditions/soft-tissue-infections#gangrene" className={styles.submenuLink} onClick={closeMenu}>
                        Gangrene
                      </Link>
                    </div>
                  </div>
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
