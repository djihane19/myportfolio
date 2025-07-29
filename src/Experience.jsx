import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from './translations';
import './Experience.css';

function Experience() {
  const { language } = useContext(LanguageContext);

  const education = translations[language].experience.education.map((item, index) => ({
    ...item,
    icon: 'fas fa-graduation-cap'
  }));

  const experience = translations[language].experience.experience.map((item, index) => ({
    ...item,
    icon: 'fas fa-briefcase'
  }));

  const community = translations[language].experience.community.map((item, index) => ({
    ...item,
    icon: ['fas fa-robot', 'fab fa-google'][index]
  }));

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="display-5 fw-bold section-title mb-5 text-center">
          {translations[language].experience.title}
        </h2>
        <div className="row g-4">
          <div className="col-md-6">
            <h3 className="fs-3 fw-semibold mb-3 d-flex align-items-center">
              <i className="fas fa-graduation-cap text-primary me-2"></i>
              {translations[language].experience.education_title}
            </h3>
            <div className="timeline-container">
              {education.map((item, index) => (
                <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h4 className="fs-5 fw-semibold">{item.title}</h4>
                        <span className="fs-6 bg-primary-subtle text-primary-emphasis py-1 px-2 rounded">
                          {item.period}
                        </span>
                      </div>
                      <h5 className="text-muted mb-2">{item.institution}</h5>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="fs-3 fw-semibold mb-3 d-flex align-items-center">
              <i className="fas fa-briefcase text-primary me-2"></i>
              {translations[language].experience.experience_title}
            </h3>
            <div className="timeline-container">
              {experience.map((item, index) => (
                <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h4 className="fs-5 fw-semibold">{item.title}</h4>
                        <span className="fs-6 bg-primary-subtle text-primary-emphasis py-1 px-2 rounded">
                          {item.period}
                        </span>
                      </div>
                      <h5 className="text-muted mb-2">{item.company}</h5>
                      <ul className="list-group list-group-flush">
                        {item.tasks.map((task, i) => (
                          <li key={i} className="list-group-item border-0 ps-0 text-muted">
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="fs-3 fw-semibold mb-3 d-flex align-items-center">
            <i className="fas fa-users text-primary me-2"></i>
            {translations[language].experience.community_title}
          </h3>
          <div className="row g-4">
            {community.map((item, index) => (
              <div key={index} className="col-md-6 experience-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex align-items-start gap-3">
                    <div className="rounded-circle bg-primary-subtle p-2">
                      <i className={`${item.icon} text-primary fs-5`}></i>
                    </div>
                    <div>
                      <h4 className="fs-5 fw-semibold mb-2">{item.title}</h4>
                      <ul className="list-group list-group-flush">
                        {item.tasks.map((task, i) => (
                          <li key={i} className="list-group-item border-0 ps-0 text-muted">
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;