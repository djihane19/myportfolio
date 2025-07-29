import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
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

  // Inline styles using your color palette
  const styles = {
    section: {
      backgroundColor: '#F9EBC7', // Warm Sand
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden'
    },
    title: {
      color: '#1B1F3B', // Midnight Indigo
      position: 'relative',
      display: 'inline-block',
      marginBottom: '2rem',
    },
    titleUnderline: {
      position: 'absolute',
      bottom: '-10px',
      left: 0,
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #4FD1FF, #22D3EE)', // Electric Blue to Cyan Glow
      borderRadius: '2px'
    },
    text: {
      color: '#1B1F3B', // Midnight Indigo
      fontSize: '1.1rem',
      lineHeight: 1.7,
      marginBottom: '1.5rem'
    },
    primaryButton: {
      backgroundColor: '#22D3EE', // Cyan Glow
      color: '#1B1F3B', // Midnight Indigo
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
    },
    secondaryButton: {
      backgroundColor: '#1B1F3B', // Midnight Indigo
      color: '#F9EBC7', // Warm Sand
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
    },
    successButton: {
      backgroundColor: '#4FD1FF', // Electric Blue
      color: '#1B1F3B', // Midnight Indigo
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
    },
    card: {
      backgroundColor: '#1B1F3B', // Midnight Indigo
      border: 'none',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(27, 31, 59, 0.2)',
      height: '100%'
    },
    cardTitle: {
      color: '#4FD1FF', // Electric Blue
      marginBottom: '1.5rem',
      background: 'linear-gradient(90deg, #4FD1FF, #22D3EE)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      
      display: 'inline-block',
    },
    infoItem: {
      color: '#CBD5E1', // Cool Gray
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem'
    },
    infoIcon: {
      color: '#22D3EE', // Cyan Glow
      marginTop: '0.2rem',
      flexShrink: 0
    }
  };

  return (
    <section id="apropos" style={styles.section} ref={ref}>
      <div className="container px-4">
        <motion.h2 
          style={styles.title} 
          className="display-5 fw-bold"
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
          À Propos
          <motion.span 
            style={styles.titleUnderline}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          />
        </motion.h2>

        <div className="row g-4">
          <motion.div 
            className="col-lg-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.p style={styles.text} variants={itemVariants}>
              Créative et motivée, je suis une développeuse Full-Stack avec une solide formation en Ingénierie des Systèmes d'Information.
              Je me spécialise dans la construction d'applications web évolutives, d'interfaces utilisateur intuitives et de systèmes alimentés par l'IA avec une touche humaine.
            </motion.p>
            
            <motion.p style={styles.text} variants={itemVariants}>
              Mon expérience couvre les plateformes bancaires, les outils de santé prédictifs et les systèmes hospitaliers internes —
              toujours concentrée sur la livraison d'un code propre, la performance et l'impact utilisateur.
            </motion.p>
            
            <motion.p style={styles.text} variants={itemVariants}>
              Je m'épanouis dans les équipes Agile, j'aime Figma autant que FastAPI, et je reste obsédée par la résolution de problèmes réels en utilisant des technologies élégantes.
            </motion.p>
            
            <motion.div 
              className="d-flex flex-wrap gap-3 mb-4"
              variants={itemVariants}
            >
              <motion.a
                href="https://www.linkedin.com/in/dji-hane-b92818276"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.primaryButton}
                whileHover={{ 
                  backgroundColor: '#4FD1FF',
                  boxShadow: '0 5px 15px rgba(79, 209, 255, 0.3)',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </motion.a>
              
              <motion.a
                href="#"
                style={styles.secondaryButton}
                whileHover={{ 
                  backgroundColor: '#2D3250',
                  boxShadow: '0 5px 15px rgba(27, 31, 59, 0.3)',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-github"></i> GitHub
              </motion.a>
              
              <motion.button
                style={styles.successButton}
                onClick={() => alert('Téléchargement du CV')}
                whileHover={{ 
                  backgroundColor: '#22D3EE',
                  boxShadow: '0 5px 15px rgba(34, 211, 238, 0.3)',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-download"></i> Télécharger CV
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="col-lg-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <div style={styles.card} className="p-4">
              <h3 style={styles.cardTitle} className="fs-4 fw-semibold">
                Informations Personnelles
              </h3>
              
              <div className="d-flex flex-column gap-3">
                <div style={styles.infoItem}>
                  <i style={styles.infoIcon} className="fas fa-envelope"></i>
                  <span>kd_torchane@esi.dz</span>
                </div>
                
                <div style={styles.infoItem}>
                  <i style={styles.infoIcon} className="fas fa-phone"></i>
                  <span>+213 781 038 183</span>
                </div>
                
                <div style={styles.infoItem}>
                  <i style={styles.infoIcon} className="fas fa-map-marker-alt"></i>
                  <span>Algérie</span>
                </div>
                
                <div style={styles.infoItem}>
                  <i style={styles.infoIcon} className="fas fa-language"></i>
                  <span>Arabe (natif), Français (avancé), Anglais (technique), Espagnol (débutant)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;