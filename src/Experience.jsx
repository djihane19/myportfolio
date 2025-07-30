import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

function Experience() {
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

  // Data with icons
  const education = translations[language].experience.education.map((item) => ({
    ...item,
    icon: 'fas fa-graduation-cap'
  }));

  const experience = translations[language].experience.experience.map((item) => ({
    ...item,
    icon: 'fas fa-briefcase'
  }));

  const community = translations[language].experience.community.map((item, index) => ({
    ...item,
    icon: ['fas fa-robot', 'fab fa-google'][index],
    color: ['#22D3EE', '#4FD1FF'][index] // Using your accent colors
  }));

  // Styles using your color palette
  const styles = {
    section: {
      backgroundColor: '#1B1F3B', // Midnight Indigo
      padding: '5rem 0',
      color: '#CBD5E1' // Cool Gray
    },
    title: {
      color: '#F9EBC7', // Warm Sand
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
    sectionTitle: {
      color: '#4FD1FF', // Electric Blue
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    sectionIcon: {
      color: '#22D3EE' // Cyan Glow
    },
    timelineDot: {
      backgroundColor: '#22D3EE', // Cyan Glow
      border: '3px solid #1B1F3B' // Midnight Indigo
    },
    timelineLine: {
      backgroundColor: 'rgba(79, 209, 255, 0.3)' // Electric Blue with opacity
    },
    card: {
      backgroundColor: '#2D3250',
      border: 'none',
      borderRadius: '12px',
      transition: 'all 0.3s ease'
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(79, 209, 255, 0.2)'
    },
    periodBadge: {
      backgroundColor: 'rgba(34, 211, 238, 0.1)', // Cyan Glow with opacity
      color: '#22D3EE', // Cyan Glow
      padding: '0.25rem 0.75rem',
      borderRadius: '50px',
      fontWeight: 600
    },
    institutionText: {
      color: '#F9EBC7' // Warm Sand
    },
    descriptionText: {
      color: 'rgba(203, 213, 225, 0.8)' // Cool Gray with opacity
    },
    taskItem: {
      color: 'rgba(203, 213, 225, 0.8)', // Cool Gray with opacity
      border: 'none',
      position: 'relative',
      paddingLeft: '1.25rem',
    },
    taskBullet: {
      position: 'absolute',
      left: 0,
      color: '#4FD1FF' // Electric Blue
    },
    communityIconContainer: {
      backgroundColor: 'rgba(34, 211, 238, 0.1)', // Cyan Glow with opacity
      borderRadius: '50%',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  };

  return (
    <section id="experience" style={styles.section} ref={ref}>
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
          {translations[language].experience.title}
          <motion.span 
            style={styles.titleUnderline}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          />
        </motion.h2>

        <div className="row g-4">
          {/* Education Column */}
          <motion.div 
            className="col-lg-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3 style={styles.sectionTitle} variants={itemVariants}>
              <i style={styles.sectionIcon} className="fas fa-graduation-cap"></i>
              {translations[language].experience.education_title}
            </motion.h3>
            
            <div className="position-relative ps-4">
              <div 
                style={{
                  ...styles.timelineLine,
                  position: 'absolute',
                  left: '1.375rem',
                  top: 0,
                  bottom: 0,
                  width: '2px'
                }}
              />
              
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  className="position-relative mb-4"
                  variants={itemVariants}
                >
                  <div 
                    style={{
                      ...styles.timelineDot,
                      position: 'absolute',
                      left: '-0.375rem',
                      top: '1.25rem',
                      width: '1.25rem',
                      height: '1.25rem',
                      borderRadius: '50%',
                      zIndex: 1
                    }}
                  />
                  
                  <motion.div
                    style={styles.card}
                    className="p-4 mb-4 shadow"
                    whileHover={styles.cardHover}
                    variants={cardVariants}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h4 style={{ color: '#F9EBC7' }} className="fs-5 fw-semibold">
                        {item.title}
                      </h4>
                      <span style={styles.periodBadge}>
                        {item.period}
                      </span>
                    </div>
                    <h5 style={styles.institutionText} className="mb-3">
                      {item.institution}
                    </h5>
                    <p style={styles.descriptionText}>
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div 
            className="col-lg-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3 style={styles.sectionTitle} variants={itemVariants}>
              <i style={styles.sectionIcon} className="fas fa-briefcase"></i>
              {translations[language].experience.experience_title}
            </motion.h3>
            
            <div className="position-relative ps-4">
              <div 
                style={{
                  ...styles.timelineLine,
                  position: 'absolute',
                  left: '1.375rem',
                  top: 0,
                  bottom: 0,
                  width: '2px'
                }}
              />
              
              {experience.map((item, index) => (
                <motion.div 
                  key={index}
                  className="position-relative mb-4"
                  variants={itemVariants}
                >
                  <div 
                    style={{
                      ...styles.timelineDot,
                      position: 'absolute',
                      left: '-0.375rem',
                      top: '1.25rem',
                      width: '1.25rem',
                      height: '1.25rem',
                      borderRadius: '50%',
                      zIndex: 1
                    }}
                  />
                  
                  <motion.div
                    style={styles.card}
                    className="p-4 mb-4 shadow"
                    whileHover={styles.cardHover}
                    variants={cardVariants}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h4 style={{ color: '#F9EBC7' }} className="fs-5 fw-semibold">
                        {item.title}
                      </h4>
                      <span style={styles.periodBadge}>
                        {item.period}
                      </span>
                    </div>
                    <h5 style={styles.institutionText} className="mb-3">
                      {item.company}
                    </h5>
                    <ul className="list-unstyled">
                      {item.tasks.map((task, i) => (
                        <motion.li 
                          key={i} 
                          style={styles.taskItem}
                          variants={itemVariants}
                        >
                          <i style={styles.taskBullet} className="fas fa-circle-small"></i>
                          {task}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

     
      </div>
    </section>
  );
}

export default Experience;