import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-link::after, .navigation-link, .navigation-logo, .navigation-toggle, .navigation-close, .navigation-mobile-link, .navigation-mobile-overlay {
  transition: none;
  animation: none;
}
.navigation-mobile-link {
  opacity: 1;
  transform: translateX(0);
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <nav className="navigation">
          <div className="navigation-container">
            <div className="navigation-left">
              <a href="#products">
                <div className="navigation-link">
                  <span>Products</span>
                </div>
              </a>
              <a href="#about">
                <div className="navigation-link">
                  <span>Our Story</span>
                </div>
              </a>
            </div>
            <a href="/">
              <div className="navigation-logo">
                <span className="section-title navigation-logo-text">
                  Ashton
                </span>
                <span className="navigation-logo-sparkle">SparkleBubbly</span>
              </div>
            </a>
            <div className="navigation-right">
              <a href="#contact">
                <div className="navigation-link">
                  <span>Contact</span>
                </div>
              </a>
              <a href="#shop">
                <div className="navigation-link navigation-link-cta">
                  <span>Shop Now</span>
                </div>
              </a>
            </div>
            <button
              id="navToggle"
              aria-label="Toggle navigation menu"
              aria-expanded="false"
              className="navigation-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div id="navOverlay" className="navigation-mobile-overlay">
            <div className="navigation-mobile-header">
              <a href="/">
                <div className="navigation-mobile-logo">
                  <span className="section-title navigation-mobile-logo-text">
                    Ashton
                  </span>
                  <span className="navigation-mobile-logo-sparkle">
                    SparkleBubbly
                  </span>
                </div>
              </a>
              <button
                id="navClose"
                aria-label="Close navigation menu"
                className="navigation-close"
              >
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="navigation-mobile-content">
              <a href="#products">
                <div className="navigation-mobile-link">
                  <span>Products</span>
                </div>
              </a>
              <a href="#about">
                <div className="navigation-mobile-link">
                  <span>Our Story</span>
                </div>
              </a>
              <a href="#contact">
                <div className="navigation-mobile-link">
                  <span>Contact</span>
                </div>
              </a>
              <a href="#shop">
                <div className="navigation-mobile-link navigation-mobile-link-cta">
                  <span>
                    {' '}
                    Shop Now
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </nav>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<style>
        @keyframes slideInLinks {to {opacity: 1;
transform: translateX(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="navigation-container6">
          <div className="navigation-container7">
            <Script
              html={`<script defer data-name="navigation-toggle">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const navOverlay = document.getElementById("navOverlay")

  function openNav() {
    navOverlay.classList.add("navigation-mobile-active")
    navToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  function closeNav() {
    navOverlay.classList.remove("navigation-mobile-active")
    navToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navToggle.addEventListener("click", openNav)
  navClose.addEventListener("click", closeNav)

  const mobileLinks = navOverlay.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeNav)
  })

  navOverlay.addEventListener("click", (e) => {
    if (e.target === navOverlay) {
      closeNav()
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
          .navigation-container6 {
            display: none;
          }
          .navigation-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
