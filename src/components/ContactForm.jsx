import { useState } from 'react';
import { submitContactRequest } from '../lib/api';

export default function ContactForm({ submitLabel = 'Submit Inquiry' }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.target);
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company') || '',
      message: formData.get('message'),
    };

    try {
      await submitContactRequest(payload);
      setSubmitted(true);
      e.target.reset();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <h3>Inquiry Received</h3>
        <p>
          Thank you for your message. Our engineering team will review your requirements and respond within 24 hours.
        </p>
        <button type="button" className="btn btn--outline btn--sm" onClick={() => setSubmitted(false)}>
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3 className="contact-form__title">Request A Quote / Inquiry</h3>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required placeholder="First name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required placeholder="Last name" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required placeholder="you@company.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required placeholder="+91" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="company">Company Name (Optional)</label>
        <input type="text" id="company" name="company" placeholder="Company name" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Project Details &amp; Requirements</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="Describe your project, quantities, materials, tolerances, and delivery timeline..."
        />
      </div>
      <button type="submit" className="btn btn--primary btn--full" disabled={loading}>
        {loading ? 'Submitting...' : submitLabel}
      </button>
    </form>
  );
}
