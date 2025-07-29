import React from 'react';
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from './translations';
import './Contact.css';

function Contact() {
  const { language } = useContext(LanguageContext);

  const handleSendMessage = () => {
    alert(translations[language].contact.alert_message);
  };

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/dji-hane-b92818276',
      icon: 'fab fa-linkedin-in',
      className: 'btn-primary',
      label: 'LinkedIn'
    },
    {
      href: 'https://github.com/djihane-torchane',
      icon: 'fab fa-github',
      className: 'btn-dark',
      label: 'GitHub'
    },
   
  
  ];

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="display-5 fw-bold section-title mb-5 text-center">
          {translations[language].contact.title}
        </h2>
        <div className="row g-4">
          <div className="col-md-6 contact-card" style={{ animationDelay: '0s' }}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="fs-4 fw-semibold mb-3">
                  {translations[language].contact.send_message_title}
                </h3>
                <div className="d-flex flex-column gap-3">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        {translations[language].contact.name_label}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder={translations[language].contact.name_placeholder}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        {translations[language].contact.email_label}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder={translations[language].contact.email_placeholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="form-label">
                      {translations[language].contact.subject_label}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder={translations[language].contact.subject_placeholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">
                      {translations[language].contact.message_label}
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder={translations[language].contact.message_placeholder}
                    ></textarea>
                  </div>
                  <a
                    href="mailto:kd_torchane@esi.dz"
                    className="btn btn-primary w-100 py-2 contact-btn"
                    onClick={handleSendMessage}
                  >
                    {translations[language].contact.send_button}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 contact-card" style={{ animationDelay: '0.2s' }}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="fs-4 fw-semibold mb-3">
                  {translations[language].contact.contact_info_title}
                </h3>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-primary-subtle p-2 rounded">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h4 className="fw-medium">{translations[language].contact.email_title}</h4>
                      <p className="text-muted">kd_torchane@esi.dz</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-primary-subtle p-2 rounded">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <h4 className="fw-medium">{translations[language].contact.phone_title}</h4>
                      <p className="text-muted">+213 781 038 183</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-primary-subtle p-2 rounded">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <h4 className="fw-medium">{translations[language].contact.location_title}</h4>
                      <p className="text-muted">{language === 'fr' ? 'Algérie' : 'Algeria'}</p>
                    </div>
                  </div>
                </div>
                <h3 className="fs-4 fw-semibold mt-4 mb-3">
                  {translations[language].contact.social_media_title}
                </h3>
                <div className="d-flex gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={`btn ${link.className} rounded-circle p-2 social-btn`}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;