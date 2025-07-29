import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import translations from './translations';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

function Hero() {
  const { language } = useContext(LanguageContext);

  // Programming icons to float around profile image
  const floatingIcons = [
    { icon: 'fab fa-react', color: '#22D3EE', size: '2rem' },
    { icon: 'fab fa-js', color: '#F9EBC7', size: '1.8rem' },
    { icon: 'fab fa-python', color: '#4FD1FF', size: '2.2rem' },
    { icon: 'fab fa-node-js', color: '#4FD1FF', size: '2rem' },
    { icon: 'fas fa-brain', color: '#F87171', size: '2rem', tooltip: 'Machine Learning' },
    { icon: 'fas fa-robot', color: '#22D3EE', size: '2.1rem', tooltip: 'AI' },
    { icon: 'fas fa-language', color: '#4FD1FF', size: '2rem', tooltip: 'NLP' },
    { icon: 'fas fa-chart-line', color: '#F9EBC7', size: '1.9rem', tooltip: 'Data Science' },
    { icon: 'fab fa-html5', color: '#F87171', size: '1.8rem' },
    { icon: 'fab fa-css3-alt', color: '#22D3EE', size: '1.8rem' },
    { icon: 'fab fa-git-alt', color: '#F87171', size: '1.7rem' },
    { icon: 'fas fa-database', color: '#F9EBC7', size: '1.9rem' },
  ];

  // Animation for floating icons
  useEffect(() => {
    floatingIcons.forEach((_, i) => {
      gsap.to(`.floating-icon-${i}`, {
        y: -100,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(`.floating-icon-${i}`, {
        x: -405,
        duration: 4 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(`.floating-icon-${i}`, {
        rotation: 360,
        duration: 30 + Math.random() * 20,
        repeat: -1,
        ease: "none"
      });
    });
  }, []);

  // Inline styles
  const styles = {
    section: {
      backgroundColor: '#1B1F3B',
      padding: '6rem 0 4rem',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    greeting: {
      color: '#CBD5E1',
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      marginBottom: '1.5rem'
    },
    name: {
      background: 'linear-gradient(90deg, #4FD1FF, #22D3EE)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      display: 'inline'
    },
    title: {
      color: '#F9EBC7',
      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
      fontWeight: 400,
      marginBottom: '1.5rem'
    },
    description: {
      color: '#CBD5E1',
      fontSize: '1.1rem',
      lineHeight: 1.6,
      marginBottom: '2rem',
      maxWidth: '90%'
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    primaryButton: {
      backgroundColor: '#22D3EE',
      color: '#1B1F3B',
      padding: '0.75rem 2rem',
      borderRadius: '50px',
      fontWeight: 600,
      border: 'none',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#4FD1FF',
      padding: '0.75rem 2rem',
      borderRadius: '50px',
      fontWeight: 600,
      border: '2px solid #4FD1FF',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    imageContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '350px'
    },
    profileImage: {
      width: '350px',
      height: '350px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #1B1F3B, #4FD1FF)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      zIndex: 2
    },
    profileIcon: {
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '12rem'
    },
    badge: {
      position: 'absolute',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#F9EBC7',
      borderRadius: '50%',
      padding: '0.5rem',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
      zIndex: 3
    },
    badgeIcon: {
      backgroundColor: '#22D3EE',
      width: '3.5rem',
      height: '3.5rem',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    floatingIcon: {
      position: 'absolute',
      zIndex: 1,
      opacity: 0.8,
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: 'spring'
      }
    }
  };

  return (
    <section id="accueil" style={styles.section}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <motion.div 
            className="col-lg-6 col-md-12 mb-5 mb-lg-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 style={styles.greeting} variants={itemVariants}>
              {translations[language].hero.greeting}{' '}
              <span style={styles.name}>{translations[language].hero.name}</span>
            </motion.h1>
            
            <motion.h2 style={styles.title} variants={itemVariants}>
              {translations[language].hero.title}
            </motion.h2>
            
            <motion.p style={styles.description} variants={itemVariants}>
              {translations[language].hero.description}
            </motion.p>
            
            <motion.div style={styles.buttonGroup} variants={itemVariants}>
              <Link
                to="/contact"
                style={styles.primaryButton}
                className="hero-btn"
                whileHover={{
                  backgroundColor: '#4FD1FF',
                  boxShadow: '0 5px 15px rgba(79, 209, 255, 0.4)',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                {translations[language].hero.contact_button}
              </Link>
              
              <Link
                to="/projets"
                style={styles.secondaryButton}
                className="hero-btn"
                whileHover={{
                  backgroundColor: 'rgba(79, 209, 255, 0.1)',
                  boxShadow: '0 5px 15px rgba(79, 209, 255, 0.2)',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                {translations[language].hero.projects_button}
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <div className="col-lg-6 col-md-12">
            <motion.div 
              style={styles.imageContainer}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              {/* Floating Icons */}
              {floatingIcons.map((icon, index) => (
                <div
                  key={index}
                  className={`floating-icon-${index}`}
                  style={{
                    ...styles.floatingIcon,
                    color: icon.color,
                    fontSize: icon.size,
                    top: `${Math.random() * 60 + 20}%`,
                    left: `${Math.random() * 60 + 20}%`,
                  }}
                >
                  <i className={icon.icon}></i>
                </div>
              ))}
              
              {/* Profile Image */}
              <div style={styles.profileImage}>
                <i style={styles.profileIcon} className="fas fa-user-circle"></i>
              </div>
              
              {/* Badge */}
              <div style={styles.badge}>
                <div style={styles.badgeIcon}>
                  <i className="fas fa-code" style={{ color: '#1B1F3B', fontSize: '1.5rem' }}></i>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;