import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-page">
      <header>
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Privacy Policy</h1>
        <p>Last updated: 07/21/2025</p>
      </header>

      <section className="content">
        <p>At <strong>ListMap</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application.</p>

        <h2>1. Information We Collect</h2>
        <p><strong>Personal Information</strong><br />
          - Email address (if you sign up or create an account)<br />
          - Username (optional)</p>

        <p><strong>Location Data</strong><br />
          - We may collect your location data (with your permission) to show nearby places or help you map locations on your list.</p>

        <p><strong>Usage Data</strong><br />
          - We collect basic usage data to help us improve the app, such as which features are most used and general device information (e.g., device type, OS version). This data is anonymized and cannot be used to identify you.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide core app features (e.g., map rendering, itinerary building)</li>
          <li>Improve app performance and fix bugs</li>
          <li>Help you discover and organize saved places more effectively</li>
          <li>Send you account-related notifications (if applicable)</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>We <strong>do not sell or share</strong> your personal information with third parties for advertising or marketing purposes.</p>
        <p>We may share anonymized usage data with trusted analytics tools to help us understand how ListMap is used.</p>

        <h2>4. Data Storage & Security</h2>
        <p>All data is stored securely using modern encryption protocols. We take industry-standard measures to protect your information from unauthorized access.</p>
        <p>If you choose to delete your account, your data will be permanently deleted from our systems.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the information we hold about you</li>
          <li>Request corrections or deletion of your data</li>
          <li>Withdraw your consent for location sharing at any time via your device settings</li>
        </ul>

        <h2>6. Contact Us</h2>
        <p>If you have any questions or concerns about this policy, please contact us at:</p>
        <p><strong>Email:</strong> hermano360@gmail.com<br />
          <strong>App Name:</strong> ListMap</p>

        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted here and updated in the App Store.</p>
      </section>

      <footer style={{ gap: '10px', display: 'flex', justifyContent: 'center' }}>
        <Link to="/">Home</Link>
        <Link to="/terms">Terms of Service</Link>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;