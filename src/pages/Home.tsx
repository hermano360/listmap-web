import React from 'react';
import { Link } from 'react-router-dom';
import '../components.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <a href="#" className="navbar-brand">ListMap</a>

            <ul className="navbar-nav">
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#explore">Explore Lists</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>

            {/* <div className="navbar-actions">
              <a href="#signup" className="btn btn-primary">Sign Up</a>
            </div> */}

            <button className="navbar-mobile-toggle">☰</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <div className="hero-badge">
              <span className="badge badge-primary hero-launch-badge">
                🚀 Now Live: Discover Amazing Places
              </span>
            </div>
            <h1 className="hero-title gradient-text">Your World. Your Lists.</h1>
            <p className="hero-subtitle">A smarter, more social way to track and share places that matter to you. Join thousands of explorers creating and sharing their favorite spots.</p>

            {/* <div className="hero-actions">
              <a href="#signup" className="btn btn-primary btn-lg hover-lift">
                <span className="btn-icon">✨</span>
                Start Exploring
              </a>
              <a href="#explore" className="btn btn-secondary btn-lg hover-lift">
                <span className="btn-icon">🗺️</span>
                Browse Lists
              </a>
            </div> */}

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Places Saved</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2.5K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Cities Covered</div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="app-interface">
                    <div className="interface-header">
                      <div className="header-dot active"></div>
                      <div className="header-dot"></div>
                      <div className="header-dot"></div>
                    </div>
                    <div className="interface-content">
                      <div className="map-preview">
                        <div className="map-pin pin-1">📍</div>
                        <div className="map-pin pin-2">📍</div>
                        <div className="map-pin pin-3">📍</div>
                      </div>
                      <div className="list-preview">
                        <div className="list-item">
                          <div className="list-dot"></div>
                          <div className="list-text">Best Coffee Shops</div>
                        </div>
                        <div className="list-item">
                          <div className="list-dot"></div>
                          <div className="list-text">Weekend Getaways</div>
                        </div>
                        <div className="list-item">
                          <div className="list-dot"></div>
                          <div className="list-text">Hidden Gems</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Discover. Save. Share.</h2>
            <p className="section-subtitle">Everything you need to curate and explore amazing places</p>
          </div>

          <div className="features-grid">
            <div className="feature-card hover-glow" data-feature="guides">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">✨</div>
                <div className="feature-accent"></div>
              </div>
              <h3 className="feature-title">Curated Guides</h3>
              <p className="feature-description">Follow curated city guides and personal favorites from locals and travelers</p>
              {/* <div className="feature-link">
                <span>Explore Guides</span>
                <span className="arrow">→</span>
              </div> */}
            </div>

            <div className="feature-card hover-glow" data-feature="maps">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🧭</div>
                <div className="feature-accent"></div>
              </div>
              <h3 className="feature-title">Rich Maps</h3>
              <p className="feature-description">Explore rich maps filled with your friends' favorite places and hidden gems</p>
              {/* <div className="feature-link">
                <span>View Maps</span>
                <span className="arrow">→</span>
              </div> */}
            </div>

            <div className="feature-card hover-glow" data-feature="notes">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📝</div>
                <div className="feature-accent"></div>
              </div>
              <h3 className="feature-title">Personal Notes</h3>
              <p className="feature-description">Add notes, photos, and tips to each spot you save for future reference</p>
              {/* <div className="feature-link">
                <span>Add Notes</span>
                <span className="arrow">→</span>
              </div> */}
            </div>

            <div className="feature-card hover-glow" data-feature="organize">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">⭐️</div>
                <div className="feature-accent"></div>
              </div>
              <h3 className="feature-title">Organize & Rank</h3>
              <p className="feature-description">Rank and organize your lists, and make them public or private</p>
              {/* <div className="feature-link">
                <span>Get Organized</span>
                <span className="arrow">→</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial" id="testimonials">
        <div className="container">
          <div className="content-wrapper">
            <blockquote className="testimonial-quote">
              "I use ListMap every weekend — it's like having a travel-savvy best friend in my pocket."
            </blockquote>

            <div className="testimonial-author">
              <img
                src="https://via.placeholder.com/60x60/2C5F2D/FFFFFF?text=JD"
                alt="Jane Doe"
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <div className="testimonial-name">@wanderlust_jane</div>
                <div className="testimonial-title">Travel Blogger</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery/Preview Section */}
      {/* <section className="gallery" id="explore">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">See What Others Are Discovering</h2>
            <p className="section-subtitle">Preview real lists from our community</p>
            <div className="gallery-controls">
              <button className="gallery-nav prev" disabled>←</button>
              <button className="gallery-nav next">→</button>
            </div>
          </div>

          <div className="gallery-scroll" id="gallery-container">
            <div className="gallery-item">
              <div className="gallery-card card-interactive">
                <div className="card-image-wrapper">
                  <img
                    src="https://via.placeholder.com/240x160/006876/FFFFFF?text=Coffee+Shops"
                    alt="Best Coffee Shops"
                    className="gallery-image"
                  />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <span className="overlay-action">View List</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="gallery-title">Best Coffee Shops in Brooklyn</h3>
                  <p className="gallery-description">12 carefully curated spots for the perfect brew</p>
                  <div className="card-meta">
                    <div className="badges">
                      <span className="badge badge-primary">Coffee</span>
                      <span className="badge badge-secondary">Brooklyn</span>
                    </div>
                    <div className="card-stats">
                      <span className="stat-heart">❤️ 24</span>
                      <span className="stat-saves">💾 156</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <div className="gallery-card card-interactive">
                <div className="card-image-wrapper">
                  <img
                    src="https://via.placeholder.com/240x160/2C5F2D/FFFFFF?text=Weekend+Getaways"
                    alt="Weekend Getaways"
                    className="gallery-image"
                  />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <span className="overlay-action">View List</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="gallery-title">Weekend Getaways from NYC</h3>
                  <p className="gallery-description">8 perfect escapes within 2 hours of the city</p>
                  <div className="card-meta">
                    <div className="badges">
                      <span className="badge badge-accent">Travel</span>
                      <span className="badge badge-primary">NYC</span>
                    </div>
                    <div className="card-stats">
                      <span className="stat-heart">❤️ 18</span>
                      <span className="stat-saves">💾 89</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <div className="gallery-card card-interactive">
                <div className="card-image-wrapper">
                  <img
                    src="https://via.placeholder.com/240x160/D4621D/FFFFFF?text=Hidden+Gems"
                    alt="Hidden Gems"
                    className="gallery-image"
                  />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <span className="overlay-action">View List</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="gallery-title">Hidden Gems in Tokyo</h3>
                  <p className="gallery-description">15 local favorites off the beaten path</p>
                  <div className="card-meta">
                    <div className="badges">
                      <span className="badge badge-secondary">Local</span>
                      <span className="badge badge-accent">Tokyo</span>
                    </div>
                    <div className="card-stats">
                      <span className="stat-heart">❤️ 42</span>
                      <span className="stat-saves">💾 203</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <div className="gallery-card card-interactive">
                <div className="card-image-wrapper">
                  <img
                    src="https://via.placeholder.com/240x160/006876/FFFFFF?text=Date+Night"
                    alt="Date Night Spots"
                    className="gallery-image"
                  />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <span className="overlay-action">View List</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="gallery-title">Perfect Date Night Spots</h3>
                  <p className="gallery-description">10 romantic restaurants and activities</p>
                  <div className="card-meta">
                    <div className="badges">
                      <span className="badge badge-primary">Romance</span>
                      <span className="badge badge-secondary">Dining</span>
                    </div>
                    <div className="card-stats">
                      <span className="stat-heart">❤️ 31</span>
                      <span className="stat-saves">💾 127</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="cta-section" id="signup">
        <div className="cta-background">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <div className="icon-circle">
                <span className="icon-emoji">🗺️</span>
              </div>
            </div>
            <h2 className="cta-title gradient-text">Start your first list. We'll help you fill it.</h2>
            <p className="cta-subtitle">Join thousands of explorers sharing their favorite places</p>

            {/* <div className="cta-actions">
              <a href="#" className="btn btn-primary btn-xl hover-scale">
                <span className="btn-icon">✨</span>
                Create My First List
              </a>
              <a href="#" className="btn btn-secondary btn-xl hover-scale">
                <span className="btn-icon">👀</span>
                See Public Lists
              </a>
            </div> */}

            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-check">✓</span>
                <span>Free to start</span>
              </div>
              <div className="cta-feature">
                <span className="feature-check">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="cta-feature">
                <span className="feature-check">✓</span>
                <span>Join in 30 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <ul className="footer-links">
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              {/* <li><a href="#contact">Contact</a></li> */}
            </ul>

            {/* <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Instagram">📷</a>
              <a href="#" className="social-icon" aria-label="TikTok">🎵</a>
              <a href="#" className="social-icon" aria-label="Threads">🧵</a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;