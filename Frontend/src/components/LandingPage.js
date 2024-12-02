import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-link">AgroInsight</Link>
        </div>
        <div className="nav-links">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/register-farmer" className="nav-link">Register Interest</Link>
          <Link to="/login" className="nav-link login-btn">Login</Link>
        </div>
      </nav>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Transform Your Farming with Smart Analytics</h1>
          <p>Your comprehensive solution for modern agricultural management and insights</p>
          <Link to="/register-farmer" className="btn btn-primary">Get Started</Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose AgroInsight?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Soil Health Monitoring</h3>
            <p>Real-time soil analysis and recommendations for optimal crop growth</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌤️</div>
            <h3>Weather Forecasting</h3>
            <p>Accurate weather predictions to plan your farming activities</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌾</div>
            <h3>Crop Health Analysis</h3>
            <p>Early detection of crop diseases and treatment suggestions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💧</div>
            <h3>Resource Management</h3>
            <p>Smart irrigation and resource optimization tools</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Benefits for Farmers</h2>
        <div className="benefits-container">
          <div className="benefit-item">
            <h3>30% Increase</h3>
            <p>in crop yield through smart monitoring</p>
          </div>
          <div className="benefit-item">
            <h3>25% Reduction</h3>
            <p>in water usage with smart irrigation</p>
          </div>
          <div className="benefit-item">
            <h3>24/7 Support</h3>
            <p>from agricultural experts</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Register</h3>
            <p>Create your account in minutes</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Connect</h3>
            <p>Set up your farm monitoring system</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Monitor</h3>
            <p>Get real-time insights and recommendations</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Transform Your Farming?</h2>
        <p>Join thousands of farmers already using AgroInsight</p>
        <div className="cta-buttons">
          <Link to="/register-farmer" className="btn btn-primary">Start Free Trial</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Sales</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AgroInsight</h3>
            <p>Making farming smarter, one insight at a time.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@agroinsight.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AgroInsight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;