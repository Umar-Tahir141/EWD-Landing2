import React, { useState } from 'react';
import './PortfolioSection.css';
import po1 from "../../assets/po1.png"
import po2 from "../../assets/po2.png"
import po3 from "../../assets/po3.png"
import po4 from "../../assets/po4.png"
import po5 from "../../assets/po5.png"
import po6 from "../../assets/po6.png"

const allProjects = [
  {
    id: 1,
    img: po1,
    alt: 'Squarespace – Everything to sell anything',
  },
  {
    id: 2,
    img: po2,
    alt: 'Webflow – The modern way to build for the web',
  },
  {
    id: 3,
    img: po3,
    alt: 'Twitter / X dashboard UI',
  },
  {
    id: 4,
    img: po4,
    alt: 'Photography portfolio grid',
  },
  {
    id: 5,
    img: po5,
    alt: 'Potion – Turn your Notion page into a website',
  },
  {
    id: 6,
    img: po6,
    alt: 'Portable – Connect everything. Achieve anything.',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    alt: 'Analytics dashboard project',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80',
    alt: 'Ecommerce branding project',
  },
];

const INITIAL_COUNT = 6;

const PortfolioSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 2, allProjects.length));
      setLoading(false);
    }, 600);
  };

  const visibleProjects = allProjects.slice(0, visibleCount);
  const hasMore = visibleCount < allProjects.length;

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        {/* Header */}
        <div className="portfolio-header">
          <h2 className="portfolio-main-heading">Portfolio</h2>
          <p className="portfolio-main-sub">
            A curated selection of our best projects across web design, branding, and digital marketing.
          </p>
        </div>

        {/* Grid */}
        <div className="portfolio-grid">
          {visibleProjects.map((project) => (
            <div className="portfolio-card" key={project.id}>
              <div className="portfolio-img-wrap">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="portfolio-img"
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-view-label">View Project</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="portfolio-load-more">
            <button
              className={`load-more-btn${loading ? ' loading' : ''}`}
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? (
                <span className="load-spinner"></span>
              ) : (
                'Load More'
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;