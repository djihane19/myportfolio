import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

function Certifications() {
  const { language } = useContext(LanguageContext);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Certification data with your color palette
  const certifications = translations[language].certifications.items.map((item, index) => ({
    ...item,
    icon: [
      'fas fa-brain',
      'fas fa-laptop-code',
      'fas fa-code',
      'fas fa-chart-line',
      'fas fa-cloud',
      'fas fa-shield-alt'
    ][index],
    gradient: [
      'linear-gradient(135deg, #4FD1FF, #22D3EE)', // Electric Blue to Cyan Glow
      'linear-gradient(135deg, #1B1F3B, #4FD1FF)', // Midnight Indigo to Electric Blue
      'linear-gradient(135deg, #22D3EE, #1B1F3B)', // Cyan Glow to Midnight Indigo
      'linear-gradient(135deg, #4FD1FF, #F9EBC7)', // Electric Blue to Warm Sand
      'linear-gradient(135deg, #1B1F3B, #22D3EE)', // Midnight Indigo to Cyan Glow
      'linear-gradient(135deg, #F9EBC7, #1B1F3B)'  // Warm Sand to Midnight Indigo
    ][index % 6],
    color: [
      '#4FD1FF', // Electric Blue
      '#22D3EE', // Cyan Glow
      '#1B1F3B', // Midnight Indigo
      '#F9EBC7', // Warm Sand
      '#F87171', // Salmon Red
      '#CBD5E1'  // Cool Gray
    ][index % 6]
  }));

  // Styles using your color palette
  const styles = {
    section: {
      backgroundColor: '#F9EBC7', // Warm Sand
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden'
    },
    title: {
      color: '#1B1F3B', // Midnight Indigo
      marginBottom: '3rem',
      position: 'relative',
      display: 'inline-block'
    },
    titleUnderline: {
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #4FD1FF, #22D3EE)', // Electric Blue to Cyan Glow
      borderRadius: '2px'
    },
    card: {
      backgroundColor: '#FFFFFF',
      border: 'none',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      height: '100%'
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(27, 31, 59, 0.15)'
    },
    cardHeader: {
      height: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease'
    },
    cardIcon: {
      color: '#FFFFFF',
      fontSize: '2.5rem',
      transition: 'all 0.3s ease'
    },
    cardBody: {
      padding: '1.5rem'
    },
    cardTitle: {
      color: '#1B1F3B', // Midnight Indigo
      marginBottom: '0.75rem'
    },
    providerText: {
      color: '#6B7280'
    },
    yearBadge: {
      backgroundColor: 'rgba(79, 209, 255, 0.1)', // Electric Blue with opacity
      color: '#4FD1FF', // Electric Blue
      padding: '0.25rem 0.75rem',
      borderRadius: '50px',
      fontWeight: 600
    },
    descriptionText: {
      color: '#6B7280',
      marginBottom: '1.5rem'
    },
    viewButton: {
      border: `1px solid #4FD1FF`, // Electric Blue
      color: '#4FD1FF', // Electric Blue
      backgroundColor: 'transparent',
      padding: '0.5rem 1rem',
      borderRadius: '50px',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease'
    },
    viewButtonHover: {
      backgroundColor: '#4FD1FF', // Electric Blue
      color: '#1B1F3B', // Midnight Indigo
      boxShadow: '0 5px 15px rgba(79, 209, 255, 0.3)'
    }
  };

  return (
    <section id="certifications" style={styles.section} ref={ref}>
      <div className="container">
        <motion.h2 
          style={styles.title} 
          className="display-5 fw-bold text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          {translations[language].certifications.title}
          <motion.span 
            style={styles.titleUnderline}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          />
        </motion.h2>

        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="col-12 col-md-6 col-lg-4"
              variants={itemVariants}
            >
              <motion.div
                style={styles.card}
                className="shadow-sm"
                whileHover={styles.cardHover}
                variants={cardVariants}
              >
                <div 
                  style={{
                    ...styles.cardHeader,
                    background: cert.gradient
                  }}
                >
                  <i 
                    style={styles.cardIcon}
                    className={cert.icon}
                  ></i>
                </div>
                
                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle} className="fs-4 fw-semibold">
                    {cert.title}
                  </h3>
                  
                  <div className="d-flex align-items-center mb-3">
                    <span style={styles.providerText}>{cert.provider}</span>
                    <span 
                      style={{
                        ...styles.yearBadge,
                        backgroundColor: `rgba(${parseInt(cert.color.slice(1, 3), 16)}, ${parseInt(cert.color.slice(3, 5), 16)}, ${parseInt(cert.color.slice(5, 7), 16)}, 0.1)`,
                        color: cert.color
                      }}
                      className="ms-auto"
                    >
                      {cert.year}
                    </span>
                  </div>
                  
                  <p style={styles.descriptionText}>
                    {cert.description}
                  </p>
                  
                  <motion.a
                    href={cert.link || '#'}
                    style={styles.viewButton}
                    whileHover={styles.viewButtonHover}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{translations[language].certifications.view_certificate}</span>
                    <i className="fas fa-external-link-alt"></i>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;