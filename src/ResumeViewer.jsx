import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import translations from './translations';
import html2pdf from 'html2pdf.js';

function ResumeViewer() {
  const { language } = useContext(LanguageContext);
  const [resumeContent, setResumeContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadResumeContent = async () => {
      try {
        setIsLoading(true);
        const htmlFile = language === 'fr' ? './port_fr.html' : './port.html';
        const response = await fetch(htmlFile);
        
        if (!response.ok) {
          throw new Error(`Impossible de charger ${htmlFile}`);
        }

        const htmlContent = await response.text();
        
        // Extraire le contenu du body
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const bodyContent = doc.body.innerHTML;
        
        setResumeContent(bodyContent);
      } catch (err) {
        console.error('Erreur lors du chargement du CV:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadResumeContent();
  }, [language]);

  const handleDownloadPDF = async () => {
    try {
      const element = document.getElementById('resume-content');
      if (!element) {
        throw new Error('Contenu du CV introuvable');
      }

      // Configuration pour html2pdf
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `Djihane_Torchane_Resume_${language}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          logging: false,
          width: 816,
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

      // Masquer les boutons avant la génération PDF
      const buttons = document.querySelectorAll('.no-print');
      buttons.forEach(btn => btn.style.display = 'none');

      await html2pdf().from(element).set(opt).save();

      // Réafficher les boutons après la génération
      buttons.forEach(btn => btn.style.display = '');

    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      alert('Erreur lors de la génération du PDF. Veuillez réessayer.');
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      padding: '2rem 0'
    },
    header: {
      backgroundColor: '#1B1F3B',
      padding: '1rem 0',
      marginBottom: '2rem',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    title: {
      color: '#00d4ff',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: 0
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    button: {
      padding: '0.75rem 1.5rem',
      borderRadius: '6px',
      border: 'none',
      fontWeight: '500',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    primaryButton: {
      background: 'linear-gradient(90deg, #007bff, #00d4ff)',
      color: 'white'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#00d4ff',
      border: '2px solid #00d4ff'
    },
    resumeWrapper: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    resumeContainer: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px',
      fontSize: '1.2rem',
      color: '#64748b'
    },
    errorContainer: {
      textAlign: 'center',
      padding: '2rem',
      color: '#ef4444'
    }
  };

  if (isLoading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingContainer}>
          <i className="fas fa-spinner fa-spin mr-2"></i>
          Chargement du CV...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.errorContainer}>
          <h2>Erreur de chargement</h2>
          <p>{error}</p>
          <button 
            style={{...styles.button, ...styles.primaryButton}}
            onClick={() => navigate('/')}
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* En-tête avec boutons d'action */}
      <div style={styles.header} className="no-print">
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            {translations[language]?.resume?.title || 'Mon CV'}
          </h1>
          <div style={styles.buttonGroup}>
            <button
              style={{...styles.button, ...styles.secondaryButton}}
              onClick={() => navigate('/')}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <i className="fas fa-arrow-left"></i>
              Retour
            </button>
            <button
              style={{...styles.button, ...styles.primaryButton}}
              onClick={handleDownloadPDF}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(90deg, #0056b3, #0096cc)';
                e.target.style.boxShadow = '0 0 15px rgba(0, 123, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(90deg, #007bff, #00d4ff)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <i className="fas fa-download"></i>
              Télécharger PDF
            </button>
          </div>
        </div>
      </div>

      {/* Contenu du CV */}
      <div style={styles.resumeWrapper}>
        <div style={styles.resumeContainer}>
          <div 
            id="resume-content"
            dangerouslySetInnerHTML={{ __html: resumeContent }}
            style={{ padding: '2rem' }}
          />
        </div>
      </div>
    </div>
  );
}

export default ResumeViewer;
