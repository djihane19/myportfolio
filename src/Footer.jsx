import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

function Footer() {
  const { language } = useContext(LanguageContext);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const navItems = [
    { href: '/', label: translations[language].navbar.home },
    { href: '/apropos', label: translations[language].navbar.about },
    { href: '/competences', label: translations[language].navbar.skills },
    { href: '/projets', label: translations[language].navbar.projects },
    { href: '/contact', label: translations[language].navbar.contact },
  ];

  const socialLinks = [
    { 
      href: 'https://linkedin.com/in/djihane-torchane', 
      icon: 'fab fa-linkedin-in', 
      label: 'LinkedIn',
      color: '#22D3EE' // Cyan Glow
    },
    { 
      href: 'https://github.com/djihane-torchane', 
      icon: 'fab fa-github', 
      label: 'GitHub',
      color: '#F9EBC7' // Warm Sand
    },
    { 
      href: 'mailto:kd_torchane@esi.dz', 
      icon: 'fas fa-envelope', 
      label: 'Email',
      color: '#4FD1FF' // Electric Blue
    },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Styles using your color palette
  const styles = {
    footer: {
      backgroundColor: '#1B1F3B', // Midnight Indigo
      color: '#CBD5E1', // Cool Gray
      padding: '4rem 0 2rem',
      position: 'relative',
      overflow: 'hidden'
    },
    gradientText: {
      background: 'linear-gradient(90deg, #4FD1FF, #22D3EE)', // Electric Blue to Cyan Glow
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      display: 'inline-block'
    },
    downloadBtn: {
      backgroundColor: 'transparent',
      color: '#4FD1FF', // Electric Blue
      border: '2px solid #4FD1FF', // Electric Blue
      padding: '0.5rem 1.25rem',
      borderRadius: '50px',
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    downloadBtnHover: {
      backgroundColor: '#4FD1FF', // Electric Blue
      color: '#1B1F3B', // Midnight Indigo
      boxShadow: '0 0 15px rgba(79, 209, 255, 0.5)'
    },
    sectionTitle: {
      color: '#F9EBC7', // Warm Sand
      marginBottom: '1.5rem'
    },
    navLink: {
      color: '#CBD5E1', // Cool Gray
      textDecoration: 'none',
      position: 'relative',
      paddingBottom: '2px',
      transition: 'all 0.3s ease'
    },
    navLinkHover: {
      color: '#4FD1FF' // Electric Blue
    },
    navLinkUnderline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '0%',
      height: '2px',
      backgroundColor: '#4FD1FF', // Electric Blue
      transition: 'width 0.3s ease'
    },
    socialIcon: {
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(203, 213, 225, 0.1)' // Cool Gray with opacity
    },
    socialIconHover: (color) => ({
      backgroundColor: `${color}20`, // Add opacity
      transform: 'translateY(-3px)',
      boxShadow: `0 5px 15px ${color}30`,
      color: color
    }),
    divider: {
      borderColor: 'rgba(203, 213, 225, 0.2)', // Cool Gray with opacity
      margin: '2rem 0',
      opacity: 0.5
    },
    copyright: {
      color: 'rgba(203, 213, 225, 0.7)' // Cool Gray with opacity
    }
  };

  return (
    <footer style={styles.footer} ref={ref}>
      <div className="container">
        <motion.div 
          className="row align-items-start"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* About Column */}
          <motion.div 
            className="col-lg-4 col-md-6 mb-5 mb-md-0"
            variants={itemVariants}
          >
            <h2 style={styles.gradientText} className="fs-3 fw-bold mb-3">
              {translations[language].footer.title}
            </h2>
            <motion.p 
              className="mb-4" 
              style={{ color: styles.navLink.color }}
              variants={itemVariants}
            >
              {translations[language].footer.description}
            </motion.p>
            <motion.a
              href="/resume.pdf"
              download
              style={styles.downloadBtn}
              whileHover={styles.downloadBtnHover}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <i className="fas fa-download"></i>
              {translations[language].navbar.download_cv}
            </motion.a>
          </motion.div>

          {/* Navigation Column */}
          <motion.div 
            className="col-lg-4 col-md-6 mb-5 mb-md-0"
            variants={itemVariants}
          >
            <h3 style={styles.sectionTitle} className="fs-5 fw-semibold">
              {translations[language].footer.navigation}
            </h3>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {navItems.map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                >
                  <Link
                    to={item.href}
                    style={styles.navLink}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = styles.navLinkHover.color;
                      e.currentTarget.querySelector('.underline').style.width = '100%';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = styles.navLink.color;
                      e.currentTarget.querySelector('.underline').style.width = '0%';
                    }}
                  >
                    {item.label}
                    <span className="underline" style={styles.navLinkUnderline}></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links Column */}
          <motion.div 
            className="col-lg-4 col-md-12"
            variants={itemVariants}
          >
            <h3 style={styles.sectionTitle} className="fs-5 fw-semibold">
              {translations[language].footer.follow_me}
            </h3>
            <motion.div 
              className="d-flex gap-3"
              variants={containerVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  style={styles.socialIcon}
                  whileHover={styles.socialIconHover(link.color)}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  <i className={link.icon} style={{ color: link.color }}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.hr 
          style={styles.divider}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Copyright */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p style={styles.copyright} className="mb-0">
            {translations[language].footer.copyright.replace('{year}', new Date().getFullYear())}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;