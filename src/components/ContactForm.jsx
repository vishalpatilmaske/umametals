import { useState } from 'react';
import { ArrowRight, LockKeyhole } from 'lucide-react';
import { submitContactRequest } from '../lib/api';

export default function ContactForm({ submitLabel = 'Send Inquiry' }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.target);
    const fullName = (formData.get('fullName') || '').trim();
    const nameParts = fullName.split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ');

    const payload = {
      firstName,
      lastName,
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company') || '',
      requirement: formData.get('requirement'),
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
          Thank you for your message. Our engineering team will review your
          requirements and respond within 24 hours.
        </p>
        <button type="button" onClick={() => setSubmitted(false)}>
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Request a Quote / Inquiry</h3>
      <div className="contact-form-line" />

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">
            Full Name <strong>*</strong>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Enter your company name"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">
            Email Address <strong>*</strong>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone Number <strong>*</strong>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="requirement">
          Requirement / Service <strong>*</strong>
        </label>
        <select id="requirement" name="requirement" required defaultValue="">
          <option value="" disabled>
            Select your requirement
          </option>
          <option value="CNC Laser Cutting">CNC Laser Cutting</option>
          <option value="Metal Fabrication">Metal Fabrication</option>
          <option value="CNC Machining">CNC Machining</option>
          <option value="Press Machine Work">Press Machine Work</option>
          <option value="Aluminium Fabrication">Aluminium Fabrication</option>
          <option value="Other Requirement">Other Requirement</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Message / Project Details <strong>*</strong>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="Please share details about your project or requirement..."
        />
      </div>

      <button type="submit" className="contact-submit-btn" disabled={loading}>
        {loading ? 'Sending...' : submitLabel}
        <ArrowRight size={22} />
      </button>

      <p className="contact-secure">
        <LockKeyhole size={15} />
        Your information is secure and will not be shared.
      </p>
    </form>
  );
}