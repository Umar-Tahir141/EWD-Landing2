import React, { useState, useCallback } from 'react';
import './ContactSection.css';

const budgetOptions = [
  'Please Select',
  'Less than $1,000',
  '$1,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    ),
  },
];

const initialForm = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  budget: 'Please Select',
  message: '',
};

const initialErrors = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  budget: '',
  message: '',
};

const validateField = (name, value) => {
  switch (name) {
    case 'fullName':
      if (!value.trim()) return 'Full name is required.';
      if (value.trim().length < 2) return 'Name must be at least 2 characters.';
      if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return 'Name can only contain letters, spaces, hyphens, or apostrophes.';
      return '';
    case 'companyName':
      if (!value.trim()) return 'Company name is required.';
      if (value.trim().length < 2) return 'Company name must be at least 2 characters.';
      return '';
    case 'email':
      if (!value.trim()) return 'Email address is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address.';
      return '';
    case 'phone':
      if (!value.trim()) return 'Phone number is required.';
      if (!/^\+?[\d\s\-().]{7,20}$/.test(value.trim())) return 'Please enter a valid phone number.';
      return '';
    case 'budget':
      if (value === 'Please Select') return 'Please select a monthly budget.';
      return '';
    case 'message':
      if (!value.trim()) return 'Message is required.';
      if (value.trim().length < 20) return 'Message must be at least 20 characters.';
      return '';
    default:
      return '';
  }
};

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  }, [touched]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Touch all fields
    const allTouched = Object.keys(form).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);

    // Validate all
    const newErrors = Object.keys(form).reduce((acc, k) => ({
      ...acc,
      [k]: validateField(k, form[k]),
    }), {});
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);
      setTouched({});
      setErrors(initialErrors);
    }, 1400);
  };

  const fieldClass = (name) =>
    `contact-input${touched[name] && errors[name] ? ' input-error' : ''}${touched[name] && !errors[name] && form[name] && form[name] !== 'Please Select' ? ' input-valid' : ''}`;

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left column */}
        <div className="contact-left">
          <h2 className="contact-left-heading">
            We look forward to help your business thrive in the digital world.
          </h2>
          <p className="contact-left-sub">
            We believe in transforming generations through innovation and displaying the remarkable services. We would love to add engaging and refreshing spotlight at your brand.
          </p>

          {/* Social icons grid */}
          <div className="social-grid">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-btn"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right column – Form */}
        <div className="contact-right">
          <h3 className="contact-form-heading">Discover how we can help your business grow</h3>

          {submitted ? (
            <div className="success-msg">
              <svg viewBox="0 0 24 24" fill="none" stroke="#0cb8a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="9 12 12 15 16 9"/>
              </svg>
              <p>Thank you! Your message has been received. We'll be in touch shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Row 1: Full Name + Company Name */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className={fieldClass('fullName')}
                    value={form.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    autoComplete="name"
                  />
                  {touched.fullName && errors.fullName && (
                    <span className="field-error">{errors.fullName}</span>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="companyName">Company Name</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    className={fieldClass('companyName')}
                    value={form.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    autoComplete="organization"
                  />
                  {touched.companyName && errors.companyName && (
                    <span className="field-error">{errors.companyName}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <div className="input-icon-wrap">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={fieldClass('email')}
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                      autoComplete="email"
                    />
                    <span className="input-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0cb8a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                  </div>
                  {touched.email && errors.email && (
                    <span className="field-error">{errors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={fieldClass('phone')}
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    autoComplete="tel"
                  />
                  {touched.phone && errors.phone && (
                    <span className="field-error">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Budget */}
              <div className="form-group form-group--full">
                <label className="form-label" htmlFor="budget">What is your project monthly budget for this project?</label>
                <div className="select-wrap">
                  <select
                    id="budget"
                    name="budget"
                    className={`contact-select${touched.budget && errors.budget ? ' input-error' : ''}${touched.budget && !errors.budget ? ' input-valid' : ''}`}
                    value={form.budget}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} disabled={opt === 'Please Select'}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </span>
                </div>
                {touched.budget && errors.budget && (
                  <span className="field-error">{errors.budget}</span>
                )}
              </div>

              {/* Message */}
              <div className="form-group form-group--full">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`contact-textarea${touched.message && errors.message ? ' input-error' : ''}${touched.message && !errors.message && form.message ? ' input-valid' : ''}`}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  placeholder=""
                />
                {touched.message && errors.message && (
                  <span className="field-error">{errors.message}</span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`contact-submit${submitting ? ' submitting' : ''}`}
                disabled={submitting}
              >
                {submitting ? (
                  <span className="submit-spinner"></span>
                ) : (
                  'HEAR FROM AN EXPERT'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;