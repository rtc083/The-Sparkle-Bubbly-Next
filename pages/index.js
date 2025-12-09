import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>The Sparkle Bubbly</title>
          <meta property="og:title" content="The Sparkle Bubbly" />
          <link
            rel="canonical"
            href="https://old-cute-jellyfish-ma20if.teleporthq.app/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-sparkle">
          <div className="hero-sparkle-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/8071190/8071190-hd_720_1280_24fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/8071190/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline="true"
              className="hero-sparkle-video"
            ></video>
            <div className="hero-sparkle-overlay"></div>
          </div>
          <div className="hero-sparkle-content">
            <div className="hero-sparkle-badge">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
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
              <span>100% Alcohol-Free</span>
            </div>
            <h1 className="hero-title home-hero-title">Ashton SparkleBubbly</h1>
            <p className="hero-subtitle home-hero-subtitle">
              {' '}
              Premium sparkling grape juice for every celebration
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p className="section-content hero-sparkle-description">
              {' '}
              Naturally crafted from the finest grapes, delivering authentic
              taste and sophisticated bubbles without the alcohol. Elevate every
              moment with pure, elegant refreshment.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-sparkle-actions">
              <button className="btn-primary btn btn-lg">
                Explore Our Range
              </button>
              <button className="btn-outline btn btn-lg">Find in Stores</button>
            </div>
          </div>
        </section>
        <section className="products-showcase">
          <div className="products-showcase-wrapper">
            <div className="products-showcase-header">
              <h2 className="section-title">Our Premium Collection</h2>
              <p className="section-subtitle">
                {' '}
                Six exquisite flavors crafted to perfection
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="products-showcase-grid">
              <article className="products-showcase-card">
                <div className="products-showcase-image-container">
                  <img
                    alt="Elegant studio setup featuring Concord grape juice bottle, glass, and fresh grapes."
                    src="https://images.pexels.com/photos/20485965/pexels-photo-20485965.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="products-showcase-image"
                  />
                  <div className="products-showcase-shimmer"></div>
                </div>
                <div className="products-showcase-content">
                  <h3 className="products-showcase-title">Concord Classic</h3>
                  <p className="section-content products-showcase-description">
                    {' '}
                    Rich, full-bodied grape flavor with notes of dark berries
                    and a smooth finish
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </article>
              <article className="products-showcase-card">
                <div className="products-showcase-image-container">
                  <img
                    alt="Close-up of rosé wine being poured into elegant champagne flutes during a celebration."
                    src="https://images.pexels.com/photos/8459381/pexels-photo-8459381.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="products-showcase-image"
                  />
                  <div className="products-showcase-shimmer"></div>
                </div>
                <div className="products-showcase-content">
                  <h3 className="products-showcase-title">Rosé Blush</h3>
                  <p className="section-content products-showcase-description">
                    {' '}
                    Delicate pink hue with crisp floral notes and a hint of
                    summer sweetness
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </article>
              <article className="products-showcase-card">
                <div className="products-showcase-image-container">
                  <img
                    alt="Close-up of champagne being poured into glasses at a sophisticated celebration."
                    src="https://images.pexels.com/photos/3217956/pexels-photo-3217956.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="products-showcase-image"
                  />
                  <div className="products-showcase-shimmer"></div>
                </div>
                <div className="products-showcase-content">
                  <h3 className="products-showcase-title">Golden Blanc</h3>
                  <p className="section-content products-showcase-description">
                    {' '}
                    Bright citrus tones balanced with subtle grape sweetness and
                    effervescent bubbles
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </article>
              <article className="products-showcase-card">
                <div className="products-showcase-image-container">
                  <img
                    alt="Close-up of pink beverage being poured from a bottle into a clear glass with a white background."
                    src="https://images.pexels.com/photos/8217474/pexels-photo-8217474.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="products-showcase-image"
                  />
                  <div className="products-showcase-shimmer"></div>
                </div>
                <div className="products-showcase-content">
                  <h3 className="products-showcase-title">Berry Fusion</h3>
                  <p className="section-content products-showcase-description">
                    {' '}
                    A vibrant blend of wild berries with a refreshingly crisp
                    and tangy character
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </article>
              <article className="products-showcase-card">
                <div className="products-showcase-image-container">
                  <img
                    alt="Two champagne glasses filled with bubbly next to a bottle. Perfect for celebrations."
                    src="https://images.pexels.com/photos/9031941/pexels-photo-9031941.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="products-showcase-image"
                  />
                  <div className="products-showcase-shimmer"></div>
                </div>
                <div className="products-showcase-content">
                  <h3 className="products-showcase-title">Celebration Gold</h3>
                  <p className="section-content products-showcase-description">
                    {' '}
                    Luxurious golden sparkle with honeyed grape notes for
                    special occasions
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </article>
              <article className="products-showcase-card">
                <div className="products-showcase-image-container">
                  <img
                    alt="Elegant overhead view of various wine glasses showcasing red, white, and rose wines."
                    src="https://images.pexels.com/photos/7283343/pexels-photo-7283343.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="products-showcase-image"
                  />
                  <div className="products-showcase-shimmer"></div>
                </div>
                <div className="products-showcase-content">
                  <h3 className="products-showcase-title">Vintage Red</h3>
                  <p className="section-content products-showcase-description">
                    {' '}
                    Deep ruby color with complex layers of ripe grapes and
                    subtle oak essence
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="gallery-moments">
          <div className="gallery-moments-wrapper">
            <div className="gallery-moments-header">
              <h2 className="section-title">Celebrate Every Moment</h2>
              <p className="section-subtitle">
                {' '}
                Captured memories with Ashton SparkleBubbly
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="gallery-moments-carousel-container">
              <button
                aria-label="Previous image"
                className="gallery-moments-nav gallery-moments-nav-prev"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div className="gallery-moments-carousel">
                <div className="gallery-moments-track">
                  <div className="gallery-moments-slide">
                    <img
                      alt="celebration toast party lifestyle"
                      src="https://images.pexels.com/photos/27175747/pexels-photo-27175747.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                      className="gallery-moments-image"
                    />
                    <div className="gallery-moments-caption">
                      <p className="section-content">
                        {' '}
                        Friends toasting to unforgettable moments
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="gallery-moments-slide">
                    <img
                      alt="Close-up of champagne being poured into glasses at a sophisticated celebration."
                      src="https://images.pexels.com/photos/3217956/pexels-photo-3217956.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                      className="gallery-moments-image"
                    />
                    <div className="gallery-moments-caption">
                      <p className="section-content">
                        The perfect pour, every time
                      </p>
                    </div>
                  </div>
                  <div className="gallery-moments-slide">
                    <img
                      alt="celebration toast party lifestyle"
                      src="https://images.pexels.com/photos/27177222/pexels-photo-27177222.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                      className="gallery-moments-image"
                    />
                    <div className="gallery-moments-caption">
                      <p className="section-content">
                        Elevated dining experiences
                      </p>
                    </div>
                  </div>
                  <div className="gallery-moments-slide">
                    <img
                      alt="Three diverse women enjoying a lively indoor celebration, toasting with champagne and sharing laughter."
                      src="https://images.pexels.com/photos/6224711/pexels-photo-6224711.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                      className="gallery-moments-image"
                    />
                    <div className="gallery-moments-caption">
                      <p className="section-content">
                        Celebrations with those who matter
                      </p>
                    </div>
                  </div>
                  <div className="gallery-moments-slide">
                    <img
                      alt="Cozy candlelit dinner setting with red wine and elegant glassware for a luxurious dining experience."
                      src="https://images.pexels.com/photos/95949/pexels-photo-95949.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                      className="gallery-moments-image"
                    />
                    <div className="gallery-moments-caption">
                      <p className="section-content">
                        Intimate dinner settings
                      </p>
                    </div>
                  </div>
                  <div className="gallery-moments-slide">
                    <img
                      alt="Three friends toasting drinks in an outdoor kitchen setting, enjoying a casual meal together."
                      src="https://images.pexels.com/photos/27175849/pexels-photo-27175849.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                      className="gallery-moments-image"
                    />
                    <div className="gallery-moments-caption">
                      <p className="section-content">
                        {' '}
                        Summer gatherings and outdoor feasts
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="gallery-moments-slide">
                    <img
                      alt="Close-up of rosé wine being poured into elegant champagne flutes during a celebration."
                      src="https://images.pexels.com/photos/8459381/pexels-photo-8459381.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                      className="gallery-moments-image"
                    />
                    <div className="gallery-moments-caption">
                      <p className="section-content">
                        {' '}
                        Crystal clear elegance in every glass
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="gallery-moments-slide">
                    <img
                      alt="A vibrant group cheers over a delicious meal, showcasing friendship and togetherness."
                      src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                      className="gallery-moments-image"
                    />
                    <div className="gallery-moments-caption">
                      <p className="section-content">
                        Laughter and joy around the table
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                aria-label="Next image"
                className="gallery-moments-nav gallery-moments-nav-next"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="gallery-moments-indicators"></div>
          </div>
        </section>
        <section className="pairings-preview">
          <div className="pairings-preview-container">
            <div className="pairings-preview-header">
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 24 24"
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
              <h2 className="section-title">Perfect Pairings &amp; Recipes</h2>
              <p className="section-subtitle">
                {' '}
                Discover culinary harmony with Ashton SparkleBubbly
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="pairings-preview-list">
              <article className="pairings-preview-item">
                <div className="pairings-preview-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 5V2l-5.89 5.89"></path>
                      <circle r="3" cx="16.6" cy="15.89"></circle>
                      <circle r="3" cx="8.11" cy="7.4"></circle>
                      <circle r="3" cx="12.35" cy="11.65"></circle>
                      <circle r="3" cx="13.91" cy="5.85"></circle>
                      <circle r="3" cx="18.15" cy="10.09"></circle>
                      <circle r="3" cx="6.56" cy="13.2"></circle>
                      <circle r="3" cx="10.8" cy="17.44"></circle>
                      <circle r="3" cx="5" cy="19"></circle>
                    </g>
                  </svg>
                </div>
                <div className="pairings-preview-content">
                  <h3 className="pairings-preview-title">
                    {' '}
                    Concord Classic &amp; Artisan Cheese
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="section-content">
                    {' '}
                    Our rich Concord Classic pairs beautifully with aged
                    cheddar, gouda, and blue cheese. The full-bodied grape notes
                    complement the nutty, sharp flavors while cleansing the
                    palate between bites.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </article>
              <article className="pairings-preview-item">
                <div className="pairings-preview-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="pairings-preview-content">
                  <h3 className="pairings-preview-title">
                    Rosé Blush &amp; Fresh Berries
                  </h3>
                  <p className="section-content">
                    {' '}
                    The delicate floral notes of Rosé Blush elevate desserts
                    featuring strawberries, raspberries, and blackberries. Try
                    it with a berry trifle or paired with chocolate-dipped
                    fruit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </article>
              <article className="pairings-preview-item">
                <div className="pairings-preview-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle r="6" cx="12" cy="8"></circle>
                    </g>
                  </svg>
                </div>
                <div className="pairings-preview-content">
                  <h3 className="pairings-preview-title">
                    Golden Blanc &amp; Seafood
                  </h3>
                  <p className="section-content">
                    {' '}
                    Bright citrus tones make Golden Blanc an ideal companion for
                    grilled shrimp, seared scallops, or smoked salmon canapés.
                    The crisp bubbles cut through rich seafood flavors
                    effortlessly.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </article>
              <article className="pairings-preview-featured pairings-preview-item">
                <div className="pairings-preview-featured-image">
                  <img
                    alt="Tray with jewelry and bijouterie with fresh grapes and fruits placed on table with wineglass and bottles of alcoholic drinks in room"
                    src="https://images.pexels.com/photos/6394552/pexels-photo-6394552.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                </div>
                <div className="pairings-preview-featured-content">
                  <div className="pairings-preview-icon">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="pairings-preview-title">
                    {' '}
                    Featured Recipe: Sparkling Grape Sangria
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p className="section-content">
                    {' '}
                    Transform your brunch with our signature non-alcoholic
                    sangria. Combine Concord Classic with fresh orange slices,
                    apple chunks, cinnamon stick, and mint leaves. Chill for two
                    hours and serve over ice for a refreshing twist on
                    tradition.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn btn-accent">View Full Recipe</button>
                </div>
              </article>
              <article className="pairings-preview-item">
                <div className="pairings-preview-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="pairings-preview-content">
                  <h3 className="pairings-preview-title">
                    Celebration Gold &amp; Brunch
                  </h3>
                  <p className="section-content">
                    {' '}
                    Start your morning celebrations right. Celebration Gold
                    pairs exquisitely with French toast, eggs Benedict, or
                    fruit-topped pancakes. The honeyed notes add sophistication
                    to any brunch spread.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </article>
            </div>
            <div className="pairings-preview-cta">
              <button className="btn-primary btn btn-lg">
                {' '}
                Explore All Pairings &amp; Recipes
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </div>
        </section>
        <section className="testimonials-carousel">
          <div className="testimonials-carousel-wrapper">
            <div className="testimonials-carousel-header">
              <h2 className="section-title">What People Are Saying</h2>
              <p className="section-subtitle">
                {' '}
                Real moments, genuine joy, authentic experiences
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="testimonials-carousel-container">
              <button
                aria-label="Previous testimonial"
                className="testimonials-carousel-nav-prev testimonials-carousel-nav"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div className="testimonials-carousel-track-container">
                <div className="testimonials-carousel-track">
                  <article className="testimonials-carousel-card">
                    <div className="testimonials-carousel-stars">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <p className="section-content testimonials-carousel-quote">
                      {' '}
                      &quot;Finally, a sophisticated sparkling drink I can enjoy
                      at every occasion! The Rosé Blush has become my go-to for
                      brunches and celebrations. It tastes incredible and nobody
                      misses the alcohol.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="testimonials-carousel-author">
                      <img
                        alt="celebration toast party lifestyle"
                        src="https://images.pexels.com/photos/27177212/pexels-photo-27177212.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        loading="lazy"
                        className="testimonials-carousel-avatar"
                      />
                      <div className="testimonials-carousel-author-info">
                        <p className="testimonials-carousel-name">
                          Sarah Mitchell
                        </p>
                        <p className="testimonials-carousel-handle">
                          @sarahmitchell
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="testimonials-carousel-card">
                    <div className="testimonials-carousel-stars">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <p className="section-content testimonials-carousel-quote">
                      {' '}
                      &quot;As a designated driver, I&apos;ve always felt left
                      out at celebrations. Ashton SparkleBubbly changed that
                      completely. The Golden Blanc is so elegant, I feel just as
                      special toasting with friends.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="testimonials-carousel-author">
                      <img
                        alt="celebration toast party lifestyle"
                        src="https://images.pexels.com/photos/27177784/pexels-photo-27177784.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        loading="lazy"
                        className="testimonials-carousel-avatar"
                      />
                      <div className="testimonials-carousel-author-info">
                        <p className="testimonials-carousel-name">
                          Marcus Chen
                        </p>
                        <p className="testimonials-carousel-handle">
                          @marcuschen
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="testimonials-carousel-card">
                    <div className="testimonials-carousel-stars">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <p className="section-content testimonials-carousel-quote">
                      {' '}
                      &quot;I serve Ashton at all my dinner parties now. Guests
                      are always amazed when I tell them it&apos;s alcohol-free.
                      The quality and presentation are absolutely top-tier.
                      Premium in every way.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="testimonials-carousel-author">
                      <img
                        alt="Group of friends cheerfully toasting drinks at a stylish indoor bar."
                        src="https://images.pexels.com/photos/5529903/pexels-photo-5529903.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        loading="lazy"
                        className="testimonials-carousel-avatar"
                      />
                      <div className="testimonials-carousel-author-info">
                        <p className="testimonials-carousel-name">
                          Elena Rodriguez
                        </p>
                        <p className="testimonials-carousel-handle">
                          @elenarodriguez
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="testimonials-carousel-card">
                    <div className="testimonials-carousel-stars">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <p className="section-content testimonials-carousel-quote">
                      {' '}
                      &quot;The Berry Fusion is addictive! I keep a case stocked
                      for weekend gatherings. My kids love it too, which makes
                      family celebrations even more inclusive. True premium
                      quality at its finest.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="testimonials-carousel-author">
                      <img
                        alt="A vibrant group cheers over a delicious meal, showcasing friendship and togetherness."
                        src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        loading="lazy"
                        className="testimonials-carousel-avatar"
                      />
                      <div className="testimonials-carousel-author-info">
                        <p className="testimonials-carousel-name">
                          David Thompson
                        </p>
                        <p className="testimonials-carousel-handle">
                          @davidthompson
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <button
                aria-label="Next testimonial"
                className="testimonials-carousel-nav testimonials-carousel-nav-next"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="testimonials-carousel-social">
              <p className="section-content testimonials-carousel-social-text">
                {' '}
                Join our community and share your moments
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonials-carousel-social-links">
                <a href="https://www.instagram.com/theSparklebubbly">
                  <div
                    aria-label="Follow us on Instagram"
                    className="testimonials-carousel-social-link"
                  >
                    <svg
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                      height="28"
                      viewBox="0 0 24 24"
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
                    <span>@theSparklebubbly</span>
                  </div>
                </a>
                <a href="https://www.facebook.com/SparkleBubbly">
                  <div
                    aria-label="Follow us on Facebook"
                    className="testimonials-carousel-social-link"
                  >
                    <svg
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                      height="28"
                      viewBox="0 0 24 24"
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
                    <span>SparkleBubbly</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-final">
          <div className="cta-final-wrapper">
            <div className="cta-final-featured">
              <div className="cta-final-featured-content">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
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
                <h2 className="section-title">
                  Ready to Elevate Your Celebrations?
                </h2>
                <p className="cta-final-description section-content">
                  {' '}
                  Discover the full range of Ashton SparkleBubbly premium
                  sparkling grape juices. From intimate gatherings to grand
                  celebrations, we bring elegance and authentic flavor to every
                  occasion.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="cta-final-stats">
                  <div className="cta-final-stat">
                    <p className="cta-final-stat-number">100%</p>
                    <p className="section-content cta-final-stat-label">
                      Alcohol-Free
                    </p>
                  </div>
                  <div className="cta-final-stat">
                    <p className="cta-final-stat-number">6</p>
                    <p className="section-content cta-final-stat-label">
                      Premium Flavors
                    </p>
                  </div>
                  <div className="cta-final-stat">
                    <p className="cta-final-stat-number">1000+</p>
                    <p className="section-content cta-final-stat-label">
                      Happy Customers
                    </p>
                  </div>
                </div>
              </div>
              <div className="cta-final-featured-image">
                <img
                  alt="Two champagne glasses with a bottle and festive decorations, perfect for celebrations."
                  src="https://images.pexels.com/photos/12932653/pexels-photo-12932653.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="cta-final-actions">
              <div className="cta-final-action-card">
                <svg
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </g>
                </svg>
                <h3 className="cta-final-action-title">Explore Our Range</h3>
                <p className="section-content">
                  {' '}
                  Browse all six premium flavors and find your perfect sparkling
                  companion
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn-primary btn btn-lg">Shop Now</button>
              </div>
              <div className="cta-final-action-card">
                <svg
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <circle
                    r="10"
                    cx="12"
                    cy="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <h3 className="cta-final-action-title">Find in Stores</h3>
                <p className="section-content">
                  {' '}
                  Locate Ashton SparkleBubbly at your nearest retailer or
                  specialty shop
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-secondary btn-lg">
                  Store Locator
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
* {
  animation-duration: 0s !important;
  transition-duration: 0s !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="carousel-functionality">
(function(){
  const galleryCarousel = document.querySelector(".gallery-moments-track")
  const gallerySlides = document.querySelectorAll(".gallery-moments-slide")
  const galleryPrevBtn = document.querySelector(".gallery-moments-nav-prev")
  const galleryNextBtn = document.querySelector(".gallery-moments-nav-next")
  const galleryIndicatorsContainer = document.querySelector(
    ".gallery-moments-indicators"
  )

  let galleryCurrentIndex = 0
  const galleryTotalSlides = gallerySlides.length

  for (let i = 0; i < galleryTotalSlides; i++) {
    const indicator = document.createElement("button")
    indicator.classList.add("gallery-moments-indicator")
    indicator.setAttribute("aria-label", \`Go to slide \${i + 1}\`)
    if (i === 0) indicator.classList.add("active")
    indicator.addEventListener("click", () => galleryGoToSlide(i))
    galleryIndicatorsContainer.appendChild(indicator)
  }

  const galleryIndicators = document.querySelectorAll(
    ".gallery-moments-indicator"
  )

  function galleryUpdateCarousel() {
    galleryCarousel.style.transform = \`translateX(-\${
      galleryCurrentIndex * 100
    }%)\`
    galleryIndicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === galleryCurrentIndex)
    })
  }

  function galleryGoToSlide(index) {
    galleryCurrentIndex = index
    galleryUpdateCarousel()
  }

  galleryPrevBtn.addEventListener("click", () => {
    galleryCurrentIndex =
      (galleryCurrentIndex - 1 + galleryTotalSlides) % galleryTotalSlides
    galleryUpdateCarousel()
  })

  galleryNextBtn.addEventListener("click", () => {
    galleryCurrentIndex = (galleryCurrentIndex + 1) % galleryTotalSlides
    galleryUpdateCarousel()
  })

  const testimonialsTrack = document.querySelector(
    ".testimonials-carousel-track"
  )
  const testimonialsCards = document.querySelectorAll(
    ".testimonials-carousel-card"
  )
  const testimonialsPrevBtn = document.querySelector(
    ".testimonials-carousel-nav-prev"
  )
  const testimonialsNextBtn = document.querySelector(
    ".testimonials-carousel-nav-next"
  )

  let testimonialsCurrentIndex = 0
  const testimonialsTotalCards = testimonialsCards.length
  let testimonialsCardsPerView = 3

  function testimonialsUpdateCardsPerView() {
    if (window.innerWidth <= 767) {
      testimonialsCardsPerView = 1
    } else if (window.innerWidth <= 991) {
      testimonialsCardsPerView = 2
    } else {
      testimonialsCardsPerView = 3
    }
  }

  function testimonialsUpdateCarousel() {
    const cardWidth = testimonialsCards[0].offsetWidth
    const gap = parseFloat(getComputedStyle(testimonialsTrack).gap)
    const offset = (cardWidth + gap) * testimonialsCurrentIndex
    testimonialsTrack.style.transform = \`translateX(-\${offset}px)\`
  }

  testimonialsPrevBtn.addEventListener("click", () => {
    if (testimonialsCurrentIndex > 0) {
      testimonialsCurrentIndex--
      testimonialsUpdateCarousel()
    }
  })

  testimonialsNextBtn.addEventListener("click", () => {
    if (
      testimonialsCurrentIndex <
      testimonialsTotalCards - testimonialsCardsPerView
    ) {
      testimonialsCurrentIndex++
      testimonialsUpdateCarousel()
    }
  })

  window.addEventListener("resize", () => {
    testimonialsUpdateCardsPerView()
    testimonialsCurrentIndex = Math.min(
      testimonialsCurrentIndex,
      testimonialsTotalCards - testimonialsCardsPerView
    )
    testimonialsUpdateCarousel()
  })

  testimonialsUpdateCardsPerView()
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div aria-label="Sign up to TeleportHQ" className="home-container6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon105"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text4">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon105 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text4 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default Home
