import React, { useState, useEffect, useRef, useCallback } from 'react';
import './TestimonialsSection.css';
import stars from "../../assets/stars.png"
import clutch from "../../assets/clutch.png"
import china from "../../assets/china.png"

const testimonials = [
  {
    id: 1,
    platform: 'REVIEWED ON CLUTCH',
    platformIcon: (
      <img src={clutch} alt="" className="clutch-icon" />
    ),
    stars: 5,
    quote: 'I have personally used a number of other digital agencies, but this is the first one that I have been totally sold its position. They managed to help me with my customer service issues and now everything is far much better.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&q=80&fit=crop&crop=face',
    name: 'Mark Taylor',
    role: 'Design Lead at ACME',
    sideImage: china,
  },
  {
    id: 2,
    platform: 'REVIEWED ON CLUTCH',
    platformIcon: (
      <img src={clutch} alt="" className="clutch-icon" />
    ),
    stars: 5,
    quote: 'Working with this team completely transformed our online presence. Their SEO strategies brought us a 3x increase in organic traffic within just four months. Professional, responsive, and genuinely invested in our success.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&q=80&fit=crop&crop=face',
    name: 'Sarah Johnson',
    role: 'CEO at BrightPath Agency',
    sideImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=480&q=80',
  },
  {
    id: 3,
    platform: 'REVIEWED ON CLUTCH',
    platformIcon: (
      <img src={clutch} alt="" className="clutch-icon" />
    ),
    stars: 5,
    quote: "Their social media marketing service exceeded every expectation. The team's creativity and data-driven approach helped us build an engaged community and triple our conversion rate in under six months.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&q=80&fit=crop&crop=face',
    name: 'James Roberts',
    role: 'Marketing Director at NovaBrand',
    sideImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=480&q=80',
  },
];

const StarRating = ({ count }) => (
  <div className="stars">
    {Array.from({ length: count }).map((_, i) => (
      <img class="stars" src={stars} key={i} className="star" viewBox="0 0 20 20" fill="#f5a623"/>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const timerRef = useRef(null);

  const goTo = useCallback((index, dir = 'next') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 420);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 'next');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, 'prev');
  }, [current, goTo]);

  // Auto-scroll
  useEffect(() => {
    if (isHovered) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [isHovered]);

  const t = testimonials[current];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Heading */}
        <div className="testimonials-header">
          <h2 className="testimonials-main-heading">What Other Says About Us</h2>
        </div>

        {/* Carousel */}
        <div
          className="carousel-wrap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Prev arrow */}
          <button className="carousel-arrow carousel-arrow--prev" onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Slide */}
          <div className={`carousel-slide ${animating ? (direction === 'next' ? 'slide-exit-left' : 'slide-exit-right') : 'slide-enter'}`}>
            {/* Left: person image */}
            <div className="carousel-image-col">
              <img
                src={t.sideImage}
                alt="Client"
                className="carousel-side-img"
              />
            </div>

            {/* Right: review content */}
            <div className="carousel-content-col">
              {/* Platform badge */}
              <div className="clutch-badge">
                {t.platformIcon}
                <span className="clutch-label">{t.platform}</span>
              </div>

              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Quote */}
              <blockquote className="testimonial-quote">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="testimonial-author">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <span className="author-name">{t.name}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Next arrow */}
          <button className="carousel-arrow carousel-arrow--next" onClick={next} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
