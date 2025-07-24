import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components.css';

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "ListMap transformed how I travel! I've discovered amazing local spots I never would have found otherwise.",
      author: "@wanderlust_sarah",
      title: "Travel Blogger",
      avatar: "https://via.placeholder.com/60x60/006876/FFFFFF?text=SW"
    },
    {
      quote: "The perfect app for spontaneous adventures. I love how I can save places on the go and share them with friends!",
      author: "@city_explorer",
      title: "Food Enthusiast",
      avatar: "https://via.placeholder.com/60x60/2C5F2D/FFFFFF?text=CE"
    },
    {
      quote: "As a local guide, ListMap helps me share hidden gems with visitors. It's become an essential tool for my business.",
      author: "@local_guide_tokyo",
      title: "Tour Guide",
      avatar: "https://via.placeholder.com/60x60/D4621D/FFFFFF?text=LG"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <a href="#" className="navbar-brand">ListMap</a>

            <ul className="navbar-nav">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            {/* <div className="navbar-actions">
              <a href="#signup" className="btn btn-primary">Sign Up</a>
            </div> */}

            {/* <button className="navbar-mobile-toggle">☰</button> */}
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
                ✈️ Explore the World with ListMap
              </span>
            </div>
            <h1 className="hero-title gradient-text">Discover. Save. Share Your Favorite Places.</h1>
            <p className="hero-subtitle">Turn your travel dreams into reality with ListMap - the ultimate travel companion for discovering hidden gems, saving must-visit spots, and sharing your adventures with fellow explorers.</p>

            <div className="hero-actions">
              <a href="#signup" className="btn btn-primary btn-lg hover-lift">
                <span className="btn-icon">🚀</span>
                Start Your Journey
              </a>
              <a href="#features" className="btn btn-secondary btn-lg hover-lift">
                <span className="btn-icon">🌍</span>
                Explore Features
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">25K+</div>
                <div className="stat-label">Places Discovered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5K+</div>
                <div className="stat-label">Travel Enthusiasts</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">150+</div>
                <div className="stat-label">Countries Explored</div>
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
      <section className="section" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">✨ Your Travel Companion Features</h2>
            <p className="section-subtitle">Everything you need to plan, explore, and share your perfect travel experiences</p>
          </div>

          <div className="features-grid">
            <div className="feature-card hover-glow" data-feature="guides">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🗺️</div>
                <div className="feature-accent"></div>
              </div>
              <h3 className="feature-title">Smart Travel Lists</h3>
              <p className="feature-description">Create and organize custom travel lists with AI-powered recommendations and local insights</p>
            </div>

            <div className="feature-card hover-glow" data-feature="maps">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🌍</div>
                <div className="feature-accent"></div>
              </div>
              <h3 className="feature-title">Interactive Maps</h3>
              <p className="feature-description">Visualize your destinations on beautiful, interactive maps with offline access and route planning</p>
            </div>

            <div className="feature-card hover-glow" data-feature="notes">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📸</div>
                <div className="feature-accent"></div>
              </div>
              <h3 className="feature-title">Memory Keeper</h3>
              <p className="feature-description">Capture memories with photos, notes, and reviews to relive your adventures forever</p>
            </div>

            <div className="feature-card hover-glow" data-feature="social">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">👥</div>
                <div className="feature-accent"></div>
              </div>
              <h3 className="feature-title">Social Discovery</h3>
              <p className="feature-description">Connect with fellow travelers, share recommendations, and discover hidden gems from locals</p>
            </div>

            <div className="feature-card hover-glow" data-feature="planning">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📅</div>
                <div className="feature-accent"></div>
              </div>
              <h3 className="feature-title">Trip Planning</h3>
              <p className="feature-description">Plan your perfect itinerary with smart scheduling and budget tracking tools</p>
            </div>

            <div className="feature-card hover-glow" data-feature="offline">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📱</div>
                <div className="feature-accent"></div>
              </div>
              <h3 className="feature-title">Mobile Ready</h3>
              <p className="feature-description">Access your lists offline, get directions, and stay connected wherever your adventures take you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">💙 What Travelers Say</h2>
            <p className="section-subtitle">Join thousands of happy travelers sharing their experiences</p>
          </div>
          
          <div className="testimonial-carousel">
            <button 
              className="carousel-nav carousel-prev" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            <div className="testimonial-content">
              <blockquote className="testimonial-quote">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="testimonial-author">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].author}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonials[currentTestimonial].author}</div>
                  <div className="testimonial-title">{testimonials[currentTestimonial].title}</div>
                </div>
              </div>
            </div>
            
            <button 
              className="carousel-nav carousel-next" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">💎 Simple, Transparent Pricing</h2>
            <p className="section-subtitle">Choose the perfect plan for your travel adventures</p>
          </div>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Explorer</h3>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">0</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-description">Perfect for casual travelers</p>
              </div>
              <ul className="pricing-features">
                <li>✓ Create up to 5 lists</li>
                <li>✓ Save up to 100 places</li>
                <li>✓ Basic map features</li>
                <li>✓ Mobile app access</li>
              </ul>
              <a href="#" className="btn btn-secondary btn-lg">Get Started Free</a>
            </div>
            
            <div className="pricing-card pricing-featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-header">
                <h3 className="pricing-title">Adventurer</h3>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">9</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-description">For serious travel enthusiasts</p>
              </div>
              <ul className="pricing-features">
                <li>✓ Unlimited lists & places</li>
                <li>✓ Advanced map features</li>
                <li>✓ Offline access</li>
                <li>✓ Photo storage</li>
                <li>✓ Social sharing</li>
                <li>✓ Priority support</li>
              </ul>
              <a href="#" className="btn btn-primary btn-lg">Start Free Trial</a>
            </div>
            
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Guide</h3>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">19</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-description">For travel professionals</p>
              </div>
              <ul className="pricing-features">
                <li>✓ Everything in Adventurer</li>
                <li>✓ Business features</li>
                <li>✓ Custom branding</li>
                <li>✓ Analytics dashboard</li>
                <li>✓ API access</li>
              </ul>
              <a href="#" className="btn btn-secondary btn-lg">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">✉️ Get in Touch</h2>
              <p className="section-subtitle">Have questions? We'd love to hear from you!</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h4>Email Us</h4>
                    <p>hello@listmap.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">💬</div>
                  <div className="contact-details">
                    <h4>Live Chat</h4>
                    <p>Available 9am-6pm EST</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h4>Social Media</h4>
                    <p>@listmapapp on all platforms</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form className="contact-form-inner">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg">
                  <span className="btn-icon">🚀</span>
                  Send Message
                </button>
              </form>
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
            <h2 className="cta-title gradient-text">Ready to Explore the World?</h2>
            <p className="cta-subtitle">Join thousands of travelers discovering amazing places with ListMap</p>

            <div className="cta-actions">
              <a href="#" className="btn btn-primary btn-xl hover-scale">
                <span className="btn-icon">✨</span>
                Start Your Adventure
              </a>
              <a href="#features" className="btn btn-secondary btn-xl hover-scale">
                <span className="btn-icon">👀</span>
                Learn More
              </a>
            </div>

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

            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Instagram">📷</a>
              <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
              <a href="#" className="social-icon" aria-label="Facebook">🕷️</a>
              <a href="#" className="social-icon" aria-label="YouTube">🎥</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;