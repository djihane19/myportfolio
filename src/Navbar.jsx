import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import translations from './translations';
import html2pdf from 'html2pdf.js';

function Navbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDownloadResume = async (e) => {
    e.preventDefault();
    try {
      // Select HTML file based on language
      const htmlFile = language === 'fr' ? './port_fr.html' : './port.html';
      const response = await fetch(htmlFile);
      if (!response.ok) throw new Error(`Failed to fetch ${htmlFile}`);

      const htmlContent = await response.text();

      // Create a hidden container for rendering
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.width = '8.5in';
      container.style.padding = '0.5in';
      container.style.background = '#f9fafb'; // Match bg-gray-50
      container.innerHTML = htmlContent;

      // Append to DOM to ensure styles load
      document.body.appendChild(container);

      // Ensure external styles and fonts are loaded
      const styleLinks = [
        'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
        'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      ];

      // Wait for styles to load
      await Promise.all(styleLinks.map(src => new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = src;
        link.crossOrigin = 'anonymous';
        link.onload = resolve;
        link.onerror = () => resolve(); // Continue even if a resource fails
        container.appendChild(link);
      })));

      // Add delay to ensure fonts and icons render
      await new Promise(resolve => setTimeout(resolve, 500));

      // Configure html2pdf options
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `Djihane_Torchane_Resume_${language}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          logging: true,
          width: 816, // 8.5in at 96dpi
          windowWidth: 816,
          scrollX: 0,
          scrollY: 0
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait' 
        }
      };

      // Generate and download PDF
      await html2pdf().from(container).set(opt).save();

      // Clean up
      document.body.removeChild(container);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please check your connection or try again later.');
    }
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

  // Inline styles using your color palette
  const styles = {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 1030,
      backgroundColor: '#1B1F3B',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    },
    navbar: {
      padding: '0.75rem 1rem',
      backgroundColor: '#1B1F3B'
    },
    brand: {
      background: 'linear-gradient(90deg, #007bff, #00d4ff)',
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
      color: '#CBD5E1',
      fontWeight: 500,
      padding: '0.5rem 1rem',
      position: 'relative',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    navLinkHover: {
      color: '#00d4ff'
    },
    navLinkActive: {
      color: '#00d4ff',
      fontWeight: 600
    },
    navLinkUnderline: {
      position: 'absolute',
      bottom: 0,
      left: '1rem',
      width: 'calc(100% - 2rem)',
      height: '2px',
      backgroundColor: '#00d4ff',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.3s ease'
    },
    navLinkUnderlineHover: {
      transform: 'scaleX(1)'
    },
    dropdownToggle: {
      color: '#CBD5E1',
      fontWeight: 500,
      padding: '0.5rem 1rem'
    },
    dropdownMenu: {
      backgroundColor: '#1B1F3B',
      border: '1px solid rgba(0, 123, 255, 0.2)'
    },
    dropdownItem: {
      color: '#CBD5E1',
      padding: '0.5rem 1rem',
      transition: 'all 0.2s ease'
    },
    dropdownItemHover: {
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      color: '#00d4ff'
    },
    resumeBtn: {
      background: 'linear-gradient(90deg, #007bff, #00d4ff)',
      color: '#1B1F3B',
      border: 'none',
      fontWeight: 500,
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      transition: 'all 0.3s ease',
      marginLeft: '1rem'
    },
    resumeBtnHover: {
      background: 'linear-gradient(90deg, #0056b3, #0096cc)',
      boxShadow: '0 0 15px rgba(0, 123, 255, 0.5)'
    },
    resumeBtnOutline: {
      border: '1px solid #00d4ff',
      color: '#00d4ff',
      backgroundColor: 'transparent'
    },
    resumeBtnOutlineHover: {
      backgroundColor: 'rgba(0, 123, 255, 0.1)'
    },
    toggler: {
      border: 'none',
      padding: '0.5rem',
      color: '#CBD5E1'
    },
    togglerIcon: {
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28203, 213, 225, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
    }
  };

  return (
    <header style={styles.header}>
      <nav className="navbar navbar-expand-md" style={styles.navbar}>
        <div class="container-fluid">
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
                  href="#"
                  style={styles.resumeBtnOutline}
                  className="btn btn-sm"
                  onClick={handleDownloadResume}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.resumeBtnOutlineHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.resumeBtnOutline)}
                >
                  <i className="fas fa-download me-2"></i>
                  {translations[language].navbar.download_cv}
                </a>
              </li>
              
              <li className="nav-item d-none d-md-block">
                <a
                  href="#"
                  style={styles.resumeBtn}
                  className="btn btn-sm"
                  onClick={handleDownloadResume}
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