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
            <Link href="public\images\Supreme-logo.png" className={styles.logo}>
              Diabetic Care Center
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

              {/* <div className={`${styles.navItem} ${styles.hasDropdown}`}>
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
              </div> */}

                {/* --------------------------------------Diabetic Foot Surgery / Corrective surgeries for Ulcers --------------------------------------------*/}

              <div className={`${styles.navItem} ${styles.hasDropdown}`}>
                <div 
                  className={`${styles.navLink} ${activeDropdown === 'diabeticFootSurgery' ? styles.active : ''}`} 
                  onClick={() => toggleDropdown('diabeticFootSurgery')}
                >
                  Diabetic Foot Surgery <i className={styles.dropdownIcon}>▼</i>
                </div>
                <div className={`${styles.dropdown} ${activeDropdown === 'diabeticFootSurgery' ? styles.show : ''}`}>
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('corrective_surgeries_for_ulcers')}
                    >
                      Corrective surgeries for Complicated Ulcers <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'corrective_surgeries_for_ulcers' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-surgery/corrective_surgeries_for_ulcers#debridement" className={styles.submenuLink} onClick={closeMenu}>
                        Debridement
                      </Link>
                      <Link href="/diabetic-foot-surgery/corrective_surgeries_for_ulcers#fasciotomies" className={styles.submenuLink} onClick={closeMenu}>
                        Fasciotomoies
                      </Link>
                      <Link href="/diabetic-foot-surgery/corrective_surgeries_for_ulcers#amputation" className={styles.submenuLink} onClick={closeMenu}>
                        Amputation
                      </Link>
                      {/* <Link href="/diabetic-foot-conditions/bone-conditions#osteomyelitis" className={styles.submenuLink} onClick={closeMenu}>
                        Osteomyelitis
                      </Link> */}
                    </div>
                  </div>

                   {/* --------------------------------------Diabetic Foot Surgery/Minor Surgeries --------------------------------------------*/}

                  
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('minorsurgeries')}
                    >
                      Minor Surgeries <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'minorsurgeries' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-surgery/minor_surgeries#ingrown-toenail" className={styles.submenuLink} onClick={closeMenu}>
                        Ingrown Toe Nail Correction
                      </Link>
                      <Link href="/diabetic-foot-surgery/minor_surgeries#fungal-nail" className={styles.submenuLink} onClick={closeMenu}>
                        Fungal Nail Correction
                      </Link>
                      <Link href="/diabetic-foot-surgery/minor_surgeries#pincer-nail" className={styles.submenuLink} onClick={closeMenu}>
                        Pincer Nail Correction
                      </Link>
                      <Link href="/diabetic-foot-surgery/minor_surgeries#corn-callus" className={styles.submenuLink} onClick={closeMenu}>
                        Excision of Corn and Callus
                      </Link>
                      {/* <Link href="/conditions/sole#calluses" className={styles.submenuLink} onClick={closeMenu}>
                        Calluses
                      </Link>
                      <Link href="/conditions/sole#corn" className={styles.submenuLink} onClick={closeMenu}>
                        Corn
                      </Link>
                      <Link href="/conditions/sole#rest-pain" className={styles.submenuLink} onClick={closeMenu}>
                        Rest Pain
                      </Link>
                      <Link href="/conditions/sole#athletes-foot" className={styles.submenuLink} onClick={closeMenu}>
                        Athlete's Foot
                      </Link>
                      <Link href="/conditions/sole#high-arch-foot" className={styles.submenuLink} onClick={closeMenu}>
                        High Arch Foot
                      </Link> */}
                    </div>
                  </div>

                  {/* --------------------------------------Diabetic Foot Surgery/ Reconstructive surgeries for wounds --------------------------------------------*/}

                  
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('reconstructive_surgery_for_wounds')}
                    >
                     Reconstructive surgery For Wounds <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'reconstructive_surgery_for_wounds' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-surgery/reconstructive_surgery_for_wounds#flaps" className={styles.submenuLink} onClick={closeMenu}>
                        Flaps
                      </Link>
                      <Link href="/diabetic-foot-surgery/reconstructive_surgery_for_wounds#free-flaps" className={styles.submenuLink} onClick={closeMenu}>
                        Free Flaps
                      </Link>
                      {/* <Link href="/conditions/muscle#foot-drop" className={styles.submenuLink} onClick={closeMenu}>
                        Foot Drop
                      </Link>
                      <Link href="/conditions/muscle#tendonitis" className={styles.submenuLink} onClick={closeMenu}>
                        Tendonitis
                      </Link>
                      <Link href="/conditions/muscle#plantar-fasciitis" className={styles.submenuLink} onClick={closeMenu}>
                        Plantar Fasciitis
                      </Link>
                      <Link href="/conditions/muscle#foot-pain-treatments" className={styles.submenuLink} onClick={closeMenu}>
                        Foot Pain Treatments
                      </Link> */}
                    </div>
                  </div>

                   {/* --------------------------------------Diabetic Foot Surgery/ surgeries for Nerves --------------------------------------------*/}
                  
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('surgeryfornerves')}
                    >
                      Surgeries for Nerves <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'surgeryfornerves' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-surgery/surgeryfornerves#entrapment-release" className={styles.submenuLink} onClick={closeMenu}>
                        Nerve Entrapment Release
                      </Link>
                      <Link href="/diabetic-foot-surgery/surgeryfornerves#neurolysis" className={styles.submenuLink} onClick={closeMenu}>
                        Neurolysis
                      </Link>
                      <Link href="/diabetic-foot-surgery/surgeryfornerve#tendon-transfers" className={styles.submenuLink} onClick={closeMenu}>
                        Tendon Transfers
                      </Link>
                      {/* <Link href="/conditions/tissue#dry-skin" className={styles.submenuLink} onClick={closeMenu}>
                        Discoloured Nails
                      </Link>
                      <Link href="/conditions/tissue#dry-skin" className={styles.submenuLink} onClick={closeMenu}>
                        Ingrown Toenails
                      </Link> */}
                    </div>
                  </div>
                  
                    {/* --------------------------------------Diabetic Foot Surgery/ Ulcers Healing --------------------------------------------*/}

                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('ulcershealing')}
                    >
                      Ulcer Healing and Preveentive Surgeries <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'ulcershealing' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-surgery/ulcers_healing#offloading" className={styles.submenuLink} onClick={closeMenu}>
                      Surgical Off Loading
                      </Link>
                      <Link href="/diabetic-foot-surgery/ulcers_healing#splinting" className={styles.submenuLink} onClick={closeMenu}>
                        Internal Splinting
                      </Link>
                      <Link href="/diabetic-foot-surgery/ulcers_healing#tenotomy" className={styles.submenuLink} onClick={closeMenu}>
                       Flexor Tenotomy
                      </Link>
                      <Link href="/diabetic-foot-surgery/ulcers_healing#hammertoe" className={styles.submenuLink} onClick={closeMenu}>
                        Hammertoe Repair
                      </Link>
                      <Link href="/diabetic-foot-surgery/ulcers_healing#clawtoe" className={styles.submenuLink} onClick={closeMenu}>
                        Claw Toe Correction
                      </Link>
                    </div>
                  </div>

                   {/* --------------------------------------Diabetic Foot Surgery/ Vascular Surgery For Diabtetes --------------------------------------------*/}

                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('nailConditions')}
                    >
                      Vascular Surgery For Diabetes <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'nailConditions' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-surgery/vascular_surgery#angioplasty" className={styles.submenuLink} onClick={closeMenu}>
                        Peripheral Angioplasty
                      </Link>
                      <Link href="/diabetic-foot-surgery/vascular_surgery#bypass" className={styles.submenuLink} onClick={closeMenu}>
                        Vascular Bypass
                      </Link>
                      <Link href="/diabetic-foot-surgery/vascular_surgery#medical-management" className={styles.submenuLink} onClick={closeMenu}>
                        Medical Management of Blood Vessels Disease
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </div>

               {/* --------------------------------------Diabetic Foot Conditions --------------------------------------------*/}
                 {/* --------------------------------------Diabetic Foot Conditions/Bone --------------------------------------------*/}

              <div className={`${styles.navItem} ${styles.hasDropdown}`}>
                <div 
                  className={`${styles.navLink} ${activeDropdown === 'diabeticFootConditionsew' ? styles.active : ''}`} 
                  onClick={() => toggleDropdown('diabeticFootConditionsew')}
                >
                  Diabetic Foot Conditions <i className={styles.dropdownIcon}>▼</i>
                </div>
                <div className={`${styles.dropdown} ${activeDropdown === 'diabeticFootConditionsew' ? styles.show : ''}`}>
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('boneConditionsew')}
                    >
                      Bone Conditions <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'boneConditionsew' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-conditions/bone#bunions" className={styles.submenuLink} onClick={closeMenu}>
                        Bunions
                      </Link>
                      <Link href="/diabetic-foot-conditions/bone#osteoma" className={styles.submenuLink} onClick={closeMenu}>
                        Osteoma
                      </Link>
                      <Link href="/diabetic-foot-conditions/bone#charcots-foot" className={styles.submenuLink} onClick={closeMenu}>
                        Charcot's Foot
                      </Link>
                      <Link href="/diabetic-foot-conditions/bone#osteomyelitis" className={styles.submenuLink} onClick={closeMenu}>
                        Osteomyelitis
                      </Link>
                    </div>
                  </div>

                                   {/* --------------------------------------Diabetic Foot Conditions/sole --------------------------------------------*/}
                  
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('conditionsOnSole')}
                    >
                      Conditions On Sole <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'conditionsOnSole' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-conditions/sole#dry-skin" className={styles.submenuLink} onClick={closeMenu}>
                        Dry Skin
                      </Link>
                      <Link href="/diabetic-foot-conditions/sole#blisters" className={styles.submenuLink} onClick={closeMenu}>
                        Blisters
                      </Link>
                      <Link href="/diabetic-foot-conditions/sole#flat-foot" className={styles.submenuLink} onClick={closeMenu}>
                        Flat Foot
                      </Link>
                      <Link href="/diabetic-foot-conditions/sole#night-pain" className={styles.submenuLink} onClick={closeMenu}>
                        Night Pain
                      </Link>
                      <Link href="/diabetic-foot-conditions/sole#calluses" className={styles.submenuLink} onClick={closeMenu}>
                        Calluses
                      </Link>
                      <Link href="/diabetic-foot-conditions/sole#corn" className={styles.submenuLink} onClick={closeMenu}>
                        Corn
                      </Link>
                      <Link href="/diabetic-foot-conditions/sole#rest-pain" className={styles.submenuLink} onClick={closeMenu}>
                        Rest Pain
                      </Link>
                      <Link href="/diabetic-foot-conditions/sole#athletes-foot" className={styles.submenuLink} onClick={closeMenu}>
                        Athlete's Foot
                      </Link>
                      <Link href="/diabetic-foot-conditions/sole#high-arch-foot" className={styles.submenuLink} onClick={closeMenu}>
                        High Arch Foot
                      </Link>
                    </div>
                  </div>

                                   {/* --------------------------------------Diabetic Foot Conditions/Muscle --------------------------------------------*/}
                  
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('muscleTendonConditions')}
                    >
                      Muscle-Tendon Conditions <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'muscleTendonConditions' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-conditions/muscle#tendoachilis-rupture" className={styles.submenuLink} onClick={closeMenu}>
                        Tendoachilis Rupture
                      </Link>
                      <Link href="/diabetic-foot-conditions/muscle#claw-toe" className={styles.submenuLink} onClick={closeMenu}>
                        Claw Toe
                      </Link>
                      <Link href="/diabetic-foot-conditions/muscle#foot-drop" className={styles.submenuLink} onClick={closeMenu}>
                        Foot Drop
                      </Link>
                      <Link href="/diabetic-foot-conditions/muscle#tendonitis" className={styles.submenuLink} onClick={closeMenu}>
                        Tendonitis
                      </Link>
                      <Link href="/diabetic-foot-conditions/muscle#plantar-fasciitis" className={styles.submenuLink} onClick={closeMenu}>
                        Plantar Fasciitis
                      </Link>
                      <Link href="/diabetic-foot-conditions/muscle#foot-pain-treatments" className={styles.submenuLink} onClick={closeMenu}>
                        Foot Pain Treatments
                      </Link>
                    </div>
                  </div>
                  
                                   {/* --------------------------------------Diabetic Foot Conditions/nails --------------------------------------------*/}

                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('nailConditions')}
                    >
                      Nail Conditions <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'nailConditions' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-conditions/nail#fungal-nails" className={styles.submenuLink} onClick={closeMenu}>
                        Fungal Nails
                      </Link>
                      <Link href="/diabetic-foot-conditions/nail#brittle-nails" className={styles.submenuLink} onClick={closeMenu}>
                        Brittle Nails
                      </Link>
                      <Link href="/diabetic-foot-conditions/nail#nail-hematoma" className={styles.submenuLink} onClick={closeMenu}>
                        Nail Hematoma
                      </Link>
                      <Link href="/diabetic-foot-conditions/nail#discolored-nails" className={styles.submenuLink} onClick={closeMenu}>
                        Discoloured Nails
                      </Link>
                      <Link href="/diabetic-foot-conditions/nail#ingrown-toenails" className={styles.submenuLink} onClick={closeMenu}>
                        Ingrown Toenails
                      </Link>
                    </div>
                  </div>
                  
                                   {/* --------------------------------------Diabetic Foot Conditions/Tissue --------------------------------------------*/}

                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('softTissueInfections')}
                    >
                      Soft Tissue Infections <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'softTissueInfections' ? styles.show : ''}`}>
                      <Link href="/diabetic-foot-conditions/tissue#cellulitis" className={styles.submenuLink} onClick={closeMenu}>
                        Cellulitis
                      </Link>
                      <Link href="/diabetic-foot-conditions/tissue#abscess" className={styles.submenuLink} onClick={closeMenu}>
                        Abscess
                      </Link>
                      <Link href="/diabetic-foot-conditions/tissue#necrotizing-fasciitis" className={styles.submenuLink} onClick={closeMenu}>
                        Necrotizing Fasciitis
                      </Link>
                      <Link href="/diabetic-foot-conditions/tissue#gangrene" className={styles.submenuLink} onClick={closeMenu}>
                        Gangrene
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

                            {/* --------------------------------------Non Diabetic Ulcers --------------------------------------------*/}
              <div className={`${styles.navItem} ${styles.hasDropdown}`}>
                <div 
                  className={`${styles.navLink} ${activeDropdown === 'nondiabeticulcers' ? styles.active : ''}`} 
                  onClick={() => toggleDropdown('nondiabeticulcers')}
                >
                  Non Diabetic Ulcers <i className={styles.dropdownIcon}>▼</i>
                </div>
                <div className={`${styles.dropdown} ${activeDropdown === 'nondiabeticulcers' ? styles.show : ''}`}>
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('nondiabeticulcers')}
                    >
                     <Link href="/non-diabetic-ulcers/other_types_ulcers" onClick={closeMenu}> other types of non healing ulcers</Link>
                    </div>
                    {/* <div className={`${styles.submenu} ${activeSubmenu === 'boneConditions' ? styles.show : ''}`}>
                      <Link href="/non-diabetic-ulcers/other_types_ulcers#arterial-ulcers" className={styles.submenuLink} onClick={closeMenu}>
                      arterial-ulcers
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
                    </div> */}

<div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('nondiabeticulcers')}
                    >
                     <Link href="/non-diabetic-ulcers/varicoseveins" onClick={closeMenu}> varicose veins</Link>
                    </div>

                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('nondiabeticulcers')}
                    >
                     <Link href="/non-diabetic-ulcers/vasculitits_ulcers" onClick={closeMenu}>Vasculitis ulcers</Link>
                    </div>
                  </div>
                  
                
                  
               
                  
                  
              
                </div>
              </div>

              {/* --------------------------------------Non surgical Management --------------------------------------------*/}
              {/* <div className={`${styles.navItem} ${styles.hasDropdown}`}>
                <div 
                  className={`${styles.navLink} ${activeDropdown === 'nonsurgicalmanagement' ? styles.active : ''}`} 
                  onClick={() => toggleDropdown('nonsurgicalmanagement')}
                >
                 Non surgical Management<i className={styles.dropdownIcon}>▼</i>
                </div>
                <div className={`${styles.dropdown} ${activeDropdown === 'nonsurgicalmanagement' ? styles.show : ''}`}>
                  <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                    <div 
                      className={styles.dropdownLink} 
                      onClick={() => toggleSubmenu('nonsurgicalmanagement')}
                    >
                      Bone Conditions <i className={styles.dropdownIcon}>▶</i>
                    </div>
                    <div className={`${styles.submenu} ${activeSubmenu === 'nonsurgicalmanagement' ? styles.show : ''}`}>
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
                      <Link href="/conditions/sole#dry-skin" className={styles.submenuLink} onClick={closeMenu}>
                        Dry Skin
                      </Link>
                      <Link href="/conditions/sole#blisters" className={styles.submenuLink} onClick={closeMenu}>
                        Blisters
                      </Link>
                      <Link href="/conditions/sole#flat-foot" className={styles.submenuLink} onClick={closeMenu}>
                        Flat Foot
                      </Link>
                      <Link href="/conditions/sole#night-pain" className={styles.submenuLink} onClick={closeMenu}>
                        Night Pain
                      </Link>
                      <Link href="/conditions/sole#calluses" className={styles.submenuLink} onClick={closeMenu}>
                        Calluses
                      </Link>
                      <Link href="/conditions/sole#corn" className={styles.submenuLink} onClick={closeMenu}>
                        Corn
                      </Link>
                      <Link href="/conditions/sole#rest-pain" className={styles.submenuLink} onClick={closeMenu}>
                        Rest Pain
                      </Link>
                      <Link href="/conditions/sole#athletes-foot" className={styles.submenuLink} onClick={closeMenu}>
                        Athlete's Foot
                      </Link>
                      <Link href="/conditions/sole#high-arch-foot" className={styles.submenuLink} onClick={closeMenu}>
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
                      <Link href="/conditions/muscle#tendoachilis-rupture" className={styles.submenuLink} onClick={closeMenu}>
                        Tendoachilis Rupture
                      </Link>
                      <Link href="/conditions/muscle#claw-toe" className={styles.submenuLink} onClick={closeMenu}>
                        Claw Toe
                      </Link>
                      <Link href="/conditions/muscle#foot-drop" className={styles.submenuLink} onClick={closeMenu}>
                        Foot Drop
                      </Link>
                      <Link href="/conditions/muscle#tendonitis" className={styles.submenuLink} onClick={closeMenu}>
                        Tendonitis
                      </Link>
                      <Link href="/conditions/muscle#plantar-fasciitis" className={styles.submenuLink} onClick={closeMenu}>
                        Plantar Fasciitis
                      </Link>
                      <Link href="/conditions/muscle#foot-pain-treatments" className={styles.submenuLink} onClick={closeMenu}>
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
                      <Link href="/conditions/tissue#dry-skin" className={styles.submenuLink} onClick={closeMenu}>
                        Fungal Nails
                      </Link>
                      <Link href="/conditions/tissue#dry-skin" className={styles.submenuLink} onClick={closeMenu}>
                        Brittle Nails
                      </Link>
                      <Link href="/conditions/tissue#dry-skin" className={styles.submenuLink} onClick={closeMenu}>
                        Nail Hematoma
                      </Link>
                      <Link href="/conditions/tissue#dry-skin" className={styles.submenuLink} onClick={closeMenu}>
                        Discoloured Nails
                      </Link>
                      <Link href="/conditions/tissue#dry-skin" className={styles.submenuLink} onClick={closeMenu}>
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
              </div> */}

              {/* --------------------------------------Non surgical Management --------------------------------------------*/}


              {/* <div className={styles.navItem}>
                <Link href="/testimonials" className={styles.navLink} onClick={closeMenu}>
                  Testimonials
                </Link>
              </div> */}

              {/* <div className={styles.navItem}>
                <Link href="/blog" className={styles.navLink} onClick={closeMenu}>
                 
                </Link>
              </div> */}

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
