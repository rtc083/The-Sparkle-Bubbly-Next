import React from 'react'

import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container">
        <footer className="footer">
          <div className="footer-background-layer">
            <img
              alt="true"
              src="https://images.pexels.com/photos/8455344/pexels-photo-8455344.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
              className="footer-background-image"
            />
            <div className="footer-overlay"></div>
          </div>
          <div className="footer-content-wrapper">
            <div className="footer-content">
              <div className="footer-brand-section">
                <div className="footer-logo-container">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                    className="footer-logo-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                      <circle r="2" cx="4" cy="20"></circle>
                    </g>
                  </svg>
                  <span className="footer-logo-text">Ashton SparkleBubbly</span>
                </div>
                <p className="footer-tagline">
                  {' '}
                  Premium alcohol-free sparkling grape juice for life&apos;s
                  special moments
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="footer-social-hero">
                <h2 className="section-title footer-social-title">
                  Join Our Community
                </h2>
                <p className="footer-social-subtitle">
                  {' '}
                  Follow us for exclusive recipes, promotions, and sparkling
                  inspiration
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer-social-links">
                  <a
                    href="https://www.facebook.com/SparkleBubbly"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Follow us on Facebook"
                      className="footer-social-link"
                    >
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        className="footer-social-icon"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="footer-social-label">Facebook</span>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/theSparklebubbly"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Follow us on Instagram"
                      className="footer-social-link"
                    >
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        className="footer-social-icon"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            width="20"
                            height="20"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                      <span className="footer-social-label">Instagram</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-bottom-grid">
                <div className="footer-column-contact footer-column">
                  <h3 className="footer-column-heading">Get In Touch</h3>
                  <div className="footer-contact-list">
                    <a href="mailto:info@ashtonsparklebubbly.com?subject=">
                      <div className="footer-contact-item">
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="footer-contact-icon"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect
                              x="2"
                              y="4"
                              rx="2"
                              width="20"
                              height="16"
                            ></rect>
                          </g>
                        </svg>
                        <span>info@ashtonsparklebubbly.com</span>
                      </div>
                    </a>
                    <a href="tel:+27123456789">
                      <div className="footer-contact-item">
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                          className="footer-contact-icon"
                        >
                          <path
                            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1 2-2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>+27 123 456 789</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="footer-column-shop footer-column">
                  <h3 className="footer-column-heading">Shop</h3>
                  <nav aria-label="Product navigation" className="footer-nav">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Red Grape Sparkling</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>White Grape Sparkling</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Rosé Blend</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Gift Sets</span>
                      </div>
                    </a>
                  </nav>
                </div>
                <div className="footer-column-about footer-column">
                  <h3 className="footer-column-heading">Discover</h3>
                  <nav aria-label="About navigation" className="footer-nav">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Our Story</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Recipes &amp; Mixology</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Events &amp; Catering</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Stockists</span>
                      </div>
                    </a>
                  </nav>
                </div>
                <div className="footer-column-support footer-column">
                  <h3 className="footer-column-heading">Support</h3>
                  <nav aria-label="Support navigation" className="footer-nav">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>FAQ</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Shipping &amp; Returns</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Terms &amp; Conditions</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Privacy Policy</span>
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="footer-legal">
                <p className="footer-copyright">
                  {' '}
                  &amp;copy; 2025 Ashton SparkleBubbly. All rights reserved.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="footer-disclaimer">
                  {' '}
                  Please enjoy responsibly. Alcohol-free premium sparkling grape
                  juice.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-container {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
