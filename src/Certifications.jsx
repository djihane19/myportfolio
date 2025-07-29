import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from './translations';
import './Certifications.css';

function Certifications() {
  const { language } = useContext(LanguageContext);

  const certifications = translations[language].certifications.items.map((item, index) => ({
    ...item,
    icon: [
      'fas fa-brain',
      'fas fa-laptop-code',
      'fas fa-code',
      'fas fa-chart-line'
    ][index],
    bgColor: [
      'bg-gradient-to-r from-blue-500 to-indigo-600',
      'bg-gradient-to-r from-blue-400 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-yellow-400 to-yellow-600'
    ][index]
  }));

  return (
    <section id="certifications" className="py-5 bg-light">
      <div className="container">
        <h2 className="display-5 fw-bold section-title mb-5 text-center">
          {translations[language].certifications.title}
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {certifications.map((cert, index) => (
            <div key={index} className="col certification-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card h-100 shadow-sm overflow-hidden">
                <div className={`card-header ${cert.bgColor} d-flex align-items-center justify-content-center`}>
                  <i className={`${cert.icon} text-white fs-2`}></i>
                </div>
                <div className="card-body">
                  <h3 className="fs-4 fw-semibold mb-2">{cert.title}</h3>
                  <div className="d-flex align-items-center mb-3">
                    <span className="text-muted">{cert.provider}</span>
                    <span className={`ms-auto bg-${cert.bgColor.split('-')[2]}-100 text-${cert.bgColor.split('-')[2]}-800 fs-6 fw-medium px-2 py-1 rounded`}>
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-muted mb-3">{cert.description}</p>
                  <a
                    href="#"
                    className="btn btn-outline-primary btn-sm fw-medium d-flex align-items-center gap-1"
                  >
                    <span>{translations[language].certifications.view_certificate}</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;