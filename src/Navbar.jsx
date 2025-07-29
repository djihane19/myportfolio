import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

function Navbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: '/', label: translations[language].navbar.home },
    { href: '/apropos', label: translations[language].navbar.about },
    { href: '/competences', label: translations[language].navbar.skills },
    { href: '/projets', label: translations[language].navbar.projects },
    { href: '/experience', label: translations[language].navbar.experience },
    { href: '/certifications', label: translations[language].navbar.certifications },
    { href: '/contact', label: translations[language].navbar.contact },
  ];

  // Inline styles 
  const styles = {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 1030,
      backgroundColor: '#1B1F3B', // Midnight Indigo
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    },
    navbar: {
      padding: '0.75rem 1rem',
      backgroundColor: '#1B1F3B' // Midnight Indigo
    },
    brand: {
      background: 'linear-gradient(90deg, #4FD1FF, #22D3EE)', // Electric Blue to Cyan Glow
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      fontWeight: 700,
      fontSize: '1.5rem',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    brandHover: {
      opacity: 0.9
    },
    navLink: {
      color: '#CBD5E1', // Cool Gray
      fontWeight: 500,
      padding: '0.5rem 1rem',
      position: 'relative',
      transition: 'all 0.3s ease'
    },
    navLinkHover: {
      color: '#4FD1FF' // Electric Blue
    },
    navLinkActive: {
      color: '#22D3EE', // Cyan Glow
      fontWeight: 600
    },
    navLinkUnderline: {
      position: 'absolute',
      bottom: 0,
      left: '1rem',
      width: 'calc(100% - 2rem)',
      height: '2px',
      backgroundColor: '#4FD1FF', // Electric Blue
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.3s ease'
    },
    navLinkUnderlineHover: {
      transform: 'scaleX(1)'
    },
    dropdownToggle: {
      color: '#CBD5E1', // Cool Gray
      fontWeight: 500,
      padding: '0.5rem 1rem'
    },
    dropdownMenu: {
      backgroundColor: '#1B1F3B', // Midnight Indigo
      border: '1px solid rgba(79, 209, 255, 0.2)' // Electric Blue with opacity
    },
    dropdownItem: {
      color: '#CBD5E1', // Cool Gray
      padding: '0.5rem 1rem',
      transition: 'all 0.2s ease'
    },
    dropdownItemHover: {
      backgroundColor: 'rgba(79, 209, 255, 0.1)', // Electric Blue with opacity
      color: '#4FD1FF' // Electric Blue
    },
    resumeBtn: {
      backgroundColor: '#22D3EE', // Cyan Glow
      color: '#1B1F3B', // Midnight Indigo
      border: 'none',
      fontWeight: 500,
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      transition: 'all 0.3s ease',
      marginLeft: '1rem'
    },
    resumeBtnHover: {
      backgroundColor: '#4FD1FF', // Electric Blue
      boxShadow: '0 0 15px rgba(79, 209, 255, 0.5)'
    },
    resumeBtnOutline: {
      border: '1px solid #4FD1FF', // Electric Blue
      color: '#4FD1FF', // Electric Blue
      backgroundColor: 'transparent'
    },
    resumeBtnOutlineHover: {
      backgroundColor: 'rgba(79, 209, 255, 0.1)' // Electric Blue with opacity
    },
    toggler: {
      border: 'none',
      padding: '0.5rem',
      color: '#CBD5E1' // Cool Gray
    },
    togglerIcon: {
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28203, 213, 225, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
    }
  };

  return (
    <header style={styles.header}>
      <nav className="navbar navbar-expand-md" style={styles.navbar}>
        <div className="container-fluid">
          <Link 
            to="/" 
            className="navbar-brand" 
            style={styles.brand}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.brandHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.brand)}
          >
            {translations[language].navbar.brand}
          </Link>
          
          <button
            style={styles.toggler}
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
            aria-controls="navbarNav"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={styles.togglerIcon}></span>
          </button>
          
          <div
            className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto gap-1 align-items-center">
              {navItems.map((item) => (
                <li key={item.href} className="nav-item">
                  <Link
                    to={item.href}
                    style={activeLink === item.href ? {...styles.navLink, ...styles.navLinkActive} : styles.navLink}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setActiveLink(item.href);
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = styles.navLinkHover.color;
                      e.target.querySelector('.underline').style.transform = 'scaleX(1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = activeLink === item.href ? styles.navLinkActive.color : styles.navLink.color;
                      if (activeLink !== item.href) {
                        e.target.querySelector('.underline').style.transform = 'scaleX(0)';
                      }
                    }}
                  >
                    {item.label}
                    <span 
                      className="underline" 
                      style={{
                        ...styles.navLinkUnderline,
                        transform: activeLink === item.href ? 'scaleX(1)' : 'scaleX(0)',
                        backgroundColor: activeLink === item.href ? styles.navLinkActive.color : styles.navLinkUnderline.backgroundColor
                      }}
                    ></span>
                  </Link>
                </li>
              ))}
              
              <li className="nav-item dropdown">
                <a
                  style={styles.dropdownToggle}
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="languageDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-globe me-2"></i>
                  {translations[language].navbar.language}
                </a>
                <ul 
                  className="dropdown-menu dropdown-menu-end" 
                  aria-labelledby="languageDropdown"
                  style={styles.dropdownMenu}
                >
                  <li>
                    <button
                      style={styles.dropdownItem}
                      className="dropdown-item"
                      onClick={() => toggleLanguage('en')}
                      onMouseEnter={(e) => Object.assign(e.target.style, styles.dropdownItemHover)}
                      onMouseLeave={(e) => Object.assign(e.target.style, styles.dropdownItem)}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      style={styles.dropdownItem}
                      className="dropdown-item"
                      onClick={() => toggleLanguage('fr')}
                      onMouseEnter={(e) => Object.assign(e.target.style, styles.dropdownItemHover)}
                      onMouseLeave={(e) => Object.assign(e.target.style, styles.dropdownItem)}
                    >
                      Français
                    </button>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item d-md-none">
                <a
                  href="/resume.pdf"
                  style={styles.resumeBtnOutline}
                  className="btn btn-sm"
                  download
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.resumeBtnOutlineHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.resumeBtnOutline)}
                >
                  <i className="fas fa-download me-2"></i>
                  {translations[language].navbar.download_cv}
                </a>
              </li>
              
              <li className="nav-item d-none d-md-block">
                <a
                  href="/resume.pdf"
                  style={styles.resumeBtn}
                  className="btn btn-sm"
                  download
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.resumeBtnHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.resumeBtn)}
                >
                  <i className="fas fa-download me-2"></i>
                  {translations[language].navbar.download_cv}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;