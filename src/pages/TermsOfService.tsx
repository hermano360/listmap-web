import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="terms-of-service-page">
      <header>
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Terms of Service</h1>
        <p>Last updated: 07/21/2025</p>
      </header>

      <section className="content">
        <h2>Acceptance of Terms</h2>
        <p>By using ListMap, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>

        <h2>Description of Service</h2>
        <p>ListMap is a mobile application that provides location-based list management and reminder services. The service is provided "as is" without warranty of any kind.</p>

        <h2>User Responsibilities</h2>
        <p>You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to use the service only for lawful purposes.</p>

        <h2>Location Services</h2>
        <p>ListMap requires access to your location to function properly. By using the app, you consent to the collection and use of your location data as described in our Privacy Policy.</p>

        <h2>Limitation of Liability</h2>
        <p>ListMap shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the service.</p>

        <h2>Termination</h2>
        <p>We may terminate or suspend your account at any time without prior notice if you violate these terms or engage in prohibited activities.</p>

        <h2>Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>

        <h2>Contact Information</h2>
        <p>For questions about these Terms of Service, please contact us at legal@listmap.com</p>
      </section>

      <footer style={{ gap: '10px', display: 'flex', justifyContent: 'center' }}>
        <Link to="/">Home</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </footer>
    </div>
  );
};

export default TermsOfService;