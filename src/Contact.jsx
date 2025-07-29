import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

function Contact() {
  const { language } = useContext(LanguageContext);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(translations[language].contact.alert_message);
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/dji-hane-b92818276',
      icon: 'fab fa-linkedin-in',
      color: '#22D3EE', // Cyan Glow
      label: 'LinkedIn'
    },
    {
      href: 'https://github.com/djihane19',
      icon: 'fab fa-github',
      color: '#1B1F3B', // Midnight Indigo
      label: 'GitHub'
    },
    {
      href: 'mailto:kd_torchane@esi.dz',
      icon: 'fas fa-envelope',
      color: '#F87171', // Salmon Red
      label: translations[language].contact.email_button
    }
  ];

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
    card: {
      backgroundColor: '#2D3250',
      border: 'none',
      borderRadius: '12px',
      transition: 'all 0.3s ease'
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(79, 209, 255, 0.2)'
    },
    formLabel: {
      color: '#F9EBC7', // Warm Sand
      marginBottom: '0.5rem',
      fontWeight: 500
    },
    formControl: {
      backgroundColor: 'rgba(203, 213, 225, 0.1)', // Cool Gray with opacity
      border: '1px solid rgba(203, 213, 225, 0.2)', // Cool Gray with opacity
      color: '#CBD5E1', // Cool Gray
      borderRadius: '8px',
      padding: '0.75rem 1rem',
      marginBottom: '1.5rem'
    },
    formControlFocus: {
      backgroundColor: 'rgba(79, 209, 255, 0.1)', // Electric Blue with opacity
      borderColor: '#4FD1FF', // Electric Blue
      boxShadow: '0 0 0 0.25rem rgba(79, 209, 255, 0.25)',
      color: '#FFFFFF'
    },
    submitButton: {
      backgroundColor: '#22D3EE', // Cyan Glow
      color: '#1B1F3B', // Midnight Indigo
      border: 'none',
      padding: '0.75rem 2rem',
      borderRadius: '50px',
      fontWeight: 600,
      width: '100%',
      transition: 'all 0.3s ease'
    },
    submitButtonHover: {
      backgroundColor: '#4FD1FF', // Electric Blue
      boxShadow: '0 5px 20px rgba(79, 209, 255, 0.4)'
    },
    socialButton: {
      backgroundColor: 'rgba(203, 213, 225, 0.1)', // Cool Gray with opacity
      color: '#CBD5E1', // Cool Gray
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    socialButtonHover: (color) => ({
      backgroundColor: `${color}20`, // Add opacity to the color
      color: '#FFFFFF',
      boxShadow: `0 5px 15px ${color}40`
    })
  };

  return (
    <section id="contact" style={styles.section} ref={ref}>
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
          {translations[language].contact.title}
          <motion.span 
            style={styles.titleUnderline}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          />
        </motion.h2>

        <motion.div 
          className="row justify-content-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="col-lg-8"
            variants={cardVariants}
          >
            <motion.div
              style={styles.card}
              className="p-4 p-md-5 shadow"
              whileHover={styles.cardHover}
            >
              <motion.h3 
                style={{ color: '#F9EBC7' }} 
                className="fs-3 fw-semibold mb-4"
                variants={itemVariants}
              >
                {translations[language].contact.send_message_title}
              </motion.h3>
              
              <form onSubmit={handleSubmit}>
                <motion.div 
                  className="row g-3 mb-3"
                  variants={containerVariants}
                >
                  <motion.div className="col-md-6" variants={itemVariants}>
                    <label htmlFor="name" style={styles.formLabel}>
                      {translations[language].contact.name_label}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={styles.formControl}
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={translations[language].contact.name_placeholder}
                      required
                    />
                  </motion.div>
                  
                  <motion.div className="col-md-6" variants={itemVariants}>
                    <label htmlFor="email" style={styles.formLabel}>
                      {translations[language].contact.email_label}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      style={styles.formControl}
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={translations[language].contact.email_placeholder}
                      required
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" style={styles.formLabel}>
                    {translations[language].contact.subject_label}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={styles.formControl}
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={translations[language].contact.subject_placeholder}
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" style={styles.formLabel}>
                    {translations[language].contact.message_label}
                  </label>
                  <textarea
                    className="form-control"
                    style={{
                      ...styles.formControl,
                      minHeight: '150px'
                    }}
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={translations[language].contact.message_placeholder}
                    required
                  ></textarea>
                </motion.div>
                
                <motion.div 
                  className="mt-4"
                  variants={itemVariants}
                >
                  <motion.button
                    type="submit"
                    style={styles.submitButton}
                    whileHover={styles.submitButtonHover}
                    whileTap={{ scale: 0.98 }}
                  >
                    {translations[language].contact.send_button}
                  </motion.button>
                </motion.div>
              </form>
              
              <motion.div 
                className="mt-5 pt-4 border-top border-secondary"
                variants={itemVariants}
              >
                <h4 style={{ color: '#F9EBC7' }} className="fs-4 fw-semibold mb-3">
                  {translations[language].contact.connect_title}
                </h4>
                
                <div className="d-flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialButton}
                      whileHover={styles.socialButtonHover(link.color)}
                      whileTap={{ scale: 0.95 }}
                      variants={itemVariants}
                    >
                      <i className={`${link.icon} fs-5`} style={{ color: link.color }}></i>
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;