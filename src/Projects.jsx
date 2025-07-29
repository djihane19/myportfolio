import React, { useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

function Projects() {
  const { language } = useContext(LanguageContext);
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Define color gradients 
  const colorGradients = [
    'linear-gradient(135deg, #2D3250, #22D3EE)', // Electric Blue to Cyan Glow
    'linear-gradient(135deg, #1B1F3B, #4FD1FF)', // Midnight Indigo to Electric Blue
    'linear-gradient(135deg, #22D3EE, #1B1F3B)', // Cyan Glow to Midnight Indigo
    'linear-gradient(135deg, #4FD1FF, #2D3250)', // Electric Blue to Warm Sand
    'linear-gradient(135deg, #1B1F3B, #22D3EE)', // Midnight Indigo to Cyan Glow
    'linear-gradient(135deg, #22D3EE, #1B1F3B)'  // Warm Sand to Midnight Indigo
  ];

  const projects = translations[language].projects.items.map((item, index) => ({
    ...item,
    icon: [
      'fas fa-university',
      'fas fa-shield-alt',
      'fas fa-shopping-bag',
      'fas fa-heartbeat',
      'fas fa-home',
      'fas fa-hospital-alt'
    ][index],
    bgColor: colorGradients[index % colorGradients.length],
    tag: {
      label: item.tag_label,
      color: index % 2 === 0 ? '#22D3EE' : '#4FD1FF' // Alternate between Cyan Glow and Electric Blue
    }
  }));

  // Inline styles using 
  const styles = {
    section: {
      backgroundColor: '#F9EBC7', // Warm Sand background
      padding: '4rem 0'
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
    filterBtn: {
      backgroundColor: 'transparent',
      color: '#1B1F3B', // Midnight Indigo
      border: '2px solid #CBD5E1', // Cool Gray
      borderRadius: '50px',
      padding: '0.5rem 1.25rem',
      margin: '0 0.5rem 1rem 0',
      transition: 'all 0.3s ease',
      fontWeight: 500
    },
    filterBtnActive: {
      backgroundColor: '#22D3EE', // Cyan Glow
      color: '#1B1F3B', // Midnight Indigo
      borderColor: '#22D3EE', // Cyan Glow
      boxShadow: '0 4px 15px rgba(34, 211, 238, 0.3)'
    },
    filterBtnHover: {
      backgroundColor: 'rgba(203, 213, 225, 0.2)', // Cool Gray with opacity
      borderColor: '#4FD1FF' // Electric Blue
    },
    card: {
      border: 'none',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%',
      backgroundColor: '#FFFFFF'
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(27, 31, 59, 0.1) !important'
    },
    cardHeader: {
      height: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease'
    },
    cardHeaderHover: {
      background: 'linear-gradient(135deg, #1B1F3B, #4FD1FF) !important' // Midnight Indigo to Electric Blue
    },
    cardIcon: {
      fontSize: '2.5rem',
      color: '#FFFFFF',
      transition: 'transform 0.3s ease'
    },
    cardIconHover: {
      transform: 'scale(1.1)'
    },
    cardBody: {
      padding: '1.5rem'
    },
    cardTitle: {
      color: '#1B1F3B', // Midnight Indigo
      marginBottom: '0.5rem'
    },
    tag: {
      backgroundColor: 'rgba(34, 211, 238, 0.1)', // Cyan Glow with opacity
      color: '#22D3EE', // Cyan Glow
      padding: '0.25rem 0.75rem',
      borderRadius: '50px',
      fontSize: '0.75rem',
      fontWeight: 600
    },
    techTag: {
      backgroundColor: 'rgba(27, 31, 59, 0.05)', // Midnight Indigo with opacity
      color: '#1B1F3B', // Midnight Indigo
      padding: '0.25rem 0.75rem',
      borderRadius: '50px',
      fontSize: '0.75rem'
    },
    dateText: {
      color: '#CBD5E1', // Cool Gray
      fontSize: '0.875rem'
    },
    detailsBtn: {
      border: '1px solid #4FD1FF', // Electric Blue
      color: '#4FD1FF', // Electric Blue
      backgroundColor: 'transparent',
      borderRadius: '50px',
      padding: '0.375rem 1rem',
      fontSize: '0.875rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    detailsBtnHover: {
      backgroundColor: '#4FD1FF', // Electric Blue
      color: '#1B1F3B', // Midnight Indigo
      boxShadow: '0 0 15px rgba(79, 209, 255, 0.3)'
    }
  };

  return (
    <section id="projets" style={styles.section}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={styles.title} className="display-5 fw-bold">
            {translations[language].projects.title}
            <span style={styles.titleUnderline}></span>
          </h2>
        </div>
        
        <div className="d-flex flex-wrap justify-content-center mb-5">
          {Object.keys(translations[language].projects.filters).map((cat) => (
            <button
              key={cat}
              style={filter === cat ? {...styles.filterBtn, ...styles.filterBtnActive} : styles.filterBtn}
              onClick={() => setFilter(cat)}
              onMouseEnter={(e) => filter !== cat && Object.assign(e.target.style, styles.filterBtnHover)}
              onMouseLeave={(e) => filter !== cat && Object.assign(e.target.style, styles.filterBtn)}
            >
              {translations[language].projects.filters[cat]}
            </button>
          ))}
        </div>
        
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`col-12 col-md-6 col-lg-4 ${filter === 'all' || project.category.includes(filter) ? '' : 'd-none'}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                style={{
                  ...styles.card,
                  ...(hoveredProject === index ? styles.cardHover : {})
                }}
                className="shadow-sm"
              >
                <div 
                  style={{
                    ...styles.cardHeader,
                    background: project.bgColor,
                    ...(hoveredProject === index ? styles.cardHeaderHover : {})
                  }}
                >
                  <i 
                    style={{
                      ...styles.cardIcon,
                      ...(hoveredProject === index ? styles.cardIconHover : {})
                    }} 
                    className={project.icon}
                  ></i>
                </div>
                
                <div style={styles.cardBody}>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h3 style={styles.cardTitle} className="fs-4 fw-semibold">
                      {project.title}
                    </h3>
                    <span style={styles.tag}>
                      {project.tag.label}
                    </span>
                  </div>
                  
                  <p className="mb-3" style={{ color: '#6B7280' }}>
                    {project.description}
                  </p>
                  
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} style={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={styles.dateText}>
                      {project.date}
                    </span>
                    <a
                      href={project.link || '#'}
                      style={styles.detailsBtn}
                      onMouseEnter={(e) => Object.assign(e.target.style, styles.detailsBtnHover)}
                      onMouseLeave={(e) => Object.assign(e.target.style, styles.detailsBtn)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {translations[language].projects.details_link}
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;