import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          AgroInsight
        </Link>
        <div className={styles.navLinks}>
          <Link to="/about" className={styles.navLink}>About Us</Link>
          <Link to="/register-farmer" className={styles.navLink}>Register Interest</Link>
          <Link to="/login" className={`${styles.navLink} ${styles.loginBtn}`}>Login</Link>
        </div>
      </nav>

      <section className={styles.section}>
        <h1 className={styles.title}>Transform Your Farming with Smart Analytics</h1>
        <p className={styles.subtitle}>Your comprehensive solution for modern agricultural management and insights</p>
        <div style={{ textAlign: 'center' }}>
          <Link to="/register-farmer" className={`${styles.button} ${styles.primaryButton}`}>
            Get Started
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Why Choose AgroInsight?</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Soil Health Monitoring</h3>
            <p>Real-time soil analysis and recommendations for optimal crop growth</p>
          </div>
          <div className={styles.card}>
            <h3>Weather Forecasting</h3>
            <p>Accurate weather predictions to plan your farming activities</p>
          </div>
          <div className={styles.card}>
            <h3>Crop Health Analysis</h3>
            <p>Early detection of crop diseases and treatment suggestions</p>
          </div>
          <div className={styles.card}>
            <h3>Resource Management</h3>
            <p>Smart irrigation and resource optimization tools</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Ready to Transform Your Farming?</h2>
        <p className={styles.subtitle}>Join thousands of farmers already using AgroInsight</p>
        <div style={{ textAlign: 'center' }}>
          <Link to="/register-farmer" className={`${styles.button} ${styles.primaryButton}`}>
            Start Free Trial
          </Link>
          <Link to="/contact" className={`${styles.button} ${styles.secondaryButton}`}>
            Contact Sales
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3>AgroInsight</h3>
            <p>Making farming smarter, one insight at a time.</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Contact</h3>
            <p>Email: info@agroinsight.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2024 AgroInsight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;