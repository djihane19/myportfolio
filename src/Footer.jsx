import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

function Footer() {
  const { language } = useContext(LanguageContext);

  const navItems = [
    { href: '/', label: translations[language].navbar.home },
    { href: '/apropos', label: translations[language].navbar.about },
    { href: '/competences', label: translations[language].navbar.skills },
    { href: '/projets', label: translations[language].navbar.projects },
    { href: '/contact', label: translations[language].navbar.contact },
  ];

  const socialLinks = [
    { href: 'https://linkedin.com/in/djihane-torchane', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    { href: 'https://github.com/djihane-torchane', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'mailto:djihane@example.com', icon: 'fas fa-envelope', label: 'Email' },
  ];

  // Inline styles 
  const styles = {
    footer: {
      backgroundColor: '#1B1F3B', // Midnight Indigo
      color: '#CBD5E1', // Cool Gray
      padding: '3rem 0',
      position: 'relative',
      zIndex: 10
    },
    gradientText: {
      background: 'linear-gradient(90deg, #4FD1FF, #22D3EE)', // Electric Blue to Cyan Glow
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      display: 'inline-block'
    },
    footerBtn: {
      borderColor: '#4FD1FF', // Electric Blue
      color: '#F9EBC7', // Warm Sand
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    footerBtnHover: {
      backgroundColor: '#22D3EE', // Cyan Glow
      color: '#1B1F3B', // Midnight Indigo
      boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)'
    },
    link: {
      color: '#CBD5E1', // Cool Gray
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative',
      paddingBottom: '2px'
    },
    linkHover: {
      color: '#4FD1FF', // Electric Blue
    },
    linkUnderline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '0%',
      height: '2px',
      backgroundColor: '#4FD1FF', // Electric Blue
      transition: 'width 0.3s ease'
    },
    socialIcon: {
      color: '#CBD5E1', // Cool Gray
      fontSize: '1.25rem',
      transition: 'all 0.3s ease',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%'
    },
    socialIconHover: {
      color: '#4FD1FF', // Electric Blue
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(79, 209, 255, 0.3)'
    },
    divider: {
      borderColor: 'rgba(203, 213, 225, 0.2)', // Cool Gray with opacity
      margin: '1.5rem 0'
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div className="row align-items-center">
          {/* About Column */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h2 style={styles.gradientText} className="fs-3 fw-bold mb-3">
              {translations[language].footer.title}
            </h2>
            <p className="mb-3" style={{ color: styles.link.color }}>
              {translations[language].footer.description}
            </p>
            <a
              href="/resume.pdf"
              className="btn btn-outline-light btn-sm fw-medium"
              download
              style={styles.footerBtn}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.footerBtnHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.footerBtn)}
            >
              <i className="fas fa-download me-2"></i>
              {translations[language].navbar.download_cv}
            </a>
          </div>

          {/* Navigation Column */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h3 className="fs-5 fw-semibold mb-3" style={{ color: '#F9EBC7' }}> {/* Warm Sand */}
              {translations[language].footer.navigation}
            </h3>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    style={styles.link}
                    onMouseEnter={(e) => {
                      e.target.style.color = styles.linkHover.color;
                      e.target.querySelector('.underline').style.width = '100%';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = styles.link.color;
                      e.target.querySelector('.underline').style.width = '0%';
                    }}
                  >
                    {item.label}
                    <span className="underline" style={styles.linkUnderline}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="col-lg-4 col-md-12 text-md-end">
            <h3 className="fs-5 fw-semibold mb-3" style={{ color: '#F9EBC7' }}> {/* Warm Sand */}
              {translations[language].footer.follow_me}
            </h3>
            <div className="d-flex gap-3 justify-content-lg-end justify-content-center">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  style={styles.socialIcon}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.socialIconHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.socialIcon)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={styles.divider} />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0" style={{ color: styles.link.color }}>
              {translations[language].footer.copyright.replace('{year}', new Date().getFullYear())}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;