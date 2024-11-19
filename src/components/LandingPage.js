import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage() {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push('/signup');
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          <img src="../../images/AgroInsight_Logo.jpeg" alt="AgroInsight" />
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button onClick={() => history.push('/login')}>Login</button>
        </nav>
      </header>
      <section className="hero">
        <h1>Empower Your Farm with Data-Driven Insights</h1>
        <p>Optimize your farming operations with real-time data, predictive analytics, and smart recommendations.</p>
        <button onClick={handleGetStarted}>Get Started Now</button>
        <img src="/images/AgroInsight_Infographics.jpg" alt="Farmer using a tablet in the field" />
      </section>
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature">
          <i className="icon-dashboard"></i>
          <h3>User Dashboard</h3>
          <p>View key metrics and insights on a customizable dashboard.</p>
        </div>
        <div className="feature">
          <i className="icon-soil"></i>
          <h3>Soil Health Monitoring</h3>
          <p>Monitor soil moisture, pH levels, and nutrient content with actionable recommendations.</p>
        </div>
        <div className="feature">
          <i className="icon-weather"></i>
          <h3>Weather Forecasting</h3>
          <p>Get real-time weather updates and alerts tailored to your location.</p>
        </div>
        <div className="feature">
          <i className="icon-crop"></i>
          <h3>Crop Health Monitoring</h3>
          <p>Log crop health data and receive alerts on potential pest and disease issues.</p>
        </div>
        <div className="feature">
          <i className="icon-resource"></i>
          <h3>Resource Management</h3>
          <p>Optimize water and fertilizer usage with smart recommendations.</p>
        </div>
        <div className="feature">
          <i className="icon-market"></i>
          <h3>Market Information</h3>
          <p>Access current market prices and demand forecasts to plan your planting and harvesting.</p>
        </div>
      </section>
      <section className="benefits">
        <h2>Why Choose Our Farm Management App?</h2>
        <p>Increase Yields: Use data-driven insights to boost crop productivity.</p>
        <p>Save Resources: Optimize the use of water and fertilizers to reduce costs.</p>
        <p>Stay Informed: Get real-time updates on weather, soil health, and market trends.</p>
        <p>Make Smart Decisions: Leverage predictive analytics for better farm management.</p>
      </section>
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          <p>This app has transformed the way I manage my farm. The insights are invaluable!</p>
          <footer>- Farmer John</footer>
        </blockquote>
        <blockquote>
          <p>I love the real-time weather updates and soil health monitoring features.</p>
          <footer>- Farmer Jane</footer>
        </blockquote>
      </section>
      <section className="cta">
        <h2>Ready to Transform Your Farm?</h2>
        <p>Sign up today and start making data-driven decisions.</p>
        <button onClick={handleGetStarted}>Sign Up Now</button>
      </section>
      <footer className="footer">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <div className="social-media">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;