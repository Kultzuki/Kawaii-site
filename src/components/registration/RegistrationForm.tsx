import React, { useState } from 'react';
import { submitRegistration, type RegistrationFormData, type RegistrationResponse } from '../../data/registration';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    attendanceMode: 'in-person',
    trackPreference: 'track-aiml',
    experienceLevel: 'intermediate',
    teamStatus: 'has-team',
    discordHandle: '',
    newsletterOptIn: true,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [response, setResponse] = useState<RegistrationResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await submitRegistration(formData);
      if (res.success) {
        setResponse(res);
        setStatus('success');
      } else {
        setErrorMessage(res.message || 'Something went wrong. Please verify your details.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred. Please try again.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setResponse(null);
    setErrorMessage('');
  };

  const getTrackName = (trackId: string) => {
    switch (trackId) {
      case 'track-aiml':
        return 'AI / ML';
      case 'track-cybersecurity':
        return 'Cybersecurity';
      case 'track-robotics-automation':
        return 'Robotics & Automation';
      case 'track-social-impact':
        return 'Social Impact & Public Good';
      case 'track-open-innovation':
        return 'Open Innovation';
      default:
        return 'National Challenge Track';
    }
  };

  // --------------------------------------------------------------------------
  // SUCCESS STATE: Celebratory Ticket Confirmation
  // --------------------------------------------------------------------------
  if (status === 'success' && response) {
    return (
      <div className="reg-success-card" role="status" aria-live="polite">
        <div className="reg-success-badge">
          <span className="success-emoji" aria-hidden="true">🎉</span>
          <span className="success-kicker">TEAM ENTRY CONFIRMED!</span>
        </div>

        <h3 className="success-heading">Welcome to Hack The Future 2026!</h3>
        <p className="success-body">
          Registration received for <strong>{formData.fullName}</strong>. A confirmation email with track guidelines and synopsis submission details has been sent to <code>{formData.email}</code>.
        </p>

        {/* Digital Event Ticket Stub */}
        <div className="ticket-stub">
          <div className="ticket-header">
            <span className="ticket-logo">HACK THE FUTURE // TULA'S UNIVERSITY</span>
            <span className="ticket-tag">{formData.attendanceMode === 'in-person' ? 'Tula\'s University Campus' : 'National Virtual'}</span>
          </div>
          <div className="ticket-body">
            <div className="ticket-field">
              <span className="ticket-label">PASS ID</span>
              <span className="ticket-val mono">{response.confirmationId}</span>
            </div>
            <div className="ticket-field">
              <span className="ticket-label">DATES & DURATION</span>
              <span className="ticket-val">SEP 25 - 26 &bull; 36-HOUR SPRINT</span>
            </div>
            <div className="ticket-field">
              <span className="ticket-label">CHOSEN TRACK</span>
              <span className="ticket-val">{getTrackName(formData.trackPreference)}</span>
            </div>
          </div>
        </div>

        {/* Next Actions */}
        <div className="success-actions-row">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-discord"
          >
            <span>Join Hacker Discord</span>
          </a>
          <button type="button" onClick={handleReset} className="btn btn-subtle">
            <span>Register Another Team Member</span>
          </button>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // FORM EDITING / LOADING / ERROR STATES
  // --------------------------------------------------------------------------
  return (
    <form className="reg-form-container" onSubmit={handleSubmit} noValidate>
      {status === 'error' && (
        <div className="reg-error-alert" role="alert" aria-live="assertive">
          <span className="error-icon" aria-hidden="true">⚠️</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="form-fields-grid">
        {/* Full Name / Team Lead Field */}
        <div className="form-group">
          <label htmlFor="reg-name" className="form-label">
            Team Leader Name <span className="req-star" aria-hidden="true">*</span>
          </label>
          <input
            id="reg-name"
            name="fullName"
            type="text"
            required
            placeholder="e.g. Priyanshu Sharma"
            value={formData.fullName}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="form-input"
            autoComplete="name"
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="reg-email" className="form-label">
            Email Address <span className="req-star" aria-hidden="true">*</span>
          </label>
          <input
            id="reg-email"
            name="email"
            type="email"
            required
            placeholder="leader@college.edu.in"
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="form-input"
            autoComplete="email"
          />
        </div>

        {/* Attendance Mode Selector */}
        <div className="form-group">
          <label htmlFor="reg-attendance" className="form-label">
            Participation Mode <span className="req-star" aria-hidden="true">*</span>
          </label>
          <select
            id="reg-attendance"
            name="attendanceMode"
            value={formData.attendanceMode}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="form-select"
          >
            <option value="in-person">On-Campus at Tula's University, Dehradun</option>
            <option value="virtual">National Virtual Mode (Online)</option>
          </select>
        </div>

        {/* Preferred Track Selection (5 Official Tracks) */}
        <div className="form-group">
          <label htmlFor="reg-track" className="form-label">
            Challenge Track <span className="req-star" aria-hidden="true">*</span>
          </label>
          <select
            id="reg-track"
            name="trackPreference"
            value={formData.trackPreference}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="form-select"
          >
            <option value="track-aiml">Track 01: AI / ML</option>
            <option value="track-cybersecurity">Track 02: Cybersecurity</option>
            <option value="track-robotics-automation">Track 03: Robotics & Automation</option>
            <option value="track-social-impact">Track 04: Social Impact & Public Good</option>
            <option value="track-open-innovation">Track 05: Open Innovation</option>
          </select>
        </div>

        {/* Team Status (2-4 Members) */}
        <div className="form-group">
          <label htmlFor="reg-team" className="form-label">
            Team Size & Status <span className="req-star" aria-hidden="true">*</span>
          </label>
          <select
            id="reg-team"
            name="teamStatus"
            value={formData.teamStatus}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="form-select"
          >
            <option value="has-team">Team of 2 to 4 Members</option>
            <option value="looking-for-team">Looking for Teammates (Match with 2-4 squad)</option>
          </select>
        </div>

        {/* Discord / Mobile Contact */}
        <div className="form-group">
          <label htmlFor="reg-discord" className="form-label">
            Discord / WhatsApp Contact <span className="opt-tag">(Optional)</span>
          </label>
          <input
            id="reg-discord"
            name="discordHandle"
            type="text"
            placeholder="e.g. +91 98765 43210 or username#1234"
            value={formData.discordHandle}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="form-input"
          />
        </div>
      </div>

      {/* Terms & Updates Checkbox */}
      <div className="form-checkbox-row">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="newsletterOptIn"
            checked={formData.newsletterOptIn}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="form-checkbox"
          />
          <span className="checkbox-text">
            Keep me updated on problem statements, synopsis guidelines, and Tula's University campus lodging & transport announcements.
          </span>
        </label>
      </div>

      {/* Action Button */}
      <div className="form-actions-wrap">
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`btn-reg-submit ${status === 'loading' ? 'is-loading' : ''}`}
          aria-busy={status === 'loading'}
        >
          {status === 'loading' ? (
            <span className="loading-spinner-wrap">
              <span className="loading-dot dot-1"></span>
              <span className="loading-dot dot-2"></span>
              <span className="loading-dot dot-3"></span>
              <span>Submitting National Entry...</span>
            </span>
          ) : (
            <span className="submit-content">
              <span>Register Team (₹500 / Head &bull; 2-4 Members)</span>
              <span className="btn-sparkle-icon" aria-hidden="true">✨</span>
            </span>
          )}
        </button>

        <span className="form-footer-hint">
          🔒 ₹500 / Head (Includes 36-Hr Meals & Stay) &bull; Tula's University, Dehradun &bull; ₹7 Lakhs+ Prize Pool
        </span>
      </div>
    </form>
  );
};

export default RegistrationForm;
