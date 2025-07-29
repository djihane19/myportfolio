import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

function Skills() {
  const { language } = useContext(LanguageContext);

  // Technology icons mapping
  const techIcons = {
    // Programming Languages
    Python: 'fab fa-python',
    JavaScript: 'fab fa-js',
    PHP: 'fab fa-php',
    HTML: 'fab fa-html5',
    CSS: 'fab fa-css3-alt',
    
    // Frameworks & Libraries
    React: 'fab fa-react',
    'Node.js': 'fab fa-node-js',
    Django: 'fab fa-python',
    Laravel: 'fab fa-laravel',
    
    // Databases
    MySQL: 'fas fa-database',
    MongoDB: 'fas fa-leaf',
    PostgreSQL: 'fas fa-database',
    
    // Tools & Platforms
    Git: 'fab fa-git-alt',
    GitHub: 'fab fa-github',
    Docker: 'fab fa-docker',
    Figma: 'fab fa-figma',
    
    // AI/ML
    'Machine Learning': 'fas fa-brain',
    'Data Science': 'fas fa-chart-line',
    
    // Cloud
    AWS: 'fab fa-aws',
    Firebase: 'fas fa-fire'
  };

  // Color mappings for each technology type
  const techColors = {
    // Programming Languages
    Python: '#4FD1FF',
    JavaScript: '#F9EBC7',
    PHP: '#1B1F3B',
    HTML: '#F87171',
    CSS: '#22D3EE',
    
    // Frameworks
    React: '#22D3EE',
    'Node.js': '#4FD1FF',
    Django: '#1B1F3B',
    Laravel: '#F87171',
    
    // Databases
    MySQL: '#4FD1FF',
    MongoDB: '#22D3EE',
    PostgreSQL: '#1B1F3B',
    
    // Tools
    Git: '#F87171',
    GitHub: '#1B1F3B',
    Docker: '#22D3EE',
    Figma: '#4FD1FF',
    
    // AI/ML
    'Machine Learning': '#F9EBC7',
    'Data Science': '#4FD1FF',
    
    // Cloud
    AWS: '#F87171',
    Firebase: '#F9EBC7'
  };

  const skillCategories = translations[language].skills.categories.map(category => ({
    ...category,
    icon: {
      'Programming Languages': 'fas fa-code',
      'Frameworks & Libraries': 'fas fa-laptop-code',
      'Tools & Platforms': 'fas fa-tools',
      'AI & Machine Learning': 'fas fa-brain',
      'Databases': 'fas fa-database',
      'Soft Skills': 'fas fa-users'
    }[category.title],
    skills: category.skills.map(skill => ({
      ...skill,
      icon: techIcons[skill.name] || 'fas fa-code',
      color: techColors[skill.name] || '#4FD1FF'
    }))
  }));

  // Inline styles
  const styles = {
    section: {
      backgroundColor: '#1B1F3B',
      padding: '5rem 0',
      color: '#CBD5E1'
    },
    title: {
      color: '#F9EBC7',
      marginBottom: '3rem',
      position: 'relative',
      textAlign: 'center'
    },
    titleUnderline: {
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #4FD1FF, #22D3EE)',
      borderRadius: '2px'
    },
    card: {
      backgroundColor: '#2D3250',
      border: 'none',
      borderRadius: '12px',
      height: '100%',
      transition: 'all 0.3s ease',
      padding: '1.5rem'
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(79, 209, 255, 0.2)'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1.5rem'
    },
    cardIcon: {
      color: '#4FD1FF',
      fontSize: '1.5rem'
    },
    progressContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    },
    progressLabel: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
      alignItems: 'center'
    },
    progressBar: {
      height: '8px',
      borderRadius: '4px',
      backgroundColor: 'rgba(203, 213, 225, 0.2)',
      overflow: 'hidden'
    },
    progressBarFill: {
      height: '100%',
      borderRadius: '4px',
      background: 'linear-gradient(90deg, #4FD1FF, #22D3EE)',
      transition: 'width 1s ease-out'
    },
    iconGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
      gap: '1rem',
      alignItems: 'stretch'
    },
    iconContainer: {
      backgroundColor: 'rgba(203, 213, 225, 0.05)',
      borderRadius: '8px',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      minHeight: '100px'
    },
    iconContainerHover: {
      backgroundColor: 'rgba(79, 209, 255, 0.1)',
      transform: 'scale(1.05)'
    },
    skillIcon: {
      fontSize: '2rem',
      marginBottom: '0.75rem'
    },
    skillName: {
      fontSize: '0.85rem',
      color: '#CBD5E1',
      textAlign: 'center',
      fontWeight: 500,
      lineHeight: 1.3
    },
    percentage: {
      color: '#4FD1FF',
      fontWeight: 600
    }
  };

  return (
    <section id="competences" style={styles.section}>
      <div className="container">
        <h2 style={styles.title} className="display-5 fw-bold">
          {translations[language].skills.title}
          <span style={styles.titleUnderline}></span>
        </h2>
        
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div 
                style={styles.card} 
                className="shadow"
                onMouseEnter={e => Object.assign(e.currentTarget.style, styles.cardHover)}
                onMouseLeave={e => Object.assign(e.currentTarget.style, styles.card)}
              >
                <div style={styles.cardHeader}>
                  <i style={{...styles.cardIcon, color: category.skills[0]?.color || '#4FD1FF'}} className={category.icon}></i>
                  <h3 className="fs-4 fw-semibold m-0" style={{ color: '#F9EBC7' }}>
                    {category.title}
                  </h3>
                </div>
                
                {category.skills[0].percentage ? (
                  <div style={styles.progressContainer}>
                    {category.skills.map((skill, i) => (
                      <div key={i} className="skill-progress">
                        <div style={styles.progressLabel}>
                          <span style={{ fontWeight: 500 }}>{skill.name}</span>
                          <span style={styles.percentage}>{skill.percentage}%</span>
                        </div>
                        <div style={styles.progressBar}>
                          <div
                            style={{
                              ...styles.progressBarFill,
                              width: `${skill.percentage}%`
                            }}
                            role="progressbar"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={styles.iconGrid}>
                    {category.skills.map((skill, i) => (
                      <div 
                        key={i} 
                        style={styles.iconContainer}
                        onMouseEnter={e => Object.assign(e.currentTarget.style, styles.iconContainerHover)}
                        onMouseLeave={e => Object.assign(e.currentTarget.style, styles.iconContainer)}
                      >
                        <i 
                          style={{
                            ...styles.skillIcon,
                            color: skill.color
                          }} 
                          className={skill.icon}
                        ></i>
                        <p style={styles.skillName}>{skill.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;